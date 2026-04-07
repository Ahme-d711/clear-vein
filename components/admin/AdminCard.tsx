interface AdminCardProps {
  title: string;
  iconColor?: string;
  children: React.ReactNode;
}

export function AdminCard({ title, iconColor = "bg-blue-500", children }: AdminCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
        <span className={`w-2 h-2 ${iconColor} rounded-full`} />
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="p-8 space-y-6">
        {children}
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  hint?: string;
}

export function FormField({ label, children, hint }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
      {hint && <p className="text-xs text-gray-400 mt-2">{hint}</p>}
    </div>
  );
}
