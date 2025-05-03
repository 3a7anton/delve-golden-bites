
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-brand-lightyellow sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-serif text-2xl font-bold text-brand-brown"
          >
            Delve
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-brand-brown transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium hover:text-brand-brown transition-colors">
              Shop
            </Link>
            <Link to="/blog" className="font-medium hover:text-brand-brown transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="font-medium hover:text-brand-brown transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Button className="bg-brand-yellow hover:bg-brand-brown text-brand-brown hover:text-white transition-colors">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-60 py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-brand-brown transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="font-medium hover:text-brand-brown transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/blog" 
              className="font-medium hover:text-brand-brown transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-brand-brown transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-brand-yellow hover:bg-brand-brown text-brand-brown hover:text-white transition-colors w-full">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
