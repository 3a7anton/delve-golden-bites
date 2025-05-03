
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  id,
  title,
  excerpt,
  date,
  image,
  author
}) => {
  return (
    <Card className="overflow-hidden border border-brand-lightyellow hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <Link to={`/blog/${id}`} className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{date}</span>
          <span>•</span>
          <span>By {author}</span>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="font-serif text-xl font-medium mb-2 hover:text-brand-brown transition-colors">{title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        <Link 
          to={`/blog/${id}`}
          className="text-brand-brown font-medium hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
