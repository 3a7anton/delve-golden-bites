import React from 'react';
import { useGSAPAnimation, useStaggerAnimation, useParallax } from '../hooks/useGSAPAnimation';

const AnimationDemo = () => {
  const fadeInRef = useGSAPAnimation<HTMLDivElement>('fadeIn');
  const slideLeftRef = useGSAPAnimation<HTMLDivElement>('slideInLeft');
  const slideRightRef = useGSAPAnimation<HTMLDivElement>('slideInRight');
  const scaleRef = useGSAPAnimation<HTMLDivElement>('scaleIn');
  const staggerRef = useStaggerAnimation<HTMLDivElement>('.stagger-item');
  const parallaxRef = useParallax<HTMLDivElement>(0.3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero with parallax background */}
      <div className="h-screen relative overflow-hidden flex items-center justify-center">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 will-change-transform"
        />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-6xl font-bold mb-4">GSAP + Lenis Demo</h1>
          <p className="text-xl">Smooth scrolling with beautiful animations</p>
        </div>
      </div>

      {/* Fade In Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={fadeInRef} className="text-center will-change-transform">
            <h2 className="text-4xl font-bold mb-8">Fade In Animation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This section fades in smoothly as you scroll down the page.
            </p>
          </div>
        </div>
      </section>

      {/* Slide Animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div ref={slideLeftRef} className="will-change-transform">
              <h3 className="text-3xl font-bold mb-4">Slide from Left</h3>
              <p className="text-gray-600">
                This content slides in from the left side of the screen.
              </p>
            </div>
            <div ref={slideRightRef} className="will-change-transform">
              <h3 className="text-3xl font-bold mb-4">Slide from Right</h3>
              <p className="text-gray-600">
                This content slides in from the right side of the screen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Animation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={scaleRef} className="text-center will-change-transform">
            <h2 className="text-4xl font-bold mb-8">Scale Animation</h2>
            <div className="bg-yellow-400 p-8 rounded-lg inline-block">
              <p className="text-xl font-semibold">This scales up with a bounce effect!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stagger Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Stagger Animation</h2>
          <div ref={staggerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stagger-item bg-red-100 p-6 rounded-lg will-change-transform">
              <h3 className="text-2xl font-bold mb-4">Item 1</h3>
              <p>This appears first</p>
            </div>
            <div className="stagger-item bg-green-100 p-6 rounded-lg will-change-transform">
              <h3 className="text-2xl font-bold mb-4">Item 2</h3>
              <p>This appears second</p>
            </div>
            <div className="stagger-item bg-blue-100 p-6 rounded-lg will-change-transform">
              <h3 className="text-2xl font-bold mb-4">Item 3</h3>
              <p>This appears third</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for more scrolling */}
      <div className="h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Keep Scrolling to Test Smooth Scrolling!</h2>
      </div>
    </div>
  );
};

export default AnimationDemo;
