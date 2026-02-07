"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { FormEvent, useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const services = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "AI Solutions",
  "E-commerce",
  "Consulting"
];

const budgets = [
  "< $5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k+"
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const form = useRef<HTMLFormElement>(null);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const formData = new FormData(form.current!);
    const name = formData.get("from_name") as string;
    const email = formData.get("reply_to") as string;
    const message = formData.get("message_html") as string;

    if (!name || name.trim().length < 2) {
      newErrors.from_name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.reply_to = "Please enter a valid email address.";
    }
    
    // Subject is now optional/derived, or we can enforce it. 
    // Let's rely on the form data but relax the strict validation if we treat it as an interaction flow.
    // However, for EmailJS we need a subject. We can auto-generate it if missing or keep the field.
    // User asked for "Premium", often "Subject" is hidden in favor of "What are you building?".
    
    if (!message || message.trim().length < 5) {
      newErrors.message_html = "Please tell us a bit about your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmitted < 60000) {
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    const SERVICE_ID = 'service_fcayqym';
    const TEMPLATE_ID = 'template_6ujho9a';
    const PUBLIC_KEY = 'OD-5E-TS51P9Wf7SD';

    if (form.current) {
        const formData = new FormData(form.current);
        
        // Ensure arrays and values are strings
        const serviceList = selectedServices.length > 0 ? selectedServices.join(", ") : "Not Specified";
        const budgetInfo = selectedBudget || "Not Specified";
        const companyName = formData.get('company')?.toString() || "N/A";
        const rawMessage = formData.get('message_html')?.toString() || "";
        
        // Create a structured message for the email body
        // We use the variable 'message_html' because that is what your template is likely using for the main body.
        // We pack all the extra data into it.
        const fullMessageBody = `
--------------------------------------------------
NEW PROJECT INQUIRY
--------------------------------------------------

DETAILS:
• Services: ${serviceList}
• Budget:   ${budgetInfo}
• Company:  ${companyName}

MESSAGE:
${rawMessage}

--------------------------------------------------
Sender: ${formData.get('from_name')} (${formData.get('reply_to')})
`;

        const templateParams = {
            from_name: formData.get('from_name'),
            reply_to: formData.get('reply_to'),
            subject: `New Inquiry: ${companyName !== "N/A" ? companyName : "Project"}`,
            company: companyName,
            message_html: fullMessageBody
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              setIsSubmitting(false);
              setIsSuccess(true);
              setLastSubmitted(Date.now());
              form.current?.reset();
              setSelectedServices([]);
              setSelectedBudget("");
              setErrors({});
          }, (error) => {
              console.error("EmailJS Error:", error);
              setIsSubmitting(false);
              const errorMessage = error?.text || error?.message || "Failed to send message. Please try again.";
              alert(`Error: ${errorMessage}`);
          });
    }
  };

  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context & Info */}
            <motion.div 
              className="lg:col-span-5 space-y-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Available for new projects</span>
                </motion.div>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Let's craft <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">brilliance.</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                  We help ambitious brands and startups build digital products that define the future. Ready to start yours?
                </p>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                
                {/* Email */}
                <div className="group flex items-center space-x-4 transition-colors">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                    <Mail className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email us at</div>
                    <a href="mailto:devpeaks26@gmail.com" className="text-lg text-white font-medium hover:text-blue-400 transition-colors">
                      devpeaks26@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center space-x-4 transition-colors">
                   <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
                    <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Chat on WhatsApp</div>
                    <a href="https://wa.me/message/UDMZO4FVKTXII1" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-medium hover:text-purple-400 transition-colors">
                      Start a detailed discussion
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Premium Form */}
            <motion.div
               className="lg:col-span-7"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
            >
               <div className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-1 overflow-hidden">
                 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
                 
                 <div className="relative rounded-[20px] bg-[#0A0A0A] p-8 lg:p-10">
                   {isSuccess ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center py-20"
                      >
                          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                              <CheckCircle className="h-10 w-10 text-green-500" />
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-4">Message Received</h3>
                          <p className="text-gray-400 max-w-sm mb-10 text-lg">
                              Thank you for trusting DevPeaks. We're reviewing your project and will respond within 24 hours.
                          </p>
                          <Button 
                            onClick={() => setIsSuccess(false)}
                            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 font-medium"
                          >
                              Start New Project
                          </Button>
                      </motion.div>
                   ) : (
                       <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                          
                          {/* 1. Services Section */}
                          <div className="space-y-4">
                            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">I'm interested in...</label>
                            <div className="flex flex-wrap gap-3">
                              {services.map((service) => (
                                <button
                                  key={service}
                                  type="button"
                                  onClick={() => toggleService(service)}
                                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                    selectedServices.includes(service)
                                      ? "bg-white text-black border-white"
                                      : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:bg-white/10"
                                  }`}
                                >
                                  {service}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* 2. Budget Section */}
                          <div className="space-y-4">
                             <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Project Budget (USD)</label>
                             <div className="flex flex-wrap gap-3">
                                {budgets.map((budget) => (
                                  <button
                                    key={budget}
                                    type="button"
                                    onClick={() => setSelectedBudget(budget)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                      selectedBudget === budget
                                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                                        : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:bg-white/10"
                                    }`}
                                  >
                                    {budget}
                                  </button>
                                ))}
                             </div>
                          </div>

                          <div className="h-px bg-white/5 my-8" />

                          {/* 3. Input Fields Grid */}
                          <div className="grid gap-6 sm:grid-cols-2">
                             <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                                <Input 
                                  id="name" 
                                  name="from_name" 
                                  placeholder="John Doe" 
                                  className={`h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-xl transition-all ${errors.from_name ? "border-red-500/50" : ""}`}
                                />
                             </div>
                             <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                                <Input 
                                  id="email" 
                                  name="reply_to" 
                                  type="email" 
                                  placeholder="john@company.com" 
                                  className={`h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-xl transition-all ${errors.reply_to ? "border-red-500/50" : ""}`}
                                />
                             </div>
                          </div>

                          <div className="space-y-2">
                             <label htmlFor="company" className="text-sm font-medium text-gray-400">Company Name</label>
                             <Input 
                               id="company" 
                               name="company" 
                               placeholder="e.g. Acme Corp" 
                               className="h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-xl transition-all"
                             />
                          </div>
                      
                          <div className="space-y-2">
                             <label htmlFor="message" className="text-sm font-medium text-gray-400">Tell us about the project</label>
                             <Textarea 
                              id="message" 
                              name="message_html" 
                              placeholder="What are your goals? What problem are we solving?" 
                              className={`min-h-[160px] resize-none bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 rounded-xl p-4 text-base transition-all ${errors.message_html ? "border-red-500/50" : ""}`}
                             />
                             {errors.message_html && <p className="text-sm text-red-400 mt-1">{errors.message_html}</p>}
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full h-14 bg-white text-black hover:bg-gray-200 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                <>
                                  Send Proposal
                                  <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                          </Button>
                       </form>
                   )}
                 </div>
               </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </main>
  );
}
