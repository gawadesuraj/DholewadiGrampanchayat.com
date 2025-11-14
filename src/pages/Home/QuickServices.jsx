import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Birth Certificate',
    description: 'Apply for birth certificate online with fast processing',
    icon: '👶',
    link: '/services/birth-certificate',
    color: 'from-blue-500 to-blue-600',
    time: '7-10 days',
    fee: '₹50'
  },
  {
    title: 'Death Certificate',
    description: 'Get death certificate for legal procedures',
    icon: '📄',
    link: '/services/death-certificate',
    color: 'from-gray-600 to-gray-700',
    time: '3-5 days',
    fee: '₹50'
  },
  {
    title: 'Income Certificate',
    description: 'Official income certificate for various purposes',
    icon: '💰',
    link: '/services/income-certificate',
    color: 'from-green-500 to-green-600',
    time: '15 days',
    fee: '₹30'
  },
  {
    title: 'Property Tax',
    description: 'Pay property tax online instantly',
    icon: '🏠',
    link: '/services/property-tax',
    color: 'from-purple-500 to-purple-600',
    time: 'Instant',
    fee: 'Variable'
  },
  {
    title: 'Water Connection',
    description: 'Apply for new water connection',
    icon: '💧',
    link: '/services/water-connection',
    color: 'from-cyan-500 to-cyan-600',
    time: '30 days',
    fee: '₹2,500'
  },
  {
    title: 'Trade License',
    description: 'Get license for business operations',
    icon: '📋',
    link: '/services/trade-license',
    color: 'from-orange-500 to-orange-600',
    time: '30 days',
    fee: '₹1,000+'
  }
]

function QuickServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up" // AOS Animation Added
        >
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <span className="text-primary font-semibold">⚡ Digital Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Quick <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Government Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access essential government services from the comfort of your home. 
            Our digital platform ensures fast, transparent, and efficient service delivery.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up" // AOS Animation Added
              data-aos-delay={index * 100} // Staggered delay for each card
            >
              <Card 
                hover 
                gradient
                className="group overflow-hidden h-full flex flex-col"
              >
                <div className="p-8 relative flex-grow flex flex-col">
                  {/* Background Icon */}
                  <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Service Details */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {service.time}
                    </div>
                    <div className="flex items-center font-medium text-primary">
                      💳 {service.fee}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Link to={service.link} className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                      rightIcon={
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      }
                    >
                      Apply Now
                    </Button>
                  </Link>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div 
          className="text-center bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-12 text-white"
          data-aos="zoom-in" // AOS Animation Added
          data-aos-delay="300" // Delay to ensure it animates after the cards start appearing
        >
          <h3 className="text-3xl font-bold mb-4">Need More Services?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our complete range of government services and applications. 
            Everything you need is just a click away.
          </p>
          <Button 
            size="lg" 
            variant="glass"
            leftIcon="🚀"
            className="min-w-[250px]"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default QuickServices