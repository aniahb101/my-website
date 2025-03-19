
import { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import AnimatedSection from './AnimatedSection';

const ContactItem = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-secondary/50 transition-colors">
    <div className="bg-primary/10 rounded-full p-3 text-primary">{icon}</div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-muted-foreground">{text}</p>
    </div>
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section clip-triangle bg-secondary/50">
      <div className="section-inner">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-balance font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-10">
          <AnimatedSection className="lg:col-span-1">
            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                text="contact@example.com"
              />
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                title="Phone"
                text="+1 (555) 123-4567"
              />
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                title="Location"
                text="San Francisco, CA"
              />
            </div>

            <div className="mt-8 bg-card border border-border/50 rounded-xl p-6">
              <h4 className="text-lg font-medium mb-3">Quick Response Time</h4>
              <p className="text-muted-foreground mb-4">
                I'll respond to your message within 24 hours. Looking forward to hearing from you!
              </p>
              <p className="text-sm text-muted-foreground">
                Available for new opportunities
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" animation="fade-in-left">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 bg-card rounded-xl border border-border/50"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="loader mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
