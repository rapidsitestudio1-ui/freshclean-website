import React from 'react';
import { EnergyHeroSection } from '../components/generated/EnergyHeroSection';
import { SlidingTextMarquee } from '../components/generated/SlidingTextMarquee';
import { ServicesSection } from '../components/generated/ServicesSection';
import { AboutSection } from '../components/generated/AboutSection';
import { WorkProcessSection } from '../components/generated/WorkProcessSection';
import { ServiceEstimateForm } from '../components/generated/ServiceEstimateForm';
import { ComparisonSlider } from '../components/generated/ComparisonSlider';
import { RoofingAchievements } from '../components/generated/RoofingAchievements';
import { TestimonialSection } from '../components/generated/TestimonialSection';
import { TeamSection } from '../components/generated/TeamSection';
import { BlogSection } from '../components/generated/BlogSection';
import { FAQSection, FAQItem } from '../components/generated/FAQSection';
import { RooferCTA } from '../components/generated/RooferCTA';
import { ClientsSection } from '../components/generated/ClientsSection';

const homeFAQ: FAQItem[] = [
  {
    id: '1',
    number: '01',
    question: 'What cleaning services does FreshClean offer?',
    answer: 'We offer a full range of cleaning services including deep cleaning, regular maintenance, move-in/out cleaning, office cleaning, window washing, and carpet care for both residential and commercial properties.',
  },
  {
    id: '2',
    number: '02',
    question: 'How do I know which cleaning service I need?',
    answer: 'It depends on your space and situation. Regular maintenance keeps things fresh week to week, deep cleans tackle built-up grime, and move-in/out cleans prepare a space for new occupants. We offer free consultations to recommend the best plan.',
  },
  {
    id: '3',
    number: '03',
    question: 'Do you offer free quotes?',
    answer: 'Yes! We provide completely free, no-obligation quotes for all cleaning projects. Our team will assess your space, discuss your needs, and provide a transparent quote with no hidden costs.',
  },
  {
    id: '4',
    number: '04',
    question: 'What areas does FreshClean serve?',
    answer: 'We serve the greater metropolitan area and surrounding counties. Whether you are in the city or suburbs, our team is ready to help with any cleaning need. Contact us to confirm service availability in your area.',
  },
];

export const HomePage = () => {
  return (
    <>
      <EnergyHeroSection />
      <SlidingTextMarquee baseVelocity={-0.15} />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <WorkProcessSection />
      <ServiceEstimateForm />
      <ComparisonSlider />
      <RoofingAchievements />
      <TestimonialSection />
      <TeamSection />
      <BlogSection />
      <FAQSection
        items={homeFAQ}
        title="Got Questions?"
        subtitle="Everything you need to know about FreshClean"
      />
      <RooferCTA />
    </>
  );
};
