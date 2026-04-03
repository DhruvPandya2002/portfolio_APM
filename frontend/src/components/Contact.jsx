import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Linkedin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FormSubmit will handle the email sending
    // The form will submit naturally to FormSubmit
    toast({
      title: "Sending message...",
      description: "Your message is being sent.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Let's <span className="text-yellow-400">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Aiming for product roles, consulting opportunities, and interesting collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Whether you're looking for a product operations specialist, want to discuss a project, or just want to chat about product and growth — I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:dhruvpandya2002@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,107,53,1)] group-hover:shadow-[5px_5px_0px_0px_rgba(255,107,53,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-semibold">EMAIL</p>
                    <p className="text-white font-medium">dhruvpandya2002@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/dhruvpandya2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(168,85,247,1)] group-hover:shadow-[5px_5px_0px_0px_rgba(168,85,247,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-semibold">LINKEDIN</p>
                    <p className="text-white font-medium">linkedin.com/in/dhruvpandya2002</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white border-2 border-gray-200 shadow-[6px_6px_0px_0px_rgba(255,211,0,1)]">
              <form 
                action="https://formsubmit.co/dhruvpandya2002@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://career-portfolio-pm.preview.emergentagent.com/?success=true" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    NAME
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="border-2 border-gray-300 focus:border-yellow-400 focus:ring-0 text-black"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    EMAIL
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="border-2 border-gray-300 focus:border-yellow-400 focus:ring-0 text-black"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    SUBJECT
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="border-2 border-gray-300 focus:border-yellow-400 focus:ring-0 text-black"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="border-2 border-gray-300 focus:border-yellow-400 focus:ring-0 text-black"
                    placeholder="Tell me more..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 text-lg rounded-lg shadow-[4px_4px_0px_0px_rgba(255,107,53,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,107,53,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                >
                  <span className="flex items-center gap-2 justify-center">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;