import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { useGSAPAnimation, useStaggerAnimation } from '@/hooks/useGSAPAnimation';

const Shop = () => {
  // Animation refs
  const headerRef = useGSAPAnimation<HTMLDivElement>('fadeIn', { delay: 0.2 });
  const filtersRef = useGSAPAnimation<HTMLDivElement>('slideInLeft', { delay: 0.4 });
  const productsRef = useStaggerAnimation<HTMLDivElement>('.product-card', { delay: 0.3, stagger: 0.15 });
  const ctaRef = useGSAPAnimation<HTMLDivElement>('scaleIn', { delay: 0.6 });

  // Sample products
  const products = [
    {
      id: '1',
      name: 'Golden Bites Box',
      description: 'Our signature vegan finger-food selection',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center'
    },
    {
      id: '2',
      name: 'Savory Party Pack',
      description: 'Perfect for gatherings and celebrations',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=600&fit=crop&crop=center'
    },
    {
      id: '3',
      name: 'Spicy Delights',
      description: 'A kick of heat for the adventurous foodie',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=600&fit=crop&crop=center'
    },
    {
      id: '4',
      name: 'Mini Bites Collection',
      description: 'Bite-sized treats for any occasion',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=600&fit=crop&crop=center'
    },
    {
      id: '5',
      name: 'Family Feast Box',
      description: 'Our largest box for gatherings and events',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=600&fit=crop&crop=center'
    },
    {
      id: '6',
      name: 'Sweet & Savory Mix',
      description: 'The perfect combination of flavors',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen py-6 sm:py-12">
      {/* Shop Header */}
      <section className="bg-brand-lightyellow py-12 sm:py-16">
        <div className="container">
          <div ref={headerRef} className="text-center max-w-2xl mx-auto will-change-transform">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-brand-brown">
              Shop Our Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 px-4 sm:px-0">
              Explore our range of delicious vegan finger foods, all made with our secret recipe 
              and delivered directly to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container py-8 sm:py-16">
        <div 
          ref={filtersRef}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4 will-change-transform"
        >
          <div className="text-center sm:text-left">
            <h2 className="font-serif text-xl sm:text-2xl font-bold">Our Products</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Showing all {products.length} results
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select className="w-full sm:w-auto appearance-none bg-white border border-brand-lightyellow rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A-Z</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Filter Button */}
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-brand-lightyellow hover:bg-brand-lightyellow transition-colors"
              size="sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 12h18M3 20h18" />
              </svg>
              Filters
            </Button>
          </div>
        </div>

        <div 
          ref={productsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map(product => (
            <div key={product.id} className="product-card">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-yellow py-12 sm:py-16">
        <div className="container">
          <div 
            ref={ctaRef}
            className="text-center max-w-2xl mx-auto px-4 sm:px-0 will-change-transform"
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-brand-brown">
              Custom Orders Available
            </h2>
            <p className="text-base sm:text-lg text-brand-brown mb-6 sm:mb-8">
              Need something special for your event? Contact us to discuss custom orders and special requirements.
            </p>
            <Button 
              className="bg-brand-brown hover:bg-opacity-90 text-white transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transform hover:scale-105 active:scale-95"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact for Custom Orders
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
