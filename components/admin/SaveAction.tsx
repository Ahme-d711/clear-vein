import { Save, Loader2, CheckCircle2 } from 'lucide-react';

interface SaveActionProps {
  saving: boolean;
  success: boolean;
}

export function SaveAction({ saving, success }: SaveActionProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between gap-4">
      <div>
        <h4 className="font-semibold text-gray-800">Review Changes</h4>
        <p className="text-xs text-gray-400">Ensure all fields are correct before publishing.</p>
      </div>
      <div className="flex items-center gap-4">
        {success && (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 py-2 px-4 rounded-lg border border-emerald-100 animate-in fade-in zoom-in">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Published!</span>
          </div>
        )}
        <button 
          type="submit" 
          disabled={saving} 
          className="px-8 py-3 bg-[#002045] text-white rounded-xl font-bold shadow-lg shadow-[#002045]/20 hover:bg-[#002045]/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 group"
        >
          {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5 group-hover:scale-110 transition-transform" /> Publish Updates</>}
        </button>
      </div>
    </div>
  );
}
