import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  slug: string;
}
const BLOG_POSTS: BlogPost[] = [{
  id: 1,
  title: "5 Signs Your Home Needs a Deep Clean",
  excerpt: "From lingering odors to stubborn stains, learn the warning signs that indicate your home needs professional cleaning before small issues become bigger problems.",
  image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80",
  author: {
    name: "Phoenix Baker",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "19 Jan 2025"
  },
  slug: "5-signs-your-home-needs-a-deep-clean"
}, {
  id: 2,
  title: "Eco-Friendly Cleaning: Is It Worth the Switch?",
  excerpt: "Green cleaning products have come a long way. We break down the costs, benefits, and health advantages to help you decide if eco-friendly cleaning is right for your home.",
  image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
  author: {
    name: "Tom Keep",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    date: "12 Feb 2025"
  },
  slug: "eco-friendly-cleaning-is-it-worth-the-switch"
}, {
  id: 3,
  title: "Choosing the Right Cleaning Service in 2025",
  excerpt: "Deep clean, regular maintenance, or move-out service? Each option offers unique benefits for different needs and budgets. Our guide helps you choose.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  author: {
    name: "Johan Kaker",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    date: "05 Mar 2025"
  },
  slug: "choosing-the-right-cleaning-service-in-2025"
}];

// @component: BlogSection
export const BlogSection = () => {
  // @return
  return <section className="bg-[#f0fdf4] py-12 sm:py-16 md:py-20 lg:py-[120px] px-4 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="mb-[57px] relative z-10">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#059669]" />
            <span
              className="text-[#059669] text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Blog
            </span>
            <div className="h-px w-8 bg-[#059669]" />
          </motion.div>

          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="text-[24px] sm:text-[31px] md:text-[41px] font-semibold leading-tight text-[#111111] mb-1 tracking-tight">
            Our Latest Blog
          </motion.h2>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-[17px] font-semibold text-[#059669] leading-[26px]">
            Tips, trends & cleaning insights
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {BLOG_POSTS.map((post, index) => <motion.div key={post.id} initial={{
          opacity: 0,
          y: index % 2 === 0 ? 50 : -50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: index * 0.15
        }} className="group">
              <div className="relative overflow-hidden bg-white border-l border-r border-b border-[#bfbfbf]">
                {/* Image Container */}
                <div className="relative overflow-hidden h-[240px]">
                  <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-[38px_35px_41px_35px]">
                  <h3 className="text-[20px] font-semibold leading-[29px] text-[#111111] mb-[14px]">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#059669] transition-colors duration-300">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#3c3c3c] text-[14px] leading-[22px] font-normal mb-0">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 sm:mt-[23px] flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[15px] font-semibold leading-[22px] text-[#111111] capitalize">
                          {post.author.name}
                        </h4>
                        <p className="text-[14px] leading-[17px] text-[#3c3c3c] font-normal">
                          {post.author.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Link to={`/blog/${post.slug}`} className="text-[18px] font-semibold text-[#3c3c3c] flex items-center group/btn hover:text-[#059669] transition-colors duration-300">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1 mt-0.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};