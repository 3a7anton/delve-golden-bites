
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
  return (
    <Card className="overflow-hidden border border-brand-lightyellow hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="font-serif text-xl font-medium mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-2">{description}</p>
        <p className="font-medium text-brand-brown">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6 flex gap-2">
        <Button className="w-full bg-brand-yellow hover:bg-brand-brown text-brand-brown hover:text-white transition-colors">
          Add to Cart
        </Button>
        <Button 
          variant="outline" 
          className="border-brand-lightyellow hover:bg-brand-lightyellow hover:text-brand-brown transition-colors"
          asChild
        >
          <Link to={`/shop/${id}`}>
            Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
