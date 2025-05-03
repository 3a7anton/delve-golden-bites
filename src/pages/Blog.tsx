
import React from 'react';
import BlogPostCard from '@/components/BlogPostCard';

const Blog = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: '1',
      title: 'The History of Our Secret Recipe',
      excerpt: 'Learn the fascinating story behind our family\'s treasured vegan finger food recipe and how it has evolved over generations.',
      date: 'May 2, 2025',
      image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Emma Thompson'
    },
    {
      id: '2',
      title: 'Vegan Finger Food for Your Next Party',
      excerpt: 'Hosting a party? Discover how our vegan finger food can be the perfect addition to your gathering, pleasing all your guests.',
      date: 'April 28, 2025',
      image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826',
      author: 'James Wilson'
    },
    {
      id: '3',
      title: 'Budget-Friendly Vegan Eating Tips',
      excerpt: 'Being vegan doesn\'t have to break the bank. Here are our top tips for enjoying plant-based food without the high costs.',
      date: 'April 15, 2025',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999',
      author: 'Sophia Rodriguez'
    },
    {
      id: '4',
      title: 'Sustainable Packaging: Our Journey',
      excerpt: 'Discover how we\'ve transformed our packaging to be more environmentally friendly while maintaining product quality.',
      date: 'April 5, 2025',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      author: 'Oliver Chen'
    },
    {
      id: '5',
      title: 'The Benefits of Plant-Based Finger Food',
      excerpt: 'Explore the nutritional benefits of choosing plant-based finger food for your daily snacks and gatherings.',
      date: 'March 22, 2025',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      author: 'Lily Parker'
    },
    {
      id: '6',
      title: 'Behind the Scenes: Our Kitchen',
      excerpt: 'Take a peek into our kitchen and see how we create our delicious vegan finger food with care and precision.',
      date: 'March 10, 2025',
      image: 'https://plus.unsplash.com/premium_photo-1661717448748-650b6c184e5b?q=80&w=893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      author: 'Marcus Johnson'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Blog Header */}
      <section className="bg-brand-lightyellow py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-brand-brown">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Stay updated with our latest recipes, vegan lifestyle tips, 
              and stories behind our secret family recipes.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-yellow py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-brand-brown">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-brand-brown mb-8">
              Get the latest recipes, vegan tips, and exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-brand-brown"
              />
              <button className="bg-brand-brown hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
