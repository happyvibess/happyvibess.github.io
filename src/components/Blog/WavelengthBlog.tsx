import React, { useState, useEffect } from 'react';
import './WavelengthBlog.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  featured?: boolean;
  readTime: string;
}

const WavelengthBlog: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [posts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Building Modern Web Applications with React and TypeScript',
      excerpt: 'Explore the latest best practices for creating scalable and maintainable web applications using React and TypeScript...',
      date: '2023-06-01',
      category: 'Development',
      tags: ['React', 'TypeScript', 'Web Development'],
      featured: true,
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'The Future of AI in Software Development',
      excerpt: 'Discover how artificial intelligence is transforming the way we write code and build applications...',
      date: '2023-05-28',
      category: 'AI',
      tags: ['AI', 'Machine Learning', 'Future Tech'],
      readTime: '4 min read'
    },
    {
      id: '3',
      title: 'Creating Beautiful UI Animations with Framer Motion',
      excerpt: 'Learn how to add smooth, engaging animations to your React applications using Framer Motion...',
      date: '2023-05-25',
      category: 'Design',
      tags: ['Animation', 'UI/UX', 'React'],
      readTime: '6 min read'
    }
  ]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  useEffect(() => {
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('appear');
      }, index * 100);
    });
  }, [searchQuery]);

  return (
    <div className={`wavelength-blog ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </div>
      
      <header className="blog-header">
        <div className="gradient-overlay"></div>
        <h1>Wavelength</h1>
        <p>Exploring the frequencies of modern technology</p>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search posts or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </header>

      {featuredPost && (
        <section className="featured-post glass-morphism">
          <span className="featured-label">Featured Post</span>
          <h2>{featuredPost.title}</h2>
          <p>{featuredPost.excerpt}</p>
          <div className="post-meta">
            <span className="date">{featuredPost.date}</span>
            <span className="read-time">{featuredPost.readTime}</span>
          </div>
          <div className="tags">
            {featuredPost.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </section>
      )}

      <div className="blog-grid">
        {regularPosts.map((post) => (
          <article key={post.id} className="blog-card glass-morphism">
            <div className="card-category">{post.category}</div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="card-footer">
              <span className="date">{post.date}</span>
              <span className="read-time">{post.readTime}</span>
            </div>
            <button className="read-more">Read More</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default WavelengthBlog;
