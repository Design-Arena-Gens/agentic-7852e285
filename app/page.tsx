'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Palette,
  Server,
  Search,
  RefreshCw,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Navigation */}
      <Navigation scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Navigation({ scrolled, isMenuOpen, setIsMenuOpen }: any) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold gradient-text"
          >
            Divinoft Developers
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Technologies', 'Process', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover-glow text-white font-semibold"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-strong rounded-lg p-4"
          >
            {['Home', 'Services', 'Technologies', 'Process', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-gray-300 hover:text-primary-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-coding-on-laptop-6704/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Smoke Effect */}
      <div className="smoke-container">
        <div className="smoke"></div>
        <div className="smoke"></div>
        <div className="smoke"></div>
        <div className="smoke"></div>
        <div className="smoke"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Transform Your Digital Vision
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Full Stack Web Development Excellence from Salem, Tamil Nadu
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-12"
          >
            Expert Python Django & MERN Stack Development | Complete A-Z Website Solutions | SEO Optimization | Web Hosting
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#services"
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover-glow text-white font-semibold text-lg flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-strong rounded-full hover-glow text-white font-semibold text-lg border border-primary-500"
            >
              Get Free Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass p-6 rounded-lg hover-glow"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using Python Django and MERN stack (MongoDB, Express, React, Node.js) with scalable architecture.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Cloud Integration']
    },
    {
      icon: Palette,
      title: 'Design to Code',
      description: 'Transform your design vision into pixel-perfect, responsive websites with modern UI/UX principles and smooth animations.',
      features: ['Figma to Code', 'Responsive Design', 'UI/UX Implementation', 'Interactive Animations']
    },
    {
      icon: Server,
      title: 'Web Hosting & Deployment',
      description: 'Reliable web hosting solutions with secure servers, SSL certificates, and continuous deployment pipelines for your applications.',
      features: ['Cloud Hosting', 'SSL Certificates', 'CDN Integration', 'Auto Scaling']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO services to boost your online visibility across India with technical SEO, content optimization, and analytics.',
      features: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'Performance Optimization']
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Modernize your existing website with fresh designs, improved performance, and enhanced user experience to stay competitive.',
      features: ['UI/UX Overhaul', 'Performance Boost', 'Mobile Optimization', 'Modern Technologies']
    },
    {
      icon: Rocket,
      title: 'Redevelopment',
      description: 'Complete website reconstruction with latest technologies, improved security, and better scalability for growing businesses.',
      features: ['Technology Migration', 'Code Refactoring', 'Security Hardening', 'Feature Enhancement']
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 relative">
      <div className="smoke-container opacity-20">
        <div className="smoke"></div>
        <div className="smoke"></div>
        <div className="smoke"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete A-Z Website Solutions for Businesses Across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl hover-glow prism group"
            >
              <div className="mb-6">
                <service.icon className="w-16 h-16 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const technologies = {
    'Backend': [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 90 }
    ],
    'Frontend': [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 }
    ],
    'Database': [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 80 }
    ],
    'DevOps': [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Git', level: 95 }
    ]
  };

  return (
    <section id="technologies" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Technologies We Master</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge technologies powering modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="glass-strong p-8 rounded-2xl prism"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6">{category}</h3>
              <div className="space-y-6">
                {techs.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: catIndex * 0.2 + techIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold">{tech.name}</span>
                      <span className="text-primary-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.2 + techIndex * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const reasons = [
    {
      title: 'Expert Team',
      description: 'Skilled developers with extensive experience in Python Django and MERN stack development'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks ensure bug-free, high-performance applications'
    },
    {
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on time without compromising quality'
    },
    {
      title: 'Competitive Pricing',
      description: 'Affordable packages designed for startups, SMEs, and enterprises across India'
    },
    {
      title: 'Ongoing Support',
      description: '24/7 maintenance and support to keep your website running smoothly'
    },
    {
      title: 'SEO Focused',
      description: 'Every website is built with SEO best practices to maximize online visibility'
    }
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-900/10 to-black"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Why Choose Divinoft?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your trusted technology partner for digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover-glow group"
            >
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-primary-400 flex-shrink-0 group-hover:rotate-180 transition-transform duration-500" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create stunning UI/UX mockups and interactive prototypes for your approval.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Expert developers build your website using best practices, clean code, and modern technologies.'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Comprehensive testing across devices and browsers ensures flawless functionality and performance.'
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'We deploy your website to production servers with proper configuration and optimization.'
    },
    {
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and optimization to keep your website running at peak performance.'
    }
  ];

  return (
    <section id="process" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative glass-strong p-8 rounded-2xl hover-glow group"
            >
              <div className="text-6xl font-bold gradient-text mb-4 opacity-20 group-hover:opacity-40 transition-opacity">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-primary-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://cdn.coverr.co/videos/coverr-abstract-technology-background-8368/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-secondary-900/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-strong p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto prism"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your project and create something amazing together. Get a free consultation and quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover-glow text-white font-semibold text-lg inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight />
            </a>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 glass-strong rounded-full hover-glow text-white font-semibold text-lg border border-primary-500"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-strong p-8 rounded-2xl prism">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Salem, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:+919876543210" className="text-gray-400 hover:text-primary-400 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:info@divinoft.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                      info@divinoft.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, href: '#' },
                    { Icon: Twitter, href: '#' },
                    { Icon: Linkedin, href: '#' },
                    { Icon: Instagram, href: '#' }
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover-glow group"
                    >
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-strong p-8 rounded-2xl prism space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-white"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Service Interested In</label>
                <select className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-white">
                  <option>Full Stack Development</option>
                  <option>Design to Code</option>
                  <option>Web Hosting</option>
                  <option>SEO Optimization</option>
                  <option>Website Redesign</option>
                  <option>Redevelopment</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover-glow text-white font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Divinoft Developers</h3>
            <p className="text-gray-400">
              Leading web development company in Salem, Tamil Nadu, delivering innovative digital solutions across India.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Full Stack Development', 'Design to Code', 'Web Hosting', 'SEO Optimization', 'Website Redesign', 'Redevelopment'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              {['Python Django', 'MERN Stack', 'React', 'Node.js', 'MongoDB', 'PostgreSQL'].map((tech) => (
                <li key={tech}>
                  <a href="#technologies" className="text-gray-400 hover:text-primary-400 transition-colors">
                    {tech}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Technologies', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Divinoft Developers. All rights reserved. | Web Development Company in Salem, Tamil Nadu
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Serving clients across India with world-class web development services
          </p>
        </div>
      </div>
    </footer>
  );
}
