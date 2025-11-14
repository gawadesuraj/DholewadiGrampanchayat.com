// frontend/src/pages/Home/NewsHighlights.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import { supabase } from "../../services/supabaseClient";

function NewsHighlights() {
  const [news, setNews] = useState([]);

  // ✅ Fetch latest news (3 items)
  useEffect(() => {
    async function fetchNews() {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(3);

      if (!error) setNews(data || []);
    }

    fetchNews();

    // ✅ Realtime subscription
    const channel = supabase
      .channel("news-highlights")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "news" },
        (payload) => {
          setNews((prev) => {
            // Add / Update / Remove logic
            if (payload.eventType === "INSERT")
              return [payload.new, ...prev].slice(0, 3);
            if (payload.eventType === "UPDATE")
              return prev.map((n) =>
                n.id === payload.new.id ? payload.new : n
              );
            if (payload.eventType === "DELETE")
              return prev.filter((n) => n.id !== payload.old.id);
            return prev;
          });
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className="text-center mb-8"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
          <p className="text-gray-600">
            Stay informed with the latest news and announcements from Panchayat
            Samiti Shirala
          </p>
        </div>

        {/* News Grid */}
        {news.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card hover className="h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-500 text-sm">
                        {new Date(item.published_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.summary || "No description available."}
                    </p>
                    <Link
                      to={`/news/${item.id}`}
                      className="text-primary hover:text-primary-dark font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500" data-aos="fade-up">
            📰 No news available yet.
          </div>
        )}

        {/* View All News Link */}
        <div
          className="text-center mt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            to="/news"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            View All News
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsHighlights;
