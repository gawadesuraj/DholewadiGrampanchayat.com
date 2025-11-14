// frontend/src/pages/News/News.jsx

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import SearchBar from '../../components/common/SearchBar'
import { supabase } from '../../services/supabaseClient'

function News() {
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  // ✅ Fetch data and enable real-time sync
  useEffect(() => {
    async function fetchNews() {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false })
      if (!error) setNews(data)
      setLoading(false)
    }

    fetchNews()

    // ✅ Realtime subscription to live updates
    const channel = supabase
      .channel('realtime-news')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'news' },
        (payload) => {
          setNews((prev) => {
            if (payload.eventType === 'INSERT') return [payload.new, ...prev]
            if (payload.eventType === 'UPDATE')
              return prev.map((n) => (n.id === payload.new.id ? payload.new : n))
            if (payload.eventType === 'DELETE')
              return prev.filter((n) => n.id !== payload.old.id)
            return prev
          })
        }
      )
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [])

  // ✅ Filter by search (case-insensitive)
  const filteredNews = news.filter((n) =>
    n.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.summary?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const breadcrumbs = [{ label: 'News', href: null }]

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500 text-lg">Loading news...</div>
    )
  }

  return (
    <div>
      <PageHeader
        title="News & Updates"
        subtitle="Latest news, announcements and updates from Panchayat Samiti Shirala"
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12">
        {/* 🔍 Search bar only */}
        <div className="mb-12 flex justify-center px-4">
  <div className="w-full max-w-lg">
    <SearchBar
      onSearch={setSearchQuery}
      placeholder="Search news by title..."
    />
  </div>
</div>


        {/* 📰 News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid gap-6">
            {filteredNews.map((n) => (
              <Card key={n.id} hover>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-gray-500 text-sm">
                          {new Date(n.published_at).toLocaleDateString()}
                        </span>
                      </div>

                      <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                        <Link to={`/news/${n.id}`}>{n.title}</Link>
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">{n.summary}</p>

                      <Link
                        to={`/news/${n.id}`}
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                      >
                        Read Full Story
                        <svg
                          className="ml-2 w-4 h-4"
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

                    {n.image_url ? (
                      <img
                        src={n.image_url}
                        alt=""
                        className="w-full md:w-64 h-48 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full md:w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">News Image</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📰</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No news found</h3>
            <p className="text-gray-600">
              Try a different search keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default News
