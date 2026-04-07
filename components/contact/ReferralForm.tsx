"use client"

import { Lock, Upload, ArrowRight, X, FileText, Image as ImageIcon } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { useRef, useState } from "react";

interface FormFieldProps {
    label: string;
    name: string;
    type: "text" | "textarea";
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField = ({ label, name, type, placeholder, value, onChange }: FormFieldProps) => (
    <div className="space-y-2">
        <label className="text-xs font-medium text-[#8BA3C7] uppercase tracking-widest pl-1">{label}</label>
        {type === "textarea" ? (
            <textarea 
                name={name}
                rows={4} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                className="w-full bg-[#F8FAFF] border-none rounded-xl p-4 text-primary placeholder-[#8BA3C7]/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none" 
            />
        ) : (
            <input 
                name={name}
                type="text" 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                className="w-full bg-[#F8FAFF] border-none rounded-xl p-4 text-primary placeholder-[#8BA3C7]/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all" 
            />
        )}
    </div>
);

interface SelectedFile {
    file: File;
    preview: string | null;
}

export default function ReferralForm() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]);
    const [formData, setFormData] = useState({
        gpName: '',
        medicalCouncilId: '',
        patientDetails: '',
        clinicalNotes: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            if (selectedFiles.length > 0 && selectedFiles[0].preview) {
                URL.revokeObjectURL(selectedFiles[0].preview);
            }
            const file = e.target.files[0];
            const newFile = {
                file,
                preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
            };
            setSelectedFiles([newFile]);
        }
    };

    const removeFile = () => {
        if (selectedFiles.length > 0 && selectedFiles[0].preview) {
            URL.revokeObjectURL(selectedFiles[0].preview);
        }
        setSelectedFiles([]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            attachment: selectedFiles.length > 0 ? selectedFiles[0].file : null
        };
        console.log("Form Submitted Successfully:", submissionData);
        
        // Clear Form Data
        setFormData({
            gpName: '',
            medicalCouncilId: '',
            patientDetails: '',
            clinicalNotes: ''
        });

        // Clear Selected File & Revoke URL
        removeFile();
    };

    return (
        <Fade direction="right" triggerOnce>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,85,150,0.08)] border border-[#EFF4FF]">
                <div className="flex justify-between items-start mb-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-primary">
                            Secure Referral Portal
                        </h2>
                        <p className="text-[#8BA3C7] text-sm font-medium">
                            End-to-end encrypted file submission.
                        </p>
                    </div>
                    <div className="p-3 bg-[#EFF4FF] rounded-xl text-primary">
                        <Lock className="w-6 h-6" />
                    </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField 
                            label="GP Name" 
                            name="gpName"
                            type="text" 
                            placeholder="Dr. Jane Smith" 
                            value={formData.gpName}
                            onChange={handleInputChange}
                        />
                        <FormField 
                            label="Medical Council No." 
                            name="medicalCouncilId"
                            type="text" 
                            placeholder="12345" 
                            value={formData.medicalCouncilId}
                            onChange={handleInputChange}
                        />
                    </div>

                    <FormField 
                        label="Patient Initials & DOB" 
                        name="patientDetails"
                        type="text" 
                        placeholder="J.D. - 12/05/1975" 
                        value={formData.patientDetails}
                        onChange={handleInputChange}
                    />
                    <FormField 
                        label="Clinical Notes / Priority Level" 
                        name="clinicalNotes"
                        type="textarea" 
                        placeholder="Suspected chronic venous insufficiency..." 
                        value={formData.clinicalNotes}
                        onChange={handleInputChange}
                    />

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-[#8BA3C7] uppercase tracking-widest pl-1">
                                Attachments (Referral Letter / Clinical Photos)
                            </label>
                            <div 
                                onClick={handleUploadClick}
                                className="border-2 border-dashed border-[#DDE9FF] rounded-2xl p-8 text-center space-y-4 hover:border-primary/30 transition-colors cursor-pointer bg-[#F8FAFF]/50"
                            >
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    className="hidden" 
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={handleFileChange}
                                />
                                <div className="flex justify-center">
                                    <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                                        <Upload className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-primary font-bold text-sm">Drop file here or click to browse</p>
                                    <p className="text-[#8BA3C7] text-[10px] uppercase font-bold tracking-tighter">PDF, JPG, PNG (Max 10MB total)</p>
                                </div>
                            </div>
                        </div>

                        {/* Previews / Selected File */}
                        {selectedFiles.length > 0 && (
                            <div className="grid grid-cols-1 gap-3">
                                {selectedFiles.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-[#F8FAFF] rounded-xl border border-primary/10 relative">
                                        <div className="w-12 h-12 shrink-0 bg-white rounded-lg border border-[#EFF4FF] flex items-center justify-center overflow-hidden">
                                            {item.preview ? (
                                                <img 
                                                    src={item.preview} 
                                                    alt={item.file.name} 
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <FileText className="w-6 h-6 text-primary/30" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-bold text-primary truncate">{item.file.name}</p>
                                            <p className="text-[10px] text-[#8BA3C7] uppercase">{(item.file.size / 1024).toFixed(1)} KB</p>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); removeFile(); }}
                                            className="p-1.5 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors text-[#8BA3C7]"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#004a82] transition-colors shadow-lg shadow-primary/20 group">
                        Submit Secure Referral
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-center text-[10px] font-bold text-[#8BA3C7] uppercase tracking-[0.15em] pt-4">
                        Compliant with GDPR and Medical Council Guidelines
                    </p>
                </form>
            </div>
        </Fade>
    );
}
