import React from 'react';
import { motion } from 'framer-motion';
import { Video, Image, Bot, Play, Palette, Zap } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Ads Creation',
      description: 'Engaging, scroll-stopping ads for social media and campaigns.',
      features: [
        'Social media video ads',
        'Product demonstration videos',
        'Brand storytelling content',
        'Performance optimization',
        'Multi-platform formatting'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Image,
      title: 'Listing Image Design',
      description: 'High-converting product and service images for e-commerce & real estate.',
      features: [
        'E-commerce product images',
        'Real estate photography',
        'Lifestyle photography',
        'Image optimization',
        'Brand consistency'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'AI & Automation Integration',
      description: 'Smart workflow systems using AI agents and automation tools like Zapier, Make, ChatGPT.',
      features: [
        'Workflow automation',
        'AI chatbot integration',
        'Data processing systems',
        'Custom API development',
        'Process optimization'
      ],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const additionalServices = [
    {
      icon: Play,
      title: 'Motion Graphics',
      description: 'Dynamic animations and motion graphics for enhanced visual storytelling.'
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logos, colors, and guidelines.'
    },
    {
      icon: Zap,
      title: 'Performance Analytics',
      description: 'Detailed analytics and optimization recommendations for your campaigns.'
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              At VisionFlux Studio, we blend creativity with automation to deliver powerful visual experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.2}>
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <Card.Header>
                          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-4`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <Card.Title className="text-2xl">{service.title}</Card.Title>
                          <Card.Description className="text-lg">{service.description}</Card.Description>
                        </Card.Header>
                        <Card.Content>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-slate-300">
                                <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </Card.Content>
                        <Card.Footer>
                          <Button variant="outline" asChild>
                            <Link to="/contact">Get Quote</Link>
                          </Button>
                        </Card.Footer>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className={`w-full h-64 bg-gradient-to-br ${service.color} opacity-20 rounded-lg flex items-center justify-center`}>
                          <Icon className="w-24 h-24 text-white opacity-50" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions to support your complete digital transformation
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.2}>
                  <Card className="text-center h-full">
                    <Card.Header>
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Card.Title className="text-lg">{service.title}</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>{service.description}</Card.Description>
                    </Card.Content>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
              { step: '02', title: 'Strategy', description: 'Developing a tailored approach for your project' },
              { step: '03', title: 'Creation', description: 'Bringing your vision to life with precision' },
              { step: '04', title: 'Optimization', description: 'Refining and optimizing for maximum impact' }
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 to-teal-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our creative and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;

