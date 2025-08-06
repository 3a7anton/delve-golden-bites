
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import ContactForm from '@/components/ContactForm';
import { useGSAPAnimation, useStaggerAnimation } from '@/hooks/useGSAPAnimation';

const Index = () => {
  // Animation refs
  const heroTitleRef = useGSAPAnimation<HTMLHeadingElement>('slideInLeft', { delay: 0.2 });
  const heroDescRef = useGSAPAnimation<HTMLParagraphElement>('slideInLeft', { delay: 0.4 });
  const heroBtnRef = useGSAPAnimation<HTMLDivElement>('fadeIn', { delay: 0.6 });
  const featuredSectionRef = useStaggerAnimation<HTMLDivElement>('.product-card', { delay: 0.2 });
  const aboutSectionRef = useGSAPAnimation<HTMLDivElement>('fadeIn');

  // Sample featured products
  const featuredProducts = [
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-lightyellow relative overflow-hidden">
        <div className="container min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex flex-col justify-center py-12 sm:py-16 relative z-10">
          <div className="max-w-2xl px-4 sm:px-0">
            <h1 
              ref={heroTitleRef}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-brand-brown will-change-transform leading-tight"
            >
              Delicious Vegan Finger Food Delivered to Your Door
            </h1>
            <p 
              ref={heroDescRef}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700 will-change-transform"
            >
              Experience our secret recipe, crafted with care and delivered directly to your home. 
              Perfect for those seeking quality vegan options on a budget.
            </p>
            <div ref={heroBtnRef} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 will-change-transform">
              <Button 
                className="bg-brand-yellow hover:bg-brand-brown text-brand-brown hover:text-white transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 transform hover:scale-105 active:scale-95"
                asChild
              >
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button 
                variant="outline"
                className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-6 transform hover:scale-105 active:scale-95"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-white">
        <div className="container" ref={featuredSectionRef}>
          <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our Featured Products
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular vegan finger foods, made with our secret recipe and 
              delivered fresh to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button 
              className="bg-brand-brown hover:bg-opacity-90 text-white transition-all duration-300 transform hover:scale-105 active:scale-95 px-6 sm:px-8 py-3 sm:py-4"
              asChild
            >
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Our Secret Recipe Section */}
      <section className="section-padding bg-brand-lightyellow">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" ref={aboutSectionRef}>
            <div className="will-change-transform">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center" 
                alt="Our Secret Recipe - Vegan cooking ingredients and process" 
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 md:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="will-change-transform">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-brand-brown">
                Our Secret Recipe
              </h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">
                For generations, our family has perfected the art of creating delicious vegan finger food. 
                Our secret recipe combines traditional techniques with innovative plant-based ingredients.
              </p>
              <p className="text-base sm:text-lg mb-4 sm:mb-6">
                We're passionate about making high-quality vegan food accessible to everyone, regardless of budget. 
                That's why we've created a product that's both affordable and exceptionally delicious.
              </p>
              <Button 
                className="bg-brand-yellow hover:bg-brand-brown text-brand-brown hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                asChild
              >
                <Link to="/blog">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Why Choose Delve?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional vegan finger food that doesn't break the bank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-brand-lightyellow rounded-lg hover:shadow-md transition-all">
              <div className="bg-brand-lightyellow w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">100% Vegan</h3>
              <p className="text-muted-foreground">All our products are completely plant-based and cruelty-free.</p>
            </div>
            
            <div className="text-center p-6 border border-brand-lightyellow rounded-lg hover:shadow-md transition-all">
              <div className="bg-brand-lightyellow w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Budget-Friendly</h3>
              <p className="text-muted-foreground">Quality vegan food that won't break the bank.</p>
            </div>
            
            <div className="text-center p-6 border border-brand-lightyellow rounded-lg hover:shadow-md transition-all">
              <div className="bg-brand-lightyellow w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Home Delivery</h3>
              <p className="text-muted-foreground">Fresh products delivered directly to your doorstep.</p>
            </div>
            
            <div className="text-center p-6 border border-brand-lightyellow rounded-lg hover:shadow-md transition-all">
              <div className="bg-brand-lightyellow w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Secret Recipe</h3>
              <p className="text-muted-foreground">Our traditional family recipe passed down generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section-padding bg-brand-lightyellow">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-brand-brown">
                Contact Us
              </h2>
              <p className="text-lg mb-8">
                Have questions about our products, delivery options, or anything else? 
                We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">hello@delvefoods.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-muted-foreground">123 Vegan Street, Foodville, FD 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-serif text-xl font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white hover:bg-brand-yellow p-3 rounded-full transition-all">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6 text-brand-brown" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white hover:bg-brand-yellow p-3 rounded-full transition-all">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6 text-brand-brown" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-white hover:bg-brand-yellow p-3 rounded-full transition-all">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6 text-brand-brown" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-serif text-2xl font-medium mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
