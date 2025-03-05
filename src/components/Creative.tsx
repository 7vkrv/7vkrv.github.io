import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ExternalLink, Construction } from 'lucide-react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface NotionPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
  link?: string;
}

const Creative = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'gallery'>('blog');
  const [loading, setLoading] = useState(true);
  const [notionPosts, setNotionPosts] = useState<NotionPost[]>([]);

  useEffect(() => {
    const fetchNotionPosts = async () => {
      try {
        setLoading(true);
        setNotionPosts([
          {
            id: '1',
            title: 'Humans of Jagriti Yatra',
            excerpt: 'A compelling collection of stories capturing the essence of entrepreneurial journeys across India. This book showcases inspiring narratives of change-makers, highlighting their challenges, innovations, and impact on local communities.',
            coverImage: 'https://i.imgur.com/CWgZHt0.png',
            date: '2024-03-15',
            readTime: '10 min read',
            tags: ['Storytelling', 'Entrepreneurship', 'Social Impact'],
            link: 'https://issuu.com/7vkreddi/docs/hojy',
            color: 'from-blue-600 to-cyan-500'
          }
        ]);
      } catch (error) {
        console.error('Error fetching Notion posts:', error);
        setNotionPosts([]);
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === 'blog') {
      fetchNotionPosts();
    } else {
      setLoading(false);
    }
  }, [activeTab]);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'blog'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:text-white'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'gallery'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:text-white'
            }`}
          >
            Gallery
          </button>
        </div>

        {/* Blog Posts */}
        {activeTab === 'blog' && (
          <div className="space-y-8">
            {loading ? (
              Array(1).fill(null).map((_, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <Skeleton height={256} />
                  <div className="p-6">
                    <Skeleton count={3} />
                  </div>
                </div>
              ))
            ) : (
              notionPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${post.color} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                  <article className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transform group-hover:translate-y-[-4px] transition-all duration-300">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${post.color} opacity-25 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm transform hover:scale-105 transition-all duration-300 hover:shadow-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-1" />
                          <span className="mr-4">{post.date}</span>
                          <Clock size={16} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.link && (
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                          >
                            Read More
                            <ExternalLink size={16} className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))
            )}
          </div>
        )}

        {/* Gallery - Under Construction */}
        {activeTab === 'gallery' && (
          <div className="flex flex-col items-center justify-center p-12 bg-gray-900 rounded-lg shadow-lg">
            <Construction size={64} className="text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Gallery Coming Soon
            </h3>
            <p className="text-gray-300 text-center">
              We're working on bringing you a beautiful gallery of Instagram posts.
              Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Creative;