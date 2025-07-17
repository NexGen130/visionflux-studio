import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Video', 'Design', 'Automation'];

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Video Campaign',
      category: 'Video',
      description: 'High-converting video ads for fashion e-commerce brand',
      status: 'Coming Soon',
      tags: ['Social Media', 'E-commerce', 'Fashion']
    },
    {
      id: 2,
      title: 'Real Estate Listing Images',
      category: 'Design',
      description: 'Professional property photography and listing optimization',
      status: 'Coming Soon',
      tags: ['Real Estate', 'Photography', 'Listings']
    },
    {
      id: 3,
      title: 'AI Customer Support System',
      category: 'Automation',
      description: 'Automated customer support workflow with AI integration',
      status: 'Coming Soon',
      tags: ['AI', 'Automation', 'Customer Service']
    },
    {
      id: 4,
      title: 'Product Launch Video Series',
      category: 'Video',
      description: 'Complete video marketing campaign for tech product launch',
      status: 'Coming Soon',
      tags: ['Product Launch', 'Tech', 'Marketing']
    },
    {
      id: 5,
      title: 'Brand Identity Package',
      category: 'Design',
      description: 'Complete brand identity design for startup company',
      status: 'Coming Soon',
      tags: ['Branding', 'Identity', 'Startup']
    },
    {
      id: 6,
      title: 'Sales Automation Pipeline',
      category: 'Automation',
      description: 'End-to-end sales process automation with CRM integration',
      status: 'Coming Soon',
      tags: ['Sales', 'CRM', 'Pipeline']
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getCategoryColor = (category) => {
    const colors = {
      Video: 'from-red-500 to-pink-500',
      Design: 'from-blue-500 to-cyan-500',
      Automation: 'from-purple-500 to-indigo-500'
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Some of our recent creative & automation projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <Card.Header>
                    <div className={`w-full h-48 bg-gradient-to-br ${getCategoryColor(item.category)} opacity-20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}>
                      <span className="text-white text-lg font-medium z-10">{item.status}</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                    </div>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Description>{item.description}</Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getCategoryColor(item.category)} bg-opacity-20 text-white rounded-full text-sm`}>
                      {item.category}
                    </span>
                  </Card.Content>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-screen-xl mx-auto text-center">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-indigo-900/50 to-teal-900/50 rounded-2xl p-12 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                More Projects Coming Soon
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                We're constantly working on exciting new projects. Check back soon to see our latest work, or get in touch to discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Every project follows our proven process to ensure exceptional results
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Consultation', description: 'We start with understanding your vision and goals' },
              { number: '02', title: 'Planning', description: 'Strategic planning and timeline development' },
              { number: '03', title: 'Execution', description: 'Bringing your project to life with precision' },
              { number: '04', title: 'Delivery', description: 'Final delivery and ongoing support' }
            ].map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

