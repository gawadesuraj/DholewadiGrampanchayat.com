//src/pages/Events/Events.jsx

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import SearchBar from '../../components/common/SearchBar'
import { supabase } from '../../services/supabaseClient'

function Events() {
  const [searchQuery, setSearchQuery] = useState('')
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('is_published', true)
          .order('date', { ascending: false })

        if (error) throw error
        setEvents(data || [])
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  const breadcrumbs = [
    { label: 'Events', href: null }
  ]

  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date())
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date())

  return (
    <div>
      <PageHeader 
        title="Events & Programs" 
        subtitle="Upcoming events, meetings, and government programs"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        {/* Search */}
        <div className="mb-8 flex justify-center">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Search events..."
          />
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} hover>
                  <div className="p-6">
                    {event.image_url && (
                      <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full capitalize">
                        {event.category || 'Event'}
                      </span>
                      <div className="text-right text-sm">
                        <div className="font-medium text-primary">{event.date}</div>
                        <div className="text-gray-500">{event.time}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    {event.subtitle && <h4 className="text-md text-gray-700 mb-2">{event.subtitle}</h4>}
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>

                    {event.venue && (
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {event.venue}
                      </div>
                    )}

                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                    >
                      View Details
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} hover className="opacity-75">
                  <div className="p-6">
                    {event.image_url && (
                      <img src={event.image_url} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4 opacity-75" />
                    )}
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full capitalize">
                        {event.category || 'Event'}
                      </span>
                      <div className="text-right text-sm">
                        <div className="font-medium text-gray-500">{event.date}</div>
                        <div className="text-gray-400">{event.time}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-gray-700">{event.title}</h3>
                    {event.subtitle && <h4 className="text-md text-gray-600 mb-2">{event.subtitle}</h4>}
                    <p className="text-gray-500 text-sm mb-3">{event.description}</p>

                    {event.venue && (
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {event.venue}
                      </div>
                    )}

                    <Link
                      to={`/events/${event.id}`}
                      className="inline-flex items-center text-gray-500 hover:text-primary font-medium"
                    >
                      View Details
                      <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">⏳</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Loading events...</h3>
          </div>
        )}

        {/* No Events */}
        {!loading && filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📅</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Events
