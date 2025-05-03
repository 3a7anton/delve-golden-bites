
import React from 'react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      {/* Contact Header */}
      <section className="bg-brand-lightyellow py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-brand-brown">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Have questions, feedback, or special requests? 
              We'd love to hear from you and help with anything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold mb-6 text-brand-brown">
              Get in Touch
            </h2>
            <p className="text-lg mb-8">
              At Delve, we value your feedback and questions. Whether you have a query about our products, 
              delivery options, or want to discuss a custom order, our team is here to help.
            </p>
            
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-lightyellow p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-1">Phone</h3>
                  <p className="text-lg">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am-5pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-lightyellow p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-1">Email</h3>
                  <p className="text-lg">hello@delvefoods.com</p>
                  <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-lightyellow p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-1">Address</h3>
                  <p className="text-lg">123 Vegan Street, Foodville, FD 12345</p>
                  <p className="text-sm text-muted-foreground mt-1">Production & Distribution Center</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-serif text-xl font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-brand-lightyellow hover:bg-brand-yellow p-3 rounded-full transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6 text-brand-brown" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-brand-lightyellow hover:bg-brand-yellow p-3 rounded-full transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6 text-brand-brown" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-brand-lightyellow hover:bg-brand-yellow p-3 rounded-full transition-all">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6 text-brand-brown" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md border border-brand-lightyellow">
              <h3 className="font-serif text-2xl font-medium mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-12">
        <div className="h-[400px] bg-gray-200 w-full">
          <div className="w-full h-full flex items-center justify-center bg-brand-lightyellow">
            <div className="text-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-brand-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-serif text-2xl font-medium mb-2">Find Us Here</h3>
              <p className="text-muted-foreground">123 Vegan Street, Foodville, FD 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-brown">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to our most commonly asked questions. If you can't find what you're looking for, 
            please don't hesitate to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-brand-lightyellow rounded-lg overflow-hidden">
            <div className="bg-brand-lightyellow px-6 py-4">
              <h3 className="font-serif text-lg font-medium">How long does delivery take?</h3>
            </div>
            <div className="px-6 py-4">
              <p>
                We typically deliver within 1-3 business days, depending on your location. 
                All orders are shipped with tracking information so you can follow your package's journey.
              </p>
            </div>
          </div>
          
          <div className="border border-brand-lightyellow rounded-lg overflow-hidden">
            <div className="bg-brand-lightyellow px-6 py-4">
              <h3 className="font-serif text-lg font-medium">Are your products suitable for people with allergies?</h3>
            </div>
            <div className="px-6 py-4">
              <p>
                Our products are 100% vegan, but some contain common allergens like nuts or gluten. 
                Each product page lists all ingredients and potential allergens. 
                We also offer allergen-free options for those with specific dietary needs.
              </p>
            </div>
          </div>
          
          <div className="border border-brand-lightyellow rounded-lg overflow-hidden">
            <div className="bg-brand-lightyellow px-6 py-4">
              <h3 className="font-serif text-lg font-medium">Do you offer bulk or wholesale orders?</h3>
            </div>
            <div className="px-6 py-4">
              <p>
                Yes! We offer special pricing for bulk and wholesale orders. 
                Please contact our sales team at wholesale@delvefoods.com for more information and a customized quote.
              </p>
            </div>
          </div>
          
          <div className="border border-brand-lightyellow rounded-lg overflow-hidden">
            <div className="bg-brand-lightyellow px-6 py-4">
              <h3 className="font-serif text-lg font-medium">What's your refund policy?</h3>
            </div>
            <div className="px-6 py-4">
              <p>
                We want you to be completely satisfied with your purchase. If you're not happy with your order for any reason, 
                please contact us within 7 days of receiving your order, and we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
