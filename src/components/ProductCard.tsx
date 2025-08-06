
import React, { useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useGSAPAnimation } from '@/hooks/useGSAPAnimation';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image
}) => {
  const cardRef = useGSAPAnimation<HTMLDivElement>('scaleIn');
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    if (imageRef.current) {
      imageRef.current.style.opacity = '1';
    }
  };

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1.1)';
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <Card 
      ref={cardRef}
      className="group overflow-hidden border border-brand-lightyellow hover:border-brand-brown hover:shadow-xl transition-all duration-500 h-full flex flex-col will-change-transform transform-gpu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-square overflow-hidden bg-brand-lightyellow">
        <img
          ref={imageRef}
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 ease-out opacity-0"
          style={{ 
            transform: 'scale(1)',
            filter: 'brightness(1.05) contrast(1.1)',
          }}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <div className="bg-brand-yellow/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-xs font-medium text-brand-brown">Premium</span>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-6 flex-grow px-4 sm:px-6">
        <h3 className="font-serif text-lg sm:text-xl font-medium mb-2 text-brand-brown group-hover:text-brand-brown/80 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg sm:text-xl text-brand-brown">
            ${price.toFixed(2)}
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3 text-brand-yellow fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4 sm:pb-6 px-4 sm:px-6 flex flex-col sm:flex-row gap-2 sm:gap-2">
        <Button 
          className="w-full bg-brand-yellow hover:bg-brand-brown text-brand-brown hover:text-white transition-all duration-300 transform hover:scale-[0.98] active:scale-95 font-medium"
          size="sm"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L3 3H1m6 10v6a1 1 0 001 1h2a1 1 0 001-1v-6m-4 0V9a1 1 0 011-1h2a1 1 0 011 1v4.01" />
          </svg>
          Add to Cart
        </Button>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto border-brand-lightyellow hover:bg-brand-lightyellow hover:text-brand-brown transition-all duration-300 transform hover:scale-[0.98] active:scale-95"
          size="sm"
          asChild
        >
          <Link to={`/shop/${id}`}>
            <svg 
              className="w-4 h-4 mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
