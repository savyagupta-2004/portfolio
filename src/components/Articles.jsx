import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Hello world: how I built this site",
    date: "April 21, 2022",
    excerpt:
      "I originally built this portfolio site back in 2018, and since then it’s evolved quite a bit. Recently I migrated from Create React App to Next.js...",
    timecode: "00:05:03:99",
    featured: false,
  },
  {
    title: "You (probably) don’t need CSS-in-JS",
    date: "May 01, 2022",
    excerpt:
      "Vanilla CSS is good now actually. Here’s a couple nifty techniques for dynamically styling React components with CSS custom properties.",
    timecode: "00:07:53:60",
    featured: true,
    image: "../Icons/savya.jpg", // Example placeholder
  },
];

export default function Articles() {
  return (
    <div className="bg-black text-white min-h-screen px-8 py-10">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        Latest articles
        <span className="text-gray-400 text-sm">|</span>
        <span className="text-gray-500 text-sm tracking-widest">加载中...</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        {/* Left Sidebar */}
        <div>
          {articles.map((article, index) =>
            !article.featured ? (
              <ArticleCard key={index} article={article} />
            ) : null
          )}
          <SkeletonArticle />
        </div>

        {/* Featured Article */}
        {articles.map((article, index) =>
          article.featured ? (
            <FeaturedArticle key={index} article={article} />
          ) : null
        )}
      </div>
    </div>
  );
}

// Normal Article Card
function ArticleCard({ article }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-900 p-6 rounded-lg relative"
    >
      <div className="text-teal-400 font-medium mb-2">{article.date}</div>
      <h3 className="text-lg font-bold">{article.title}</h3>
      <p className="text-gray-400 text-sm mt-2">{article.excerpt}</p>
      <div className="flex justify-between items-center mt-4">
        <a href="#" className="text-teal-400 text-sm hover:underline">
          Read article →
        </a>
        <span className="text-gray-500 text-xs">{article.timecode}</span>
      </div>
    </motion.div>
  );
}

// Featured Article Component
function FeaturedArticle({ article }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="relative bg-gradient-to-r from-purple-900 to-black p-8 rounded-lg overflow-hidden"
    >
      <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs rounded">
        Featured
      </span>
      <img
        src={article.image}
        alt="Article Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative">
        <div className="text-teal-400 font-medium mb-2">{article.date}</div>
        <h2 className="text-2xl font-bold">{article.title}</h2>
        <p className="text-gray-300 mt-3">{article.excerpt}</p>
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-teal-400 text-sm hover:underline">
            Read article →
          </a>
          <span className="text-gray-500 text-xs">{article.timecode}</span>
        </div>
      </div>
    </motion.div>
  );
}

// Skeleton Loader for Placeholder Content
function SkeletonArticle() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg opacity-50">
      <div className="w-32 h-4 bg-gray-700 mb-2"></div>
      <div className="w-48 h-6 bg-gray-700 mb-3"></div>
      <div className="w-full h-16 bg-gray-700"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="w-24 h-4 bg-gray-700"></div>
        <div className="w-16 h-4 bg-gray-700"></div>
      </div>
    </div>
  );
}
