import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechFlow Solutions',
      rating: 5,
      text: 'VisionFlux helped us scale our ad creatives like never before. Their automation solutions saved us countless hours while delivering exceptional results. The team\'s attention to detail and creative vision exceeded our expectations.',
      avatar: 'SJ',
      category: 'Video Ads'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Real Estate Broker',
      company: 'Premier Properties',
      rating: 5,
      text: 'Beautiful listing images that doubled conversions. The quality of their photography and design work is outstanding. Our properties now stand out in a crowded market, and we\'ve seen a significant increase in inquiries.',
      avatar: 'MC',
      category: 'Design'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Operations Manager',
      company: 'GrowthCorp',
      rating: 5,
      text: 'AI automations saved us hours every day. The workflow systems they built for us are incredibly efficient and have transformed how we handle customer inquiries. Highly recommend their automation services.',
      avatar: 'ER',
      category: 'Automation'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'E-commerce Owner',
      company: 'StyleHub',
      rating: 5,
      text: 'The video campaigns created by VisionFlux generated our highest ROI to date. Their understanding of social media trends and consumer behavior is impressive. They delivered exactly what we needed to boost our sales.',
      avatar: 'DT',
      category: 'Video Ads'
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Brand Manager',
      company: 'InnovateLab',
      rating: 5,
      text: 'Professional, creative, and results-driven. VisionFlux transformed our brand identity and created stunning visuals that perfectly represent our company values. The entire process was smooth and collaborative.',
      avatar: 'LP',
      category: 'Design'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'CEO',
      company: 'StartupX',
      rating: 5,
      text: 'From concept to execution, VisionFlux delivered beyond expectations. Their automation solutions streamlined our entire sales process, and the custom integrations work flawlessly. A true partner in our growth.',
      avatar: 'JW',
      category: 'Automation'
    }
  ];

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '200+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Video Ads': 'from-red-500 to-pink-500',
      'Design': 'from-blue-500 to-cyan-500',
      'Automation': 'from-purple-500 to-indigo-500'
    };
    return colors[category] || 'from-teal-500 to-indigo-500';
  };

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
              What Our Clients Say
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with VisionFlux Studio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-slate-400 text-sm md:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <Card className="h-full relative">
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-teal-400 opacity-30" />
                  </div>
                  <Card.Header>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{testimonial.name}</h3>
                        <p className="text-slate-400 text-sm">{testimonial.position}</p>
                        <p className="text-teal-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </Card.Header>
                  <Card.Content>
                    <blockquote className="text-slate-300 text-sm leading-relaxed mb-4">
                      "{testimonial.text}"
                    </blockquote>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(testimonial.category)} bg-opacity-20 text-white rounded-full text-xs`}>
                      {testimonial.category}
                    </span>
                  </Card.Content>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Card className="text-center">
              <Card.Content>
                <Quote className="w-16 h-16 text-teal-400 opacity-30 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl text-slate-300 mb-8 italic leading-relaxed">
                  "Working with VisionFlux Studio has been a game-changer for our business. Their combination of creative excellence and technical expertise is unmatched in the industry."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">AK</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-semibold text-lg">Alex Kim</h3>
                    <p className="text-slate-400">Founder & CEO</p>
                    <p className="text-teal-400">Digital Dynamics</p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </Card.Content>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 to-teal-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

