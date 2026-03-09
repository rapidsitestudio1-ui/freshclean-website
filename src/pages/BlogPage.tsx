import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Calendar, User, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SlidingTextMarquee } from '../components/generated/SlidingTextMarquee';
import { RooferCTA } from '../components/generated/RooferCTA';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  slug?: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

const categories = ['All', 'Deep Cleaning', 'Tips & Tricks', 'Maintenance', 'Eco-Friendly', 'Industry News'];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Signs Your Home Needs a Deep Clean',
    slug: '5-signs-your-home-needs-a-deep-clean',
    excerpt:
      'From lingering odors to stubborn stains, learn the warning signs that indicate your home needs professional cleaning attention before small issues become bigger problems.',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    category: 'Deep Cleaning',
    author: {
      name: 'Michael King',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Jan 19, 2025',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Eco-Friendly Cleaning: Is It Worth the Switch?',
    slug: 'eco-friendly-cleaning-is-it-worth-the-switch',
    excerpt:
      'Green cleaning products have come a long way. We break down the costs, benefits, and health advantages to help you decide if eco-friendly cleaning is right for you.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks',
    author: {
      name: 'Tom Keep',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Feb 12, 2025',
    readTime: '7 min',
  },
  {
    id: 3,
    title: 'Choosing the Right Cleaning Service in 2025',
    slug: 'choosing-the-right-cleaning-service-in-2025',
    excerpt:
      'Deep clean, regular maintenance, or move-out service? Each option offers unique benefits for different needs. Our guide helps you choose the right fit.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks',
    author: {
      name: 'Johan Kaker',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Mar 5, 2025',
    readTime: '6 min',
  },
  {
    id: 4,
    title: 'How to Prep Your Home for a Professional Clean',
    excerpt:
      'A little prep goes a long way. Here is our step-by-step guide for getting your home ready so your cleaning team can deliver the best possible results.',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    category: 'Eco-Friendly',
    author: {
      name: 'Michael King',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Apr 2, 2025',
    readTime: '8 min',
  },
  {
    id: 5,
    title: 'The Real Cost of Skipping Regular Cleaning',
    excerpt:
      'That dusty corner might not seem like a big deal, but neglected cleaning leads to allergens, bacteria buildup, and unhealthy air. We break down the true cost of skipping routine cleans.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    category: 'Deep Cleaning',
    author: {
      name: 'Tom Keep',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    date: 'May 18, 2025',
    readTime: '4 min',
  },
  {
    id: 6,
    title: 'Spring Cleaning Checklist Every Homeowner Needs',
    excerpt:
      'Winter takes a toll on your home. Use this practical spring cleaning checklist to refresh every room, tackle seasonal grime, and start the season feeling organized.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    category: 'Maintenance',
    author: {
      name: 'Johan Kaker',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Jun 10, 2025',
    readTime: '5 min',
  },
  {
    id: 7,
    title: 'DIY vs. Professional Cleaning: Which Is Worth It?',
    excerpt:
      'Two common approaches go head to head. We compare time, cost, thoroughness, and results to help you decide when to DIY and when to call the pros.',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    category: 'Tips & Tricks',
    author: {
      name: 'Michael King',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Jul 22, 2025',
    readTime: '6 min',
  },
  {
    id: 8,
    title: 'Hiring a Cleaning Service: What to Look For',
    excerpt:
      'Choosing a cleaning company can be overwhelming. This guide walks you through what to look for, red flags to avoid, and how to find a team you can trust.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    category: 'Eco-Friendly',
    author: {
      name: 'Tom Keep',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Aug 14, 2025',
    readTime: '7 min',
  },
  {
    id: 9,
    title: '2025 Cleaning Industry Trends Every Homeowner Should Know',
    excerpt:
      'From eco-friendly products to smart home cleaning tech, the cleaning industry is evolving fast. Here are the key trends shaping how homes are maintained this year.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    category: 'Industry News',
    author: {
      name: 'Johan Kaker',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    },
    date: 'Sep 3, 2025',
    readTime: '5 min',
  },
];

const BlogHero = () => {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[380px] overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80')",
          filter: 'brightness(0.2)',
        }}
      />
      <div className="absolute inset-0 bg-[#111111]/70" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[300px] h-[300px] border border-[#059669]/10 rotate-45 hidden lg:block" />
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[250px] h-[250px] border border-[#059669]/5 rotate-45 hidden lg:block" />

      <div className="relative z-10 w-full container mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.nav
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <a
              href="/"
              className="text-white/60 hover:text-[#059669] transition-colors duration-300"
            >
              Home
            </a>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-[#059669] font-medium">Blog</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-[#059669] leading-[1.1]"
            style={{ fontFamily: 'Unbounded' }}
          >
            Our Blog
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedPost = () => {
  const featured = blogPosts[0];

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#059669]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="h-px w-8 bg-[#059669]" />
          <span
            className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ fontFamily: 'Unbounded' }}
          >
            Featured Article
          </span>
          <div className="h-px w-8 bg-[#059669]" />
        </motion.div>

        <Link to={`/blog/${featured.slug}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group flex flex-col lg:flex-row gap-0 bg-white border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-[#059669]/10 transition-all duration-500"
        >
          {/* Image */}
          <div className="relative overflow-hidden lg:w-[55%] h-[300px] lg:h-auto min-h-[400px]">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 bg-[#059669] px-4 py-2">
              <span
                className="text-white text-xs font-bold uppercase tracking-wider"
                style={{ fontFamily: 'Unbounded' }}
              >
                {featured.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-[45%] p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#059669]" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#059669]" />
                {featured.readTime} read
              </span>
            </div>

            <h2
              className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-tight group-hover:text-[#059669] transition-colors duration-300"
              style={{ fontFamily: 'Unbounded' }}
            >
              {featured.title}
            </h2>

            <p
              className="text-gray-600 leading-relaxed mb-8 text-[15px]"
              style={{ fontFamily: 'Unbounded' }}
            >
              {featured.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#059669]/20">
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-[#111] text-sm font-bold"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    {featured.author.name}
                  </p>
                  <p className="text-gray-400 text-xs">Cleaning Expert</p>
                </div>
              </div>

              <span
                className="group/link inline-flex items-center gap-2 text-[#059669] font-semibold text-sm uppercase tracking-wider"
              >
                Read Article
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </span>
            </div>
          </div>
        </motion.div>
        </Link>
      </div>
    </section>
  );
};

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative bg-[#fafaf8] py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[400px] h-[400px] bg-[#059669]/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[400px] h-[400px] bg-[#059669]/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14"
        >
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#059669] text-white'
                    : 'bg-white text-[#111] border border-gray-200 hover:border-[#059669]/40 hover:text-[#059669]'
                }`}
                style={{ fontFamily: 'Unbounded' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-[280px] pl-11 pr-5 py-3 bg-white border border-gray-200 text-sm text-[#111] placeholder:text-gray-400 focus:outline-none focus:border-[#059669] transition-colors duration-300"
              style={{ fontFamily: 'Unbounded' }}
            />
          </div>
        </motion.div>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((post, i) => (
              <Link key={post.id} to={post.slug ? `/blog/${post.slug}` : '#'} className="block">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-[#059669]/10 transition-all duration-500 h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[220px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/50 via-[#111]/10 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-[#059669] px-3 py-1.5">
                    <span
                      className="text-white text-[10px] font-bold uppercase tracking-wider"
                      style={{ fontFamily: 'Unbounded' }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#059669]" />
                    <span className="text-[#111] text-[11px] font-semibold">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                    <Calendar className="w-3.5 h-3.5 text-[#059669]" />
                    <span>{post.date}</span>
                  </div>

                  <h3
                    className="text-lg font-bold text-[#111] mb-5 leading-snug group-hover:text-[#059669] transition-colors duration-300 line-clamp-2"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    {post.title}
                  </h3>

                  {/* Author + Read more */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full overflow-hidden">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-[#111] text-[13px] font-semibold">
                        {post.author.name}
                      </span>
                    </div>

                    <span
                      className="group/link flex items-center gap-1 text-[#059669] text-sm font-semibold"
                    >
                      Read
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#059669] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.article>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p
              className="text-gray-500 text-lg"
              style={{ fontFamily: 'Unbounded' }}
            >
              No articles found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="relative bg-[#111] py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
        }}
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[200px] h-[200px] border border-white/5 rotate-45 hidden lg:block" />
      <div className="absolute top-1/2 right-[3%] -translate-y-1/2 w-[150px] h-[150px] border border-white/[0.03] rotate-45 hidden lg:block" />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Stay Updated
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Unbounded' }}
            >
              Get Cleaning Tips <br />
              Delivered to Your Inbox
            </h2>

            <p
              className="text-white/50 leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ fontFamily: 'Unbounded' }}
            >
              Join homeowners who stay ahead of household grime. No spam, just
              practical cleaning advice and seasonal freshening reminders.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#059669] transition-colors duration-300"
                style={{ fontFamily: 'Unbounded' }}
              />
              <button
                type="submit"
                className="group relative px-8 py-4 bg-[#059669] text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: 'Unbounded' }}
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const BlogPage = () => {
  return (
    <>
      <BlogHero />
      <SlidingTextMarquee
        items={[
          { text: 'Clean Tips' },
          { text: 'Expert Advice' },
          { text: 'Maintenance' },
          { text: 'Industry News' },
          { text: 'Eco-Friendly' },
          { text: 'How-To Guides' },
        ]}
        baseVelocity={-0.3}
      />
      <div className="h-[8vh] sm:h-[15vh] bg-white" />

      {/* Latest Articles header */}
      <section className="bg-white pb-16 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#059669]" />
              <span
                className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: 'Unbounded' }}
              >
                Latest Articles
              </span>
              <div className="h-px w-8 bg-[#059669]" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#111] mb-4"
              style={{ fontFamily: 'Unbounded' }}
            >
              Cleaning Tips & Insights
            </h2>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Unbounded' }}
            >
              Practical advice, industry updates, and expert knowledge to help you
              make informed decisions about keeping your space spotless.
            </p>
          </motion.div>
        </div>
      </section>

      <BlogGrid />
      <FeaturedPost />
      <NewsletterSection />
      <RooferCTA />
    </>
  );
};
