import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'

function Explore() {
  const breadcrumbs = [
    { label: 'Explore Shirala', href: null }
  ]

  const attractions = [
    {
      id: 1,
      name: 'Gorakhnath Temple',
      description: 'Ancient temple of Gorakhnath, one of the Navnaths. Every 12 years after Kumbh Mela, saints reside here for 15 days.',
      category: 'Religious',
      image: '🏛️'
    },
    {
      id: 2,
      name: 'Living Cobra Worship',
      description: 'Unique tradition where devotees from across India visit on Nag Panchami to worship the living cobra.',
      category: 'Cultural',
      image: '🐍'
    },
    {
      id: 3,
      name: 'Sahyadri Mountain Ranges',
      description: 'Beautiful mountain ranges in the western region offering scenic views and trekking opportunities.',
      category: 'Natural',
      image: '⛰️'
    },
    {
      id: 4,
      name: 'Warna River',
      description: 'One of the major rivers flowing through Shirala, making the southern region fertile for agriculture.',
      category: 'Natural',
      image: '🌊'
    },
    {
      id: 5,
      name: 'Morana River',
      description: 'Another significant river contributing to the agricultural prosperity of the region.',
      category: 'Natural',
      image: '🌊'
    },
    {
      id: 6,
      name: 'Sugar Factories',
      description: 'Visit the cooperative sugar factories including Ninai Sahakari at Karungali and Vishwas Sahakari at Chikhali.',
      category: 'Industrial',
      image: '🏭'
    },
    {
      id: 7,
      name: 'Yashwant Glucose Factory',
      description: "Asia's first maize processing cooperative factory at Padali, showcasing rural industrialization.",
      category: 'Industrial',
      image: '🌽'
    },
    {
      id: 8,
      name: 'Historical Sites',
      description: 'Explore sites related to freedom struggle including Bilashi forest satyagraha locations.',
      category: 'Historical',
      image: '🏛️'
    }
  ]

  const categories = ['All', 'Religious', 'Cultural', 'Natural', 'Industrial', 'Historical']

  return (
    <div>
      <PageHeader 
        title="Explore Shirala" 
        subtitle="Discover the natural beauty, culture, and heritage of Shirala taluka"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Welcome to Shirala Taluka</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Shirala taluka is renowned for its Sahyadri mountain ranges, natural beauty, 
            and rich cultural heritage. From ancient temples to modern industrial achievements, 
            Shirala offers a unique blend of tradition and progress.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {attractions.map((attraction) => (
            <Card key={attraction.id} hover>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{attraction.image}</div>
                <span className="bg-primary text-white text-xs px-3 py-1 rounded-full mb-3 inline-block">
                  {attraction.category}
                </span>
                <h3 className="text-lg font-semibold mb-2">{attraction.name}</h3>
                <p className="text-gray-600 text-sm">{attraction.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Geography Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Geography & Climate</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Total Area:</span>
                  <span>685 sq km</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Elevation:</span>
                  <span>550-800 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Climate:</span>
                  <span>Tropical monsoon</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Rainfall:</span>
                  <span>600-800 mm annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Best Time to Visit:</span>
                  <span>October to March</span>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Demographics</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Total Population:</span>
                  <span>2,50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Villages:</span>
                  <span>45</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Literacy Rate:</span>
                  <span>78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Main Language:</span>
                  <span>Marathi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Primary Occupation:</span>
                  <span>Agriculture</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Economic Activities */}
        <Card>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Economic Activities</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🌾</div>
                <h4 className="font-semibold mb-2">Agriculture</h4>
                <p className="text-sm text-gray-600">
                  Primary crops: Rice, Sugarcane<br />
                  Fertile southern region due to rivers
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏭</div>
                <h4 className="font-semibold mb-2">Industry</h4>
                <p className="text-sm text-gray-600">
                  Sugar factories, Maize processing<br />
                  Cooperative industrial model
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🥛</div>
                <h4 className="font-semibold mb-2">Dairy</h4>
                <p className="text-sm text-gray-600">
                  Dairy farming and processing<br />
                  Cooperative dairy societies
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Cultural Heritage */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Cultural Heritage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3">Festivals & Traditions</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Nag Panchami:</strong> Living cobra worship attracts devotees nationwide</li>
                  <li>• <strong>Kumbh Mela Connection:</strong> Saints gathering every 12 years</li>
                  <li>• <strong>Ganesh Festival:</strong> Grand celebrations across villages</li>
                  <li>• <strong>Harvest Festivals:</strong> Agricultural community celebrations</li>
                </ul>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3">Freedom Struggle Legacy</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Forest Satyagraha:</strong> Historical movement at Bilashi</li>
                  <li>• <strong>Revolutionary Base:</strong> Kranti Singh Nana Patil's operations</li>
                  <li>• <strong>Freedom Fighters:</strong> Hideouts in western hilly regions</li>
                  <li>• <strong>Independence Movement:</strong> Active participation in national struggle</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
