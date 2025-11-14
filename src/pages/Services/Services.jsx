/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/common/SearchBar";
import { mockData } from "../../data/mockData";

function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "certificates", "licenses", "welfare", "tax"];

  const filteredServices = mockData.services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const breadcrumbs = [{ label: "Services", href: null }];

  return (
    <div>
      <PageHeader
        title="Government Services"
        subtitle="Apply for certificates, licenses, and other government services online"
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-end">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search services..."
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Categories</option>
                <option value="certificates">Certificates</option>
                <option value="licenses">Licenses</option>
                <option value="welfare">Welfare Schemes</option>
                <option value="tax">Tax & Revenue</option>
              </select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} hover>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded capitalize">
                      {service.category}
                    </span>
                    {service.isOnline && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        Online
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-2 text-xs text-gray-500 mb-4">
                    <div>⏱️ Processing Time: {service.processingTime}</div>
                    <div>💰 Fee: {service.fee}</div>
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                  >
                    Apply Now
                    <svg
                      className="ml-1 w-4 h-4"
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
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No services found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or category filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
