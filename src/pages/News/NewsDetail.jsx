// frontend/src/pages/News/NewsDetail.jsx

import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import { supabase } from '../../services/supabaseClient'

function NewsDetail() {
  const { id } = useParams()
  const [news, setNews] = useState(null)
  const [related, setRelated] = useState([])

  useEffect(() => {
    async function fetchNews() {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', id)
        .single()
      if (!error) {
        setNews(data)
        const { data: rel } = await supabase
          .from('news')
          .select('*')
          .neq('id', id)
          .eq('category', data.category)
          .limit(3)
        setRelated(rel || [])
      }
    }
    fetchNews()
  }, [id])

  if (!news)
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">News article not found</h1>
        <Link to="/news" className="text-primary hover:underline">
          ← Back to News
        </Link>
      </div>
    )

  const breadcrumbs = [
    { label: 'News', href: '/news' },
    { label: news.title.substring(0, 50) + '...', href: null }
  ]

  return (
    <div>
      <PageHeader breadcrumbs={breadcrumbs} />

      <div className="container py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3">
            <Card>
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    {news.category && (
                      <span className="bg-primary text-white text-sm px-3 py-1 rounded-full capitalize">
                        {news.category}
                      </span>
                    )}
                    <span className="text-gray-500 text-sm">
                      {new Date(news.published_at).toLocaleDateString()}
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold mb-4 leading-tight">{news.title}</h1>

                  {news.summary && (
                    <p className="text-xl text-gray-600 leading-relaxed">{news.summary}</p>
                  )}
                </div>

                {news.image_url && (
                  <img
                    src={news.image_url}
                    alt=""
                    className="w-full h-64 object-cover rounded-lg mb-8"
                  />
                )}

                <div className="prose prose-lg max-w-none">
                  {news.content?.split('\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>
                      Published on {new Date(news.published_at).toLocaleString()}
                    </span>
                    <Link to="/news" className="text-primary hover:underline">
                      ← Back to News
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {related.length > 0 && (
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Related News</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <div key={r.id}>
                        <Link
                          to={`/news/${r.id}`}
                          className="block hover:text-primary transition-colors"
                        >
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">
                            {r.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {new Date(r.published_at).toLocaleDateString()}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
