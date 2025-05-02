
import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 marble-texture-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-marble-darkbrown">Send us a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-32"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-marble-brown hover:bg-marble-darkbrown text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Right: Contact Information */}
          <div className="flex flex-col justify-between">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-6 h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217510.14250165952!2d71.34218720592287!3d30.243626200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975372582c5337f%3A0xf14bd922d7e2c2a6!2sKPK%2C%20Pakistan!5e0!3m2!1sen!2s!4v1651859457629!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="ZairatMarbel Location"
              ></iframe>
            </div>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-marble-cream rounded-full p-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-1">WhatsApp</h4>
                <p className="text-gray-600">+92 XXX XXXXXXX</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-green-600" 
                  onClick={() => window.open('https://wa.me/92XXXXXXXXXX', '_blank')}
                >
                  Chat Now
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-marble-cream rounded-full p-3 mb-4">
                  <Phone className="h-6 w-6 text-marble-brown" />
                </div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-gray-600">+92 XXX XXXXXXX</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-marble-brown" 
                  onClick={() => window.open('tel:+92XXXXXXXXXX')}
                >
                  Call Now
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-marble-cream rounded-full p-3 mb-4">
                  <MapPin className="h-6 w-6 text-marble-brown" />
                </div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-gray-600">KPK, Pakistan</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-marble-brown"
                  onClick={() => window.open('https://goo.gl/maps/xxxxxx', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
