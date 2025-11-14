import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import { mockData } from "../../data/mockData";

function ServiceDetail() {
  const { slug } = useParams();
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const service = mockData.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <p>The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: service.name, href: null },
  ];

  return (
    <div>
      <PageHeader
        title={service.name}
        subtitle={service.description}
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
                <p className="text-gray-700 mb-4">{service.fullDescription}</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Processing Time
                    </h4>
                    <p className="text-gray-600">{service.processingTime}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Service Fee
                    </h4>
                    <p className="text-gray-600">{service.fee}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Eligibility */}
            {service.eligibility && (
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Eligibility Criteria
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {service.eligibility.map((criteria, index) => (
                      <li key={index}>{criteria}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            )}

            {/* Required Documents */}
            {service.documents && (
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Required Documents
                  </h2>
                  <div className="grid gap-3">
                    {service.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded"
                      >
                        <div className="text-primary">📄</div>
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-600">
                            {doc.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}

            {/* Process Steps */}
            {service.process && (
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Application Process
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )}
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
                    disabled={!service.isOnline}
                  >
                    {service.isOnline ? (
                      <Link
                        to={
                          service.applyRoute
                        }
                      >
                        <Button className="w-full">Apply Online</Button>
                      </Link>
                    ) : (
                      <Button className="w-full" disabled>
                        Visit Office
                      </Button>
                    )}
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Form
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Check Status
                  </Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium">Helpline</div>
                    <div className="text-gray-600">(02345) 272128</div>
                  </div>
                  <div>
                    <div className="font-medium">Email Support</div>
                    <div className="text-gray-600">
                      support@psshirala.gov.in
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Office Hours</div>
                    <div className="text-gray-600">Mon-Fri: 10 AM - 5 PM</div>
                  </div>
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
        title="Online Application"
        size="lg"
      >
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🚧</div>
          <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
          <p className="text-gray-600 mb-4">
            Online application for this service will be available soon. Please
            visit the office for now.
          </p>
          <Button onClick={() => setShowApplicationModal(false)}>Okay</Button>
        </div>
      </Modal>
    </div>
  );
}

export default ServiceDetail;
