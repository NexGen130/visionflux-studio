import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Video, Image, Bot, ArrowRight, Star } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const services = [
    {
      icon: Video,
      title: 'Video Ads Creation',
      description: 'Engaging, scroll-stopping ads for social media and campaigns.',
    },
    {
      icon: Image,
      title: 'Listing Image Design',
      description: 'High-converting product and service images for e-commerce & real estate.',
    },
    {
      icon: Bot,
      title: 'AI & Automation Integration',
      description: 'Smart workflow systems using AI agents and automation tools like Zapier, Make, ChatGPT.',
    },
  ];

  const portfolioItems = [
    { title: 'E-commerce Campaign', category: 'Video', status: 'Coming Soon' },
    { title: 'Real Estate Listings', category: 'Design', status: 'Coming Soon' },
    { title: 'AI Workflow System', category: 'Automation', status: 'Coming Soon' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-teal-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-screen-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where Vision Meets{' '}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              We craft high-converting video ads, stunning listing images, and build AI-powered workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-indigo-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Services Preview */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions to elevate your brand through creativity and automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={index * 0.2}>
                  <Card className="text-center h-full">
                    <Card.Header>
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Card.Title>{service.title}</Card.Title>
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
      </AnimatedSection>

      {/* Mini Portfolio Preview */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recent Work</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A glimpse of our creative and automation projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.2}>
                <Card className="text-center">
                  <Card.Header>
                    <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-slate-400 text-lg font-medium">{item.status}</span>
                    </div>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm">
                      {item.category}
                    </span>
                  </Card.Content>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Teaser */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Clients Say</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <Card.Content>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-slate-300 mb-6 italic">
                  "VisionFlux helped us scale our ad creatives like never before. Their automation solutions saved us countless hours while delivering exceptional results."
                </blockquote>
                <cite className="text-teal-400 font-medium">— Sarah Johnson, Marketing Director</cite>
              </Card.Content>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/testimonials">
                Read More Reviews <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900 to-teal-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's turn your vision into results.
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to elevate your brand with cutting-edge visuals and automation? Let's discuss your project.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;

