"use client"

import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                toast.success("Message sent successfully!");
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            toast.error("Failed to send message. Please try again.");
            console.error(error);
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-[0_20px_50px_rgba(0,85,150,0.05)] border border-[#EFF4FF]">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Message Received</h3>
                <p className="text-[#505F76] mb-8 max-w-md mx-auto">
                    Thank you for contacting Clear Vein Clinic. Our team will review your enquiry and get back to you shortly.
                </p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-[#004a82] transition-colors"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <Fade direction="up" triggerOnce>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,85,150,0.08)] border border-[#EFF4FF]">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-3">Enquire Now</h2>
                    <p className="text-[#8BA3C7] font-medium">Please fill out the form below and we will contact you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] ml-1">Full Name</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8BA3C7] group-focus-within:text-primary transition-colors">
                                    <User className="w-5 h-5" />
                                </div>
                                <input 
                                    name="name"
                                    type="text" 
                                    required
                                    placeholder="Enter your full name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 bg-[#F8FAFF] border-none rounded-2xl text-primary placeholder-[#8BA3C7]/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8BA3C7] group-focus-within:text-primary transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input 
                                    name="email"
                                    type="email" 
                                    required
                                    placeholder="john@example.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 bg-[#F8FAFF] border-none rounded-2xl text-primary placeholder-[#8BA3C7]/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8BA3C7] group-focus-within:text-primary transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <input 
                                    name="phone"
                                    type="tel" 
                                    placeholder="+353 00 000 0000" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 bg-[#F8FAFF] border-none rounded-2xl text-primary placeholder-[#8BA3C7]/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] ml-1">Subject</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8BA3C7] group-focus-within:text-primary transition-colors">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <input 
                                    name="subject"
                                    type="text" 
                                    placeholder="e.g. Varicose Vein Treatment" 
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-4 bg-[#F8FAFF] border-none rounded-2xl text-primary placeholder-[#8BA3C7]/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] ml-1">Your Message</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-6 text-[#8BA3C7] group-focus-within:text-primary transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <textarea 
                                name="message"
                                required
                                rows={5} 
                                placeholder="How can we help you?" 
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-4 bg-[#F8FAFF] border-none rounded-2xl text-primary placeholder-[#8BA3C7]/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                            />
                        </div>
                    </div>

                    <button 
                        disabled={status === 'loading'}
                        className="w-full bg-primary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#004a82] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20 group"
                    >
                        {status === 'loading' ? (
                            <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                    
                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 text-xs font-bold justify-center mt-4">
                            <AlertCircle className="w-4 h-4" />
                            Something went wrong. Please try again.
                        </div>
                    )}
                </form>
            </div>
        </Fade>
    );
}
