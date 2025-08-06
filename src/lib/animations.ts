import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

export const animations = {
  // Fade in animation
  fadeIn: (element: string | HTMLElement, options?: gsap.TweenVars) => {
    return gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  },

  // Slide in from left
  slideInLeft: (element: string | HTMLElement, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  },

  // Slide in from right
  slideInRight: (element: string | HTMLElement, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  },

  // Scale animation
  scaleIn: (element: string | HTMLElement, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  },

  // Stagger animation for multiple elements
  staggerIn: (elements: string | NodeList | HTMLElement[], options?: gsap.TweenVars) => {
    return gsap.fromTo(elements,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: typeof elements === 'string' ? elements : (elements as HTMLElement[])[0],
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  },

  // Parallax effect
  parallax: (element: string | HTMLElement, speed: number = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }
};

// Utility function to refresh ScrollTrigger
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Utility function to kill all ScrollTriggers
export const killAllScrollTriggers = () => {
  ScrollTrigger.killAll();
};
