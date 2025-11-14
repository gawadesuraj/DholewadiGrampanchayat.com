import { useState } from 'react'
import PageHeader from '../../components/common/PageHeader'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Modal from '../../components/ui/Modal'

function RTI() {
  const [showApplicationModal, setShowApplicationModal] = useState(false)
  
  const breadcrumbs = [
    { label: 'RTI', href: null }
  ]

  const rtiOfficers = [
    {
      name: 'श्री. प्रकाश लालासाहेब पोळ',
      designation: 'Public Information Officer (PIO)',
      department: 'Block Development Office',
      email: 'pio.shirala@maharashtra.gov.in',
      phone: '+91-2345-272128'
    },
    {
      name: 'श्री. अजिंक्य महादेव कुंभार',
      designation: 'Assistant Public Information Officer (APIO)',
      department: 'Block Development Office',
      email: 'apio.shirala@maharashtra.gov.in',
      phone: '+91-2345-272129'
    }
  ]

  const rtiProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Submit RTI application with prescribed fee to PIO'
    },
    {
      step: 2,
      title: 'Acknowledgment',
      description: 'Receive acknowledgment with application number'
    },
    {
      step: 3,
      title: 'Processing',
      description: 'Application processed within 30 days'
    },
    {
      step: 4,
      title: 'Response',
      description: 'Receive information or reasons for rejection'
    }
  ]

  return (
    <div>
      <PageHeader 
        title="Right to Information (RTI)" 
        subtitle="लोकसेवा हक्क अधिनियम 2015"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* About RTI */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">About RTI Act</h2>
                <div className="prose">
                  <p>
                    The Right to Information Act, 2005 empowers citizens to seek information from 
                    public authorities. Every citizen has the right to request information from 
                    public offices and expect a reply within 30 days.
                  </p>
                  <p>
                    The RTI Act promotes transparency and accountability in the working of every 
                    public authority. It is a tool to fight corruption and bring good governance.
                  </p>
                </div>
              </div>
            </Card>

            {/* Application Process */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Application Process</h2>
                <div className="space-y-4">
                  {rtiProcess.map((process) => (
                    <div key={process.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {process.step}
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{process.title}</h4>
                        <p className="text-gray-600 text-sm">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Fee Structure */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Fee Structure</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Service</th>
                        <th className="text-right py-2">Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-2">RTI Application</td>
                        <td className="text-right py-2">₹10</td>
                      </tr>
                      <tr>
                        <td className="py-2">Additional Pages (per page)</td>
                        <td className="text-right py-2">₹2</td>
                      </tr>
                      <tr>
                        <td className="py-2">Inspection of Documents (per hour)</td>
                        <td className="text-right py-2">₹5</td>
                      </tr>
                      <tr>
                        <td className="py-2">CD/DVD Copy</td>
                        <td className="text-right py-2">₹50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>

            {/* Guidelines */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Important Guidelines</h2>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  <li>Application should be clear and specific about information sought</li>
                  <li>Provide complete postal address for communication</li>
                  <li>Attach proof of fee payment with application</li>
                  <li>Information will be provided in 30 days (48 hours for life and liberty matters)</li>
                  <li>If not satisfied with response, can file first appeal within 30 days</li>
                  <li>BPL applicants are exempt from paying fees</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full"
                    onClick={() => setShowApplicationModal(true)}
                  >
                    Apply for RTI
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Form
                  </Button>
                  <Button variant="outline" className="w-full">
                    Check Application Status
                  </Button>
                  <Button variant="outline" className="w-full">
                    File Appeal
                  </Button>
                </div>
              </div>
            </Card>

            {/* RTI Officers */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">RTI Officers</h3>
                <div className="space-y-4">
                  {rtiOfficers.map((officer, index) => (
                    <div key={index} className="border-b last:border-b-0 pb-3 last:pb-0">
                      <div className="font-medium text-sm">{officer.name}</div>
                      <div className="text-xs text-gray-600 mb-1">{officer.designation}</div>
                      <div className="text-xs text-gray-500 mb-2">{officer.department}</div>
                      <div className="flex flex-col gap-1">
                        <a href={`mailto:${officer.email}`} className="text-xs text-primary hover:underline">
                          {officer.email}
                        </a>
                        <a href={`tel:${officer.phone}`} className="text-xs text-primary hover:underline">
                          {officer.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Helpful Links */}
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Helpful Resources</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-primary hover:underline">RTI Act PDF</a>
                  <a href="#" className="block text-sm text-primary hover:underline">Application Format</a>
                  <a href="#" className="block text-sm text-primary hover:underline">Appeal Format</a>
                  <a href="#" className="block text-sm text-primary hover:underline">Fee Payment Guide</a>
                  <a href="https://rtionline.maharashtra.gov.in" className="block text-sm text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Maharashtra RTI Portal
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <Modal 
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        title="RTI Application Form"
        size="lg"
      >
        <form className="space-y-4">
          <Input 
            label="Full Name"
            placeholder="Enter your full name"
            required
          />
          <Input 
            label="Address"
            placeholder="Complete postal address"
            required
          />
          <Input 
            label="Phone Number"
            type="tel"
            placeholder="Your contact number"
          />
          <Input 
            label="Email"
            type="email"
            placeholder="Your email address"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Information Required *
            </label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              rows="4"
              placeholder="Clearly describe the information you are seeking..."
              required
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Submit Application
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setShowApplicationModal(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default RTI
