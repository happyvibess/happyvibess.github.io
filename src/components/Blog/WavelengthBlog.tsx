import React, { useEffect, useState } from 'react';
import './WavelengthBlog.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const WavelengthBlog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      excerpt: "Explore the latest trends and tools in web development...",
      date: "2023-06-01",
      category: "Development"
    },
    {
      id: 2,
      title: "The Future of AI in Software Engineering",
      excerpt: "Discover how artificial intelligence is transforming...",
      date: "2023-05-28",
      category: "AI"
    }
  ]);

  useEffect(() => {
    // Animation on mount
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
      card.classList.add('appear');
    });
  }, []);

  return (
    <div className="wavelength-blog">
      <div className="blog-header">
        <div className="gradient-overlay"></div>
        <h1>Wavelength</h1>
        <p>Exploring the frequencies of modern technology</p>
      </div>
      
      <div className="blog-container">
        {posts.map((post) => (
          <div key={post.id} className="blog-card glass-morphism">
            <div className="card-category">{post.category}</div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <div className="card-footer">
              <span className="date">{post.date}</span>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WavelengthBlog;

