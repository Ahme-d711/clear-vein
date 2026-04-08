"use client"

import { Plus, Trash2, GripVertical } from 'lucide-react';
import { AdminCard, FormField } from './AdminCard';

interface Item {
  [key: string]: string;
}

interface ListManagerProps {
  title: string;
  items: Item[];
  fields: { key: string; label: string; type?: 'text' | 'textarea' }[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, key: string, value: string) => void;
  iconColor?: string;
}

const inputStyles = "w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all outline-none text-gray-800 bg-white leading-relaxed";

export function ListManager({ title, items, fields, onAdd, onRemove, onChange, iconColor }: ListManagerProps) {
  return (
    <AdminCard 
      title={title} 
      iconColor={iconColor}
      action={
        <button 
          type="button" 
          onClick={onAdd}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors font-bold text-sm"
        >
          <Plus className="w-4 h-4" /> Add Item
        </button>
      }
    >
      <div className="space-y-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="group relative bg-[#F8FAFF] p-6 rounded-2xl border border-gray-100 animate-in fade-in zoom-in duration-300"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1 grid grid-cols-1 gap-4">
                {fields.map((field) => (
                  <FormField key={field.key} label={field.label}>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={item[field.key] || ''}
                        onChange={(e) => onChange(index, field.key, e.target.value)}
                        className={inputStyles}
                        rows={2}
                      />
                    ) : (
                      <input
                        type="text"
                        value={item[field.key] || ''}
                        onChange={(e) => onChange(index, field.key, e.target.value)}
                        className={inputStyles}
                      />
                    )}
                  </FormField>
                ))}
              </div>
              
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="mt-8 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all rounded-lg"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <GripVertical className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        ))}
        
        {items.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-100">
            <p className="text-gray-400 font-light">No items added yet. Click 'Add Item' to begin.</p>
          </div>
        )}
      </div>
    </AdminCard>
  );
}
