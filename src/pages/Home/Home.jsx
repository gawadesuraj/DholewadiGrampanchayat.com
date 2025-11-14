import Hero from './Hero'
import QuickServices from './QuickServices'
import NewsHighlights from './NewsHighlights'
import QuoteStrip from './QuoteStrip'
import StatsStrip from './StatsStrip'
import MapSection from './MapSection'

function Home() {
  return (
    <div id="main-content">
      <Hero />
      <QuoteStrip />
      <QuickServices />
      <NewsHighlights />
      <StatsStrip />
      <MapSection />
    </div>
  )
}

export default Home
