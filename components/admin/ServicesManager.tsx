import { Plus, Trash2 } from 'lucide-react';

interface ServicesManagerProps {
  services: string[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, value: string) => void;
}

export function ServicesManager({ services, onAdd, onRemove, onChange }: ServicesManagerProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          <h3 className="font-semibold text-gray-800">Services List</h3>
        </div>
        <button 
          type="button" 
          onClick={onAdd}
          className="p-1 px-3 bg-primary/5 hover:bg-primary/10 text-primary rounded-md text-xs font-bold transition-colors flex items-center gap-1"
        >
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>
      <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
        {services.map((service, idx) => (
          <div key={idx} className="flex gap-2 group">
            <input 
              type="text"
              value={service}
              onChange={(e) => onChange(idx, e.target.value)}
              className="flex-1 px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-primary outline-none transition-all"
              placeholder={`Service ${idx + 1}`}
            />
            <button 
              type="button" 
              onClick={() => onRemove(idx)}
              className="p-2 text-gray-300 hover:text-red-500 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
        {services.length === 0 && (
          <div className="text-center py-6">
            <p className="text-sm text-gray-400">No services added.</p>
          </div>
        )}
      </div>
    </div>
  );
}
