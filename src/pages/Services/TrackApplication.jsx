import React, { useState } from "react";
import { Search, Loader2, FileText, Download } from "lucide-react";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import { supabase } from "../../services/supabaseClient";

function TrackApplication() {
  const [userId, setUserId] = useState("");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const breadcrumbs = [
    { label: "Services", href: "/services" },
    { label: "Track Application", href: null },
  ];

  const fetchApplications = async () => {
    setError("");
    setApplications([]);
    if (!userId.trim()) {
      setError("Please enter your User ID.");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("tax_payments")
      .select("*")
      .eq("user_id", userId.trim())
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      console.error("Fetch error:", error);
      setError("Failed to fetch applications.");
    } else if (!data || data.length === 0) {
      setError("No applications found for this User ID.");
    } else {
      setApplications(data);
    }
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "approved":
        return {
          color: "text-green-700",
          bg: "bg-green-100",
          progress: "bg-green-500 w-full",
          label: "Approved ✅",
        };
      case "rejected":
        return {
          color: "text-red-700",
          bg: "bg-red-100",
          progress: "bg-red-500 w-full",
          label: "Rejected ❌",
        };
      case "pending":
        return {
          color: "text-yellow-700",
          bg: "bg-yellow-100",
          progress: "bg-yellow-400 w-1/2",
          label: "Pending ⏳",
        };
      case "needs-info":
        return {
          color: "text-blue-700",
          bg: "bg-blue-100",
          progress: "bg-blue-500 w-2/3",
          label: "Needs Info 📝",
        };
      default:
        return {
          color: "text-gray-700",
          bg: "bg-gray-100",
          progress: "bg-gray-400 w-1/4",
          label: "Submitted",
        };
    }
  };

  return (
    <div>
      <PageHeader
        title="Track Your Application"
        subtitle="Monitor your tax payment progress and download official receipt after approval"
        breadcrumbs={breadcrumbs}
      />

      <div className="container py-12">
        <Card>
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              🔍 Application Status Tracker
            </h2>

            {/* Search Input */}
            <div className="flex flex-col md:flex-row gap-3 mb-6 items-center justify-center">
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Enter your User ID (e.g. U1001)"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-5 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-gray-800 placeholder-gray-400"
                />
                <Search
                  size={18}
                  className="absolute right-4 top-3.5 text-gray-400"
                />
              </div>
              <button
                onClick={fetchApplications}
                disabled={loading}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={18} /> Checking...
                  </span>
                ) : (
                  "Check Status"
                )}
              </button>
            </div>

            {/* Error / Loading */}
            {error && (
              <p className="text-red-600 text-center font-medium">{error}</p>
            )}
            {loading && (
              <p className="text-gray-500 text-center">Fetching details...</p>
            )}

            {/* Results */}
            {applications.length > 0 && (
              <div className="space-y-6 mt-8">
                {applications.map((app) => {
                  const statusStyle = getStatusStyles(app.status);
                  return (
                    <div
                      key={app.id}
                      className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">
                            Application #{app.id}
                          </h3>
                          <span
                            className={`px-3 py-1.5 rounded-full text-sm font-semibold ${statusStyle.bg} ${statusStyle.color}`}
                          >
                            {statusStyle.label}
                          </span>
                        </div>

                        <div className="space-y-2 text-gray-700 text-sm">
                          <p>
                            <strong>Name:</strong> {app.name || "—"}
                          </p>
                          <p>
                            <strong>Mobile:</strong> {app.mobile || "—"}
                          </p>
                          <p>
                            <strong>Submitted on:</strong>{" "}
                            {new Date(app.created_at).toLocaleString()}
                          </p>

                          {app.remarks && (
                            <p className="text-gray-600 mt-2 italic">
                              <strong>Remarks:</strong> {app.remarks}
                            </p>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-5">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-2 transition-all duration-500 ${statusStyle.progress}`}
                            ></div>
                          </div>
                          <p
                            className={`mt-2 text-sm font-medium ${statusStyle.color}`}
                          >
                            {statusStyle.label}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">
                          {app.screenshot_url && (
                            <a
                              href={app.screenshot_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-primary hover:text-primary-dark underline"
                            >
                              <FileText size={16} />
                              View Uploaded Screenshot
                            </a>
                          )}

                          {app.receipt_url && app.status === "approved" && (
                            <a
                              href={app.receipt_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-green-600 hover:text-green-700 underline"
                            >
                              <Download size={16} />
                              Download Receipt
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TrackApplication;
