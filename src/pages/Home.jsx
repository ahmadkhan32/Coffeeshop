import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductSlider from '../components/ProductSlider';
import FunctionalIngredients from '../components/FunctionalIngredients';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import FAQAccordion from '../components/FAQAccordion';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedProducts />
      <ProductSlider />
      <FunctionalIngredients />
      <BrandStory />
      <Testimonials />
      <FAQAccordion />
      <Newsletter />
    </div>
  );
}
