import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Main News Page Component
const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const newsItems = [
    {
      id: 1,
      title: "Soueast Navoiy Becomes an Official Dealer",
      date: "August 7, 2025",
      category: "Business",
      excerpt:
        "Soueast Navoiy proudly announces its official dealership status and celebrates the delivery of its first vehicle...",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
    <p>Soueast Navoiy proudly announces that it has officially become an authorized dealer of Soueast vehicles, marking an important milestone in the brand’s growth across Uzbekistan. The announcement was celebrated with the delivery of the first car to a happy customer — a moment that symbolizes the beginning of Soueast Navoiy’s exciting journey in the automotive market.</p> 
    <p>The first customer, a kind local resident, purchased the vehicle as a heartfelt birthday gift for her son. Her decision highlights the trust and confidence placed in Soueast’s quality, reliability, and design.</p> 
    <p>"I wanted my son to have something meaningful and lasting for his birthday," she shared. "This car felt like the perfect choice — safe, comfortable, and stylish."</p> 
    <p>This milestone marks not only the start of Soueast Navoiy’s operations but also its mission to bring world-class automotive experiences to customers in the Navoiy region. With a dedicated team and strong commitment to service, Soueast Navoiy looks forward to delivering excellence and building lasting relationships with customers for years to come.</p>
  `,
    },
  ];

  const categories = [
    "All",
    "Client",
    "Awards",
    "Expansion",
    "Business",
    "Sustainability",
    "Safety",
  ];

  const filteredNews =
    activeCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest News
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gray-800 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <Link to={`/news/${item.id}`}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-800 font-semibold">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="text-gray-800 font-semibold flex items-center hover:text-gray-600 transition-colors">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Stay Updated with Soueast
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter to receive the latest news and updates
            directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border-2 border-r-0 border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <button className="bg-gray-800 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
