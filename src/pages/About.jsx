import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every project is focused on delivering measurable results that drive your business forward.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We put our clients at the center of everything we do, ensuring their success is our success.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of trends and technology to provide cutting-edge solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every aspect of our work.'
    }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'VisionFlux Studio was founded with a vision to bridge creativity and automation.'
    },
    {
      year: '2023',
      title: 'Growth',
      description: 'Expanded our services to include AI automation and served 50+ clients globally.'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Launched advanced automation solutions and established partnerships with leading tech companies.'
    },
    {
      year: '2025',
      title: 'Future',
      description: 'Continuing to push boundaries in visual creativity and automation technology.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Creative Director',
      description: 'Visionary leader with 10+ years in digital marketing and creative design.',
      avatar: 'AJ'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Automation',
      description: 'AI and automation expert specializing in workflow optimization and integration.',
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Designer',
      description: 'Award-winning designer with expertise in visual storytelling and brand identity.',
      avatar: 'MR'
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
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              VisionFlux Studio is a digital-first agency helping brands evolve through visuals and automation. Since 2022, we've helped clients globally elevate their presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection>
            <Card className="text-center">
              <Card.Content>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
                  To empower businesses with innovative visual solutions and intelligent automation that drive growth, enhance efficiency, and create meaningful connections with their audiences. We believe in the power of combining human creativity with cutting-edge technology to deliver exceptional results.
                </p>
              </Card.Content>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={index * 0.2}>
                  <Card className="text-center h-full">
                    <Card.Header>
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Card.Title>{value.title}</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <Card.Description>{value.description}</Card.Description>
                    </Card.Content>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From startup to industry leader - here's how we've grown
            </p>
          </AnimatedSection>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-indigo-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.2}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card>
                        <Card.Header>
                          <Card.Title className="text-xl">{item.title}</Card.Title>
                          <div className="text-teal-400 font-bold text-lg">{item.year}</div>
                        </Card.Header>
                        <Card.Content>
                          <Card.Description>{item.description}</Card.Description>
                        </Card.Content>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full border-4 border-slate-900"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The creative minds behind VisionFlux Studio
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.2}>
                <Card className="text-center">
                  <Card.Header>
                    <div className="w-24 h-24 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{member.avatar}</span>
                    </div>
                    <Card.Title>{member.name}</Card.Title>
                    <div className="text-teal-400 font-medium mb-2">{member.role}</div>
                  </Card.Header>
                  <Card.Content>
                    <Card.Description>{member.description}</Card.Description>
                  </Card.Content>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-screen-xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">By the Numbers</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our impact in numbers
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '15+', label: 'Countries Served' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-slate-400">{stat.label}</p>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how VisionFlux Studio can help transform your business with our creative and automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  View Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;

