import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  User,
  Clock,
  Tag,
  Quote,
} from 'lucide-react';
import { RooferCTA } from '../components/generated/RooferCTA';

interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; avatar: string };
  heroImage: string;
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'image';
    text?: string;
    src?: string;
    alt?: string;
  }[];
  tags: string[];
}

const articles: BlogArticle[] = [
  {
    slug: '5-signs-your-home-needs-a-deep-clean',
    title: '5 Signs Your Home Needs a Deep Clean',
    category: 'Deep Cleaning',
    date: 'Jan 19, 2025',
    readTime: '5 min',
    author: {
      name: 'Michael King',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    heroImage:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "Your home might look tidy on the surface, but hidden dirt, allergens, and grime can build up in places you'd never think to check. Recognizing the early warning signs that your space needs a professional deep clean can save you from bigger (and more expensive) problems down the line.",
      },
      {
        type: 'heading',
        text: '1. Lingering Odors That Won\'t Go Away',
      },
      {
        type: 'paragraph',
        text: "If you've scrubbed the kitchen, taken out the trash, and lit every candle in sight but your home still smells off, it's a clear sign that odor-causing bacteria are hiding in carpets, upholstery, or behind appliances. Professional deep cleaning reaches these hidden sources and eliminates odors at the root — not just masks them.",
      },
      {
        type: 'heading',
        text: '2. Visible Dust on Vents and Baseboards',
      },
      {
        type: 'paragraph',
        text: "Dust on your air vents, ceiling fans, and baseboards isn't just unsightly — it circulates through your HVAC system and degrades your indoor air quality. If you can see dust buildup on these surfaces, it's been accumulating for weeks or months and needs a thorough, top-to-bottom clean.",
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        alt: 'Clean bathroom after deep cleaning',
      },
      {
        type: 'quote',
        text: "A clean home isn't just about appearances — it's about creating a healthy environment where your family can thrive. Regular deep cleaning is an investment in your wellbeing.",
      },
      {
        type: 'heading',
        text: '3. Stains That Regular Cleaning Can\'t Remove',
      },
      {
        type: 'paragraph',
        text: "Whether it's grout discoloration in the bathroom, carpet stains that have set in, or grease buildup behind the stove, stubborn stains are a telltale sign that your regular cleaning routine isn't cutting it. Professional-grade equipment and products can lift stains that household cleaners simply can't touch.",
      },
      {
        type: 'heading',
        text: '4. Allergy Symptoms Are Getting Worse',
      },
      {
        type: 'paragraph',
        text: "If you or your family members are sneezing more than usual, experiencing itchy eyes, or waking up congested, your home might be harboring allergens like dust mites, pet dander, and mold spores. A deep clean targets these invisible triggers, particularly in bedding, curtains, carpets, and air ducts.",
      },
      {
        type: 'heading',
        text: "5. You Can't Remember the Last Deep Clean",
      },
      {
        type: 'paragraph',
        text: "If you have to think hard about when your home last received a thorough deep clean, that's your answer — it's overdue. Experts recommend a professional deep clean at least twice a year, with additional sessions during spring and fall transitions when dust and allergens peak.",
      },
      {
        type: 'paragraph',
        text: "Don't wait until the signs become overwhelming. Schedule a deep clean today and give your home the reset it deserves. Your space (and your lungs) will thank you.",
      },
    ],
    tags: ['Deep Cleaning', 'Home Care', 'Health', 'Indoor Air Quality'],
  },
  {
    slug: 'eco-friendly-cleaning-is-it-worth-the-switch',
    title: 'Eco-Friendly Cleaning: Is It Worth the Switch?',
    category: 'Eco-Friendly',
    date: 'Feb 12, 2025',
    readTime: '7 min',
    author: {
      name: 'Tom Keep',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    },
    heroImage:
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "The cleaning industry has undergone a green revolution. Eco-friendly products that were once seen as less effective alternatives have evolved into powerful, plant-based formulas that rival — and often outperform — their chemical-heavy counterparts. But is making the switch really worth it?",
      },
      {
        type: 'heading',
        text: 'The Case for Going Green',
      },
      {
        type: 'paragraph',
        text: "Traditional cleaning products often contain volatile organic compounds (VOCs), phthalates, and synthetic fragrances that can irritate airways, trigger allergic reactions, and contribute to long-term health issues. Eco-friendly alternatives eliminate these harmful ingredients while still delivering a powerful clean.",
      },
      {
        type: 'paragraph',
        text: "Beyond personal health, green cleaning products break down more quickly in the environment, reducing water pollution and minimizing your household's chemical footprint. When you consider that the average home uses dozens of cleaning products per year, the cumulative environmental impact is significant.",
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
        alt: 'Eco-friendly cleaning products',
      },
      {
        type: 'quote',
        text: "Switching to eco-friendly cleaning isn't just about saving the planet — it's about creating a safer, healthier home for the people you love. The best clean is one that doesn't come with hidden costs to your health.",
      },
      {
        type: 'heading',
        text: 'Cost Comparison: Green vs. Traditional',
      },
      {
        type: 'paragraph',
        text: "One common concern is price. Eco-friendly products can cost 10-20% more upfront, but they're often more concentrated, meaning you use less per clean. Many professional services that use green products (like FreshClean) don't charge a premium for eco-friendly options — it's simply how we operate.",
      },
      {
        type: 'heading',
        text: 'Making the Switch',
      },
      {
        type: 'paragraph',
        text: "You don't have to overhaul everything overnight. Start by replacing your most-used products — all-purpose spray, dish soap, and floor cleaner — with certified green alternatives. Look for labels like EPA Safer Choice, Green Seal, or EcoLogo to ensure the product meets rigorous environmental standards.",
      },
      {
        type: 'paragraph',
        text: "The verdict? Eco-friendly cleaning is absolutely worth the switch. It's better for your health, better for the environment, and with today's formulations, every bit as effective as traditional products. The only question is why you haven't switched already.",
      },
    ],
    tags: ['Eco-Friendly', 'Green Cleaning', 'Health', 'Sustainability'],
  },
  {
    slug: 'choosing-the-right-cleaning-service-in-2025',
    title: 'Choosing the Right Cleaning Service in 2025',
    category: 'Tips & Tricks',
    date: 'Mar 5, 2025',
    readTime: '6 min',
    author: {
      name: 'Johan Kaker',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    },
    heroImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    content: [
      {
        type: 'paragraph',
        text: "With hundreds of cleaning companies vying for your business, choosing the right one can feel overwhelming. Price alone isn't a reliable indicator of quality, and a flashy website doesn't guarantee a spotless home. Here's how to cut through the noise and find a cleaning service you can trust.",
      },
      {
        type: 'heading',
        text: 'Know What You Actually Need',
      },
      {
        type: 'paragraph',
        text: "Before you start comparing companies, clarify your needs. Are you looking for regular weekly maintenance, a one-time deep clean, or a move-out service? Each requires different expertise, equipment, and pricing. A company that specializes in regular home maintenance may not be the best fit for a post-renovation deep clean.",
      },
      {
        type: 'heading',
        text: 'Check Credentials, Not Just Reviews',
      },
      {
        type: 'paragraph',
        text: "Online reviews are helpful but can be misleading. Instead, verify that the company is licensed, bonded, and insured. Ask about their hiring process — do they run background checks? Are their cleaners employees or independent contractors? These details matter more than a 5-star rating from a cousin.",
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
        alt: 'Professional cleaning team',
      },
      {
        type: 'quote',
        text: "The best cleaning service isn't always the cheapest or the most expensive — it's the one that listens to your needs, shows up on time, and delivers consistent results every single visit.",
      },
      {
        type: 'heading',
        text: 'Ask About Products and Equipment',
      },
      {
        type: 'paragraph',
        text: "Professional-grade equipment makes a real difference. Ask what products and tools the company uses. Do they bring their own supplies? Are the products eco-friendly and safe for pets and children? A reputable company will be transparent about their methods and happy to answer these questions.",
      },
      {
        type: 'heading',
        text: 'Get a Written Quote',
      },
      {
        type: 'paragraph',
        text: "Never hire a cleaning service based on a verbal estimate. Request a detailed written quote that specifies the scope of work, pricing, any additional fees, and their satisfaction guarantee policy. This protects both you and the company and sets clear expectations from the start.",
      },
      {
        type: 'paragraph',
        text: "Choosing a cleaning service is a relationship, not a transaction. Take the time to find a company that aligns with your standards, communicates clearly, and treats your home with the care it deserves. The right partner will make maintaining a clean, healthy space effortless.",
      },
    ],
    tags: ['Tips & Tricks', 'Hiring Guide', 'Home Care', 'Cleaning Service'],
  },
];

const categories = [
  'Deep Cleaning',
  'Eco-Friendly',
  'Tips & Tricks',
  'Maintenance',
  'Industry News',
];

const popularTags = [
  'Deep Cleaning',
  'Eco-Friendly',
  'Home Care',
  'Health',
  'Tips & Tricks',
  'Green Cleaning',
  'Hiring Guide',
  'Sustainability',
];

export const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const current = article || articles[0];

  const recentPosts = articles.filter((a) => a.slug !== current.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[320px] md:min-h-[380px] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${current.heroImage}')`, filter: 'brightness(0.2)' }}
        />
        <div className="absolute inset-0 bg-[#111111]/70" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#059669] via-[#059669]/50 to-transparent" />

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
              <Link
                to="/"
                className="text-white/60 hover:text-[#059669] transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <Link
                to="/blog"
                className="text-white/60 hover:text-[#059669] transition-colors"
              >
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <span className="text-[#059669] font-medium">Blog Details</span>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[28px] sm:text-[38px] md:text-[48px] font-bold text-white leading-[1.1]"
              style={{ fontFamily: 'Unbounded' }}
            >
              Blog Details
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white py-16 sm:py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-14">
            {/* Sidebar — Left */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Categories */}
                <div className="border border-gray-100 p-6">
                  <h3
                    className="text-[16px] font-bold text-[#111] mb-5 pb-4 border-b border-gray-100"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Category
                  </h3>
                  <ul className="space-y-0">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <Link
                          to="/blog"
                          className="group flex items-center justify-between py-3 border-b border-gray-50 text-[14px] text-gray-600 hover:text-[#059669] transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-[#059669] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                            {cat}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="border border-gray-100 p-6">
                  <h3
                    className="text-[16px] font-bold text-[#111] mb-5 pb-4 border-b border-gray-100"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Recent Posts
                  </h3>
                  <div className="space-y-5">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="group flex gap-4 items-start"
                      >
                        <div className="w-[70px] h-[70px] shrink-0 overflow-hidden">
                          <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-[#111] leading-tight group-hover:text-[#059669] transition-colors line-clamp-2">
                            {post.title}
                          </p>
                          <span className="text-[12px] text-gray-400 mt-1 block">
                            {post.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="border border-gray-100 p-6">
                  <h3
                    className="text-[16px] font-bold text-[#111] mb-5 pb-4 border-b border-gray-100"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-50 text-[12px] font-medium text-gray-600 hover:bg-[#059669] hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Article Content — Right */}
            <article className="flex-1 min-w-0">
              {/* Meta */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-[13px] text-gray-500"
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#059669]" />
                  {current.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#059669]" />
                  {current.author.name}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#059669]" />
                  {current.readTime} read
                </span>
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#059669]" />
                  {current.category}
                </span>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden mb-10"
              >
                <img
                  src={current.heroImage}
                  alt={current.title}
                  className="w-full h-[280px] sm:h-[360px] md:h-[440px] object-cover"
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-[#111] leading-tight mb-8"
                style={{ fontFamily: 'Unbounded' }}
              >
                {current.title}
              </motion.h1>

              {/* Content Blocks */}
              <div className="space-y-6">
                {current.content.map((block, i) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p
                        key={i}
                        className="text-gray-600 text-[15px] leading-[1.85]"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'heading') {
                    return (
                      <h2
                        key={i}
                        className="text-[18px] sm:text-[20px] font-bold text-[#111] mt-10 mb-2"
                        style={{ fontFamily: 'Unbounded' }}
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === 'quote') {
                    return (
                      <div
                        key={i}
                        className="relative bg-[#059669] p-6 sm:p-8 my-8"
                      >
                        <Quote className="absolute top-5 right-5 w-10 h-10 text-white/15" />
                        <p className="text-white text-[15px] sm:text-[16px] leading-relaxed italic font-medium relative z-10">
                          {block.text}
                        </p>
                      </div>
                    );
                  }
                  if (block.type === 'image') {
                    return (
                      <div key={i} className="my-8 overflow-hidden">
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="w-full h-[240px] sm:h-[320px] object-cover"
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[14px] font-bold text-[#111]">Tags:</span>
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-50 text-[12px] font-medium text-gray-600 hover:bg-[#059669] hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-10 bg-[#f0fdf4] border border-[#059669]/10 p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#059669]/30">
                  <img
                    src={current.author.avatar}
                    alt={current.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-[16px] font-bold text-[#111] mb-1"
                    style={{ fontFamily: 'Unbounded' }}
                  >
                    {current.author.name}
                  </p>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    Professional writer and cleaning industry expert with years
                    of experience helping homeowners make informed decisions
                    about maintaining clean, healthy living spaces.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link
                  to="/blog"
                  className="group relative inline-flex items-center text-white text-[13px] font-bold bg-[#059669] px-8 py-4 uppercase tracking-wider overflow-hidden transition-colors duration-300"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Back to Blog
                  </span>
                  <div className="absolute inset-0 bg-[#111] transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 z-0" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <RooferCTA />
    </>
  );
};
