
import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
  // Sample products
  const products = [
    {
      id: '1',
      name: 'Golden Bites Box',
      description: 'Our signature vegan finger-food selection',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
    },
    {
      id: '2',
      name: 'Savory Party Pack',
      description: 'Perfect for gatherings and celebrations',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '3',
      name: 'Spicy Delights',
      description: 'A kick of heat for the adventurous foodie',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '4',
      name: 'Mini Bites Collection',
      description: 'Bite-sized treats for any occasion',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1486328228599-85db4443971f'
    },
    {
      id: '5',
      name: 'Family Feast Box',
      description: 'Our largest box for gatherings and events',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125'
    },
    {
      id: '6',
      name: 'Sweet & Savory Mix',
      description: 'The perfect combination of flavors',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1609951651556-5334e2706168'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Shop Header */}
      <section className="bg-brand-lightyellow py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-brand-brown">
              Shop Our Products
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Explore our range of delicious vegan finger foods, all made with our secret recipe 
              and delivered directly to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold">Our Products</h2>
            <p className="text-muted-foreground">Showing all {products.length} results</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="pl-4 pr-10 py-2 rounded-md border border-brand-lightyellow appearance-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent">
                <option>Sort by popularity</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
                <option>Sort by newest</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <Button variant="outline" className="border-brand-lightyellow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 12h18M3 20h18" />
                </svg>
              </Button>
            </div>
            <div>
              <Button variant="outline" className="border-brand-lightyellow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-yellow py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-brown">
              Custom Orders Available
            </h2>
            <p className="text-lg text-brand-brown mb-8">
              Need something special for your event? Contact us to discuss custom orders and special requirements.
            </p>
            <Button 
              className="bg-brand-brown hover:bg-opacity-90 text-white transition-colors px-8 py-6"
              size="lg"
            >
              Contact for Custom Orders
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
