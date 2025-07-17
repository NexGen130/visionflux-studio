import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@visionfluxstudio.com',
      href: 'mailto:hello@visionfluxstudio.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-400'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      href: '#',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-teal-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Tell us about your project. We'll get back within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card>
                <Card.Header>
                  <Card.Title className="text-2xl">Send us a message</Card.Title>
                  <Card.Description>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                          errors.name ? 'border-red-500' : 'border-slate-600 focus:border-teal-500'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-600 focus:border-teal-500'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-slate-600 focus:border-teal-500'
                        }`}
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Card.Content>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <Card>
                  <Card.Header>
                    <Card.Title className="text-2xl">Get in touch</Card.Title>
                    <Card.Description>
                      Prefer to reach out directly? Here are our contact details.
                    </Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <div className="space-y-6">
                      {contactInfo.map((info) => {
                        const Icon = info.icon;
                        return (
                          <div key={info.title} className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-white font-medium">{info.title}</h3>
                              <a
                                href={info.href}
                                className="text-slate-400 hover:text-teal-400 transition-colors"
                              >
                                {info.value}
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card.Content>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Card>
                  <Card.Header>
                    <Card.Title className="text-xl">Follow us</Card.Title>
                    <Card.Description>
                      Stay connected with our latest updates and projects.
                    </Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={social.name}
                            href={social.href}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-3 bg-slate-800 rounded-lg text-slate-400 transition-colors ${social.color}`}
                          >
                            <Icon size={20} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </Card.Content>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <Card>
                  <Card.Header>
                    <Card.Title className="text-xl">Response time</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Email inquiries</span>
                        <span className="text-teal-400 font-medium">Within 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Project consultations</span>
                        <span className="text-teal-400 font-medium">Same day</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Urgent requests</span>
                        <span className="text-teal-400 font-medium">Within 2 hours</span>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What services do you offer?',
                answer: 'We specialize in video ads creation, listing image design, and AI automation integration. We also offer brand identity design and performance analytics.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on scope and complexity. Video ads typically take 1-2 weeks, while automation projects can take 2-4 weeks.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We tailor our services to fit your budget and needs.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements.'
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card>
                  <Card.Header>
                    <Card.Title className="text-lg">{faq.question}</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <Card.Description>{faq.answer}</Card.Description>
                  </Card.Content>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

