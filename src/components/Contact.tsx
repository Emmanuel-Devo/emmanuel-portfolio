import React, { useState } from 'react';
import {
  Mail,
  GitBranch,
  Send,
  Copy,
  Check,
  ExternalLink,
  Phone,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjywboez';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSubmitSuccess(false);

    // Validate required fields (name, email, message mandatory; subject optional)
    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setFormError('Please enter your message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: { name: string; email: string; message: string; subject?: string } = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };
      if (formData.subject.trim()) {
        payload.subject = formData.subject.trim();
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json().catch(() => null);
        if (errorData && Array.isArray(errorData.errors) && errorData.errors.length > 0) {
          const detailedMessage = errorData.errors
            .map((err: { message?: string }) => err.message)
            .filter(Boolean)
            .join(', ');
          setFormError(detailedMessage || 'Failed to submit form. Please verify your details.');
        } else {
          setFormError('Unable to send message right now. Please try again or email emmanuelchukwuere.me@gmail.com directly.');
        }
      }
    } catch {
      setFormError('A network error occurred. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B1120] text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s Connect
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            I am interested in Cloud Engineering and DevOps opportunities, technical collaboration and learning from experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Verified Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                  Email Address
                </span>
                <span className="text-xs text-blue-400 font-mono">Verified Contact</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-900/40 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400">Direct Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  <span>Compose</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                  Phone Number
                </span>
                <span className="text-xs text-emerald-400 font-mono">Mobile / WhatsApp</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/40 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400">Contact Number</p>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <span>Call</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* GitHub & Location Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                  Source Code &amp; Location
                </span>
                <span className="text-xs text-slate-400 font-mono">Nigeria</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-white">
                  <GitBranch className="w-5 h-5 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-400">GitHub Profile</p>
                  <p className="text-sm font-semibold text-white truncate">
                    github.com/Emmanuel-Devo
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Formspree Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-2xl space-y-6">
              
              <div className="pb-4 border-b border-slate-800/80">
                <h3 className="text-lg font-bold text-white">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Have an inquiry or opportunity? Send a message directly and I will get back to you.
                </p>
              </div>

              {formError && (
                <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-300 flex items-center gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Success Message - Only shown after Formspree confirms successful HTTP response */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-200 space-y-1.5 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <p className="font-semibold text-white text-sm">
                      Your message has been sent successfully!
                    </p>
                  </div>
                  <p className="text-slate-300 pl-6 text-[11px] leading-relaxed">
                    Thank you for reaching out. Emmanuel Chukwuere will review your note and respond to your email.
                  </p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} autoComplete="off" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-500 disabled:opacity-60"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-500 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-300">
                    Subject <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Cloud Engineering & DevOps Inquiry"
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-500 disabled:opacity-60"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    disabled={isSubmitting}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-500 resize-y disabled:opacity-60"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <span className="text-[11px] text-slate-400 text-center sm:text-right font-mono">
                    Protected by Formspree
                  </span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
