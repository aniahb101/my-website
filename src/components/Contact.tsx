import { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import AnimatedSection from './AnimatedSection';
import '../components/css/Contact.css';

const ContactItem = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="contact-item">
    <div className="contact-icon">{icon}</div>
    <div className="contact-details">
      <h4 className="item-title">{title}</h4>
      <p className="item-text">{text}</p>
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

    emailjs
      .sendForm(
        'service_5u2q7od',      // Your Service ID
        'template_v2ohf7b',     // Your Template ID
        e.target as HTMLFormElement,
        'SkWpjJwbs4b3nNTwe'     // Your Public Key
      )
      .then(
        (result) => {
          toast.success('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error('There was an error sending your message.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <AnimatedSection className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </AnimatedSection>

        <div className="contact-grid">
          <AnimatedSection className="contact-info">
            <div className="contact-items">
              <ContactItem
                icon={<Mail className="icon" />}
                title="Email"
                text="aniah6767@gmail.com"
              />
              <ContactItem
                icon={<Phone className="icon" />}
                title="Phone"
                text="443-803-8717"
              />
              <ContactItem
                icon={<MapPin className="icon" />}
                title="Location"
                text="Baltimore,MD"
              />
            </div>

            <div className="response-box">
              <h4 className="response-title">Quick Response Time</h4>
              <p className="response-text">
                I'll respond to your message within 24 hours. Looking forward to hearing from you!
              </p>
              <p className="response-note">
                Available for new opportunities
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="form-section" animation="fade-in-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
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

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
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

              <Button type="submit" size="lg" className="form-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="loader" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="send-icon" /> Send Message
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
