'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  MessageSquare,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/Icons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent directly to my inbox via Resend.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Network error. Could not send message.';
      setStatus({
        type: 'error',
        message: errorMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <div className="section-label mb-2">LET&apos;S CONNECT</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#09090b] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[#52525b] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Open to discussing high-impact Product & Performance Analytics roles, AI automation projects, or collaborative growth initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white rounded-[36px] border border-[#ececee] p-7 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] flex items-center justify-center text-[#18181b]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#71717a]">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-[#09090b] hover:text-[#ff5a00] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                title="Copy Email"
                className="p-2.5 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-[#52525b] hover:text-[#09090b] hover:bg-[#ececee] transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-[36px] border border-[#ececee] p-7 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] flex items-center justify-center text-[#18181b]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#71717a]">Phone Number</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-[#09090b] hover:text-[#ff5a00] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                title="Copy Phone"
                className="p-2.5 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] text-[#52525b] hover:text-[#09090b] hover:bg-[#ececee] transition-colors"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-[36px] border border-[#ececee] p-7 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-[14px] bg-[#f4f4f5] border border-[#ececee] flex items-center justify-center text-[#18181b]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-[#71717a]">Location & Availability</div>
                <div className="text-sm font-semibold text-[#09090b]">{personalInfo.location}</div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[24px] border border-[#ececee] p-5 flex items-center gap-3 group hover:border-[#d4d4d8] transition-colors"
              >
                <div className="w-9 h-9 rounded-[12px] bg-[#f4f4f5] flex items-center justify-center text-[#18181b] group-hover:text-[#ff5a00] transition-colors">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#71717a]">LinkedIn</div>
                  <div className="text-xs font-semibold text-[#09090b]">
                    /in/vishnu-ej
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[24px] border border-[#ececee] p-5 flex items-center gap-3 group hover:border-[#d4d4d8] transition-colors"
              >
                <div className="w-9 h-9 rounded-[12px] bg-[#f4f4f5] flex items-center justify-center text-[#18181b] group-hover:text-[#ff5a00] transition-colors">
                  <GitHubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#71717a]">GitHub</div>
                  <div className="text-xs font-semibold text-[#09090b]">
                    /vishnu-ej
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-white rounded-[36px] border border-[#ececee] p-7">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-[#ff5a00]" />
              <h3 className="text-lg font-bold text-[#09090b]">Send Direct Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#52525b] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#ececee] rounded-[14px] text-sm text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#52525b] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#ececee] rounded-[14px] text-sm text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#52525b] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Opportunity Discussion / Analytics Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#ececee] rounded-[14px] text-sm text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#52525b] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Vishnu, I came across your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#ececee] rounded-[14px] text-sm text-[#09090b] placeholder-[#a1a1aa] focus:outline-none focus:border-[#09090b] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center !py-3.5 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status.type === 'success' && (
                <div className="p-4 rounded-[14px] bg-[#f4f4f5] border border-emerald-500/30 text-emerald-800 text-sm flex items-center gap-2.5">
                  <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="p-4 rounded-[14px] bg-[#f4f4f5] border border-rose-500/30 text-rose-800 text-sm flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
