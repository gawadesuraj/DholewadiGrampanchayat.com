import { useParams } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import { mockData } from '../../data/mockData'

function DepartmentDetail() {
  const { slug } = useParams()
  const department = mockData.departments.find(dept => dept.slug === slug)

  if (!department) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Department not found</h1>
          <p>The requested department could not be found.</p>
        </div>
      </div>
    )
  }

  const breadcrumbs = [
    { label: 'Departments', href: '/departments' },
    { label: department.name, href: null }
  ]

  return (
    <div>
      <PageHeader 
        title={department.name}
        subtitle={department.description}
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">About This Department</h2>
                <p className="text-gray-700 mb-4">{department.fullDescription}</p>
                
                {department.responsibilities && (
                  <>
                    <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {department.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </Card>

            {department.services && (
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
                  <div className="grid gap-3">
                    {department.services.map((service, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
          </div>

          <div>
            <Card className="mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {department.head && (
                    <div>
                      <div className="text-sm font-medium text-gray-500">Department Head</div>
                      <div>{department.head.name}</div>
                      <div className="text-sm text-gray-600">{department.head.designation}</div>
                    </div>
                  )}
                  
                  {department.email && (
                    <div>
                      <div className="text-sm font-medium text-gray-500">Email</div>
                      <a href={`mailto:${department.email}`} className="text-primary hover:underline">
                        {department.email}
                      </a>
                    </div>
                  )}
                  
                  {department.phone && (
                    <div>
                      <div className="text-sm font-medium text-gray-500">Phone</div>
                      <a href={`tel:${department.phone}`} className="text-primary hover:underline">
                        {department.phone}
                      </a>
                    </div>
                  )}
                  
                  {department.office && (
                    <div>
                      <div className="text-sm font-medium text-gray-500">Office</div>
                      <div className="text-sm">{department.office}</div>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentDetail
