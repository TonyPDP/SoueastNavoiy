import { Link, useParams } from "react-router-dom";

// News Detail Component
const NewsDetail = () => {
  const { id } = useParams();

  const newsItems = [
    {
      id: 1,
      title: "Our first client",
      date: "August 22, 2025",
      category: "Client",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Soueast Navoiy is delighted to announce the delivery of our very first vehicle to a valued customer, marking a historic milestone for our company. The event was celebrated in the presence of company executives, local officials, and members of the community.</p> <p>The honor of being our very first customer goes to a kind-hearted local woman, who purchased the vehicle as a special birthday gift for her son. Her thoughtful gesture reflects the trust and confidence she placed in Soueast Navoiy.</p> <p>"I wanted to give my son something meaningful for his birthday, and this car was the perfect choice," she shared with a warm smile. "It brings me joy knowing he will enjoy the comfort, safety, and quality that Soueast offers."</p> <p>This memorable delivery not only highlights the dedication and hard work of our team but also sets the stage for Soueast Navoiy’s journey in the automotive market. We are proud to begin our story with such a heartfelt moment and look forward to serving many more families in the years ahead.</p>
      `,
    },
  ];

  const newsItem = newsItems.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        News article not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          to="/news"
          className="inline-flex items-center text-gray-800 font-medium mb-6 hover:text-gray-600"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to News
        </Link>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="h-96 overflow-hidden">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-800 font-semibold bg-gray-50 py-1 px-3 rounded-full">
                {newsItem.category}
              </span>
              <span className="text-sm text-gray-500">{newsItem.date}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              {newsItem.title}
            </h1>

            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Share this article
              </h3>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Related News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems
              .filter((item) => item.id !== parseInt(id))
              .slice(0, 2)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-800 font-semibold">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
