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
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.fallbackRequired) {
        // Graceful fallback to mailto if API key is not yet set up
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry from ' + formData.name
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;

        setStatus({
          type: 'success',
          message: 'Opening email to send your message. Thank you for reaching out!',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again or email directly.',
        });
      }
    } catch {
      // Fallback on network/fetch exception
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;

      setStatus({
        type: 'success',
        message: 'Opening email to send your message. Thank you for reaching out!',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Send className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Open to discussing high-impact Product & Performance Analytics roles, AI automation projects, or collaborative growth initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                title="Copy Email"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone Number</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                title="Copy Phone"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-300 transition-colors"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Location & Availability</div>
                <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-blue-500/40 flex items-center gap-3 group transition-all"
              >
                <LinkedInIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400">LinkedIn</div>
                  <div className="text-xs font-semibold text-white group-hover:text-blue-300">
                    /in/vishnu-ej
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-purple-500/40 flex items-center gap-3 group transition-all"
              >
                <GitHubIcon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400">GitHub</div>
                  <div className="text-xs font-semibold text-white group-hover:text-purple-300">
                    /vishnu-ej
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form with Resend Integration */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Send Direct Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Opportunity Discussion / Analytics Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Vishnu, I came across your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-900/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message via Email</span>
                  </>
                )}
              </button>

              {status.type === 'success' && (
                <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
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
