// Frontend/src/pages/grievances/Grievance.jsx

import React, { useState, useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { toast } from "react-toastify";

export default function Grievance() {
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState(null);
  const [grievances, setGrievances] = useState([]);
  const [form, setForm] = useState({
    subject: "",
    description: "",
    grievance_type: "",
  });
  const [loading, setLoading] = useState(false);

  const grievanceTypes = [
    "Water Supply Issues",
    "Road and Infrastructure",
    "Electricity Problems",
    "Healthcare Services",
    "Education Related",
    "Sanitation Issues",
    "Land Records",
    "Certificate Issues",
    "Tax and Revenue",
    "Others",
  ];

  // 🔍 Validate User by mobile number
  const validateUser = async () => {
    if (!mobile || mobile.trim().length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    const { data: userData, error } = await supabase
      .from("users")
      .select("*")
      .eq("mobile", mobile.trim())
      .single();

    if (error || !userData) {
      toast.error("No registered user found with this mobile number.");
      setUser(null);
      setGrievances([]);
      setLoading(false);
      return;
    }

    setUser(userData);
    toast.success(`Welcome, ${userData.name || "user"}!`);
    fetchUserGrievances(userData.mobile);
    setLoading(false);
  };

  // 🧾 Fetch user’s past grievances
  const fetchUserGrievances = async (phone) => {
    const { data, error } = await supabase
      .from("grievances")
      .select("*")
      .eq("phone", phone)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      toast.error("Error loading your previous grievances.");
      setGrievances([]);
    } else {
      setGrievances(data || []);
    }
  };

  // 🧭 Submit new grievance
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please validate your mobile number first.");
      return;
    }

    const payload = {
      user_id: user.id,
      name: user.name,
      phone: user.mobile,
      email: user.email || null,
      address: user.address || null,
      grievance_type: form.grievance_type,
      subject: form.subject,
      description: form.description,
      status: "new",
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("grievances")
      .insert([payload])
      .select()
      .single();

    if (error) {
      toast.error("Failed to submit grievance.");
      console.error(error);
    } else {
      toast.success(`Grievance submitted successfully! ID: ${data.id}`);
      setForm({ subject: "", description: "", grievance_type: "" });
      setGrievances((prev) => [data, ...prev]);
    }
  };

  // 🔁 Real-time updates
  useEffect(() => {
    if (!user) return;

    const channel = supabase
      .channel("realtime-grievances")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "grievances" },
        (payload) => {
          if (payload.new && payload.new.phone === user.mobile) {
            setGrievances((prev) => {
              const existing = prev.find((g) => g.id === payload.new.id);
              if (existing) {
                return prev.map((g) =>
                  g.id === payload.new.id ? payload.new : g
                );
              } else {
                return [payload.new, ...prev];
              }
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  return (
    <div>
      <PageHeader
        title="Citizen Grievance Portal"
        subtitle="Registered users can submit grievances"
      />

      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Grievance Registration
              </h2>

              {!user ? (
                <div className="space-y-4">
                  <Input
                    label="Enter Registered Mobile Number"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="10-digit mobile number"
                    maxLength="10"
                  />
                  <Button
                    onClick={validateUser}
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Checking..." : "Validate User"}
                  </Button>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Only registered users can access the grievance portal.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                    <p className="font-semibold text-green-700">
                      ✅ Verified User: {user.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      Phone: {user.mobile} | Address:{" "}
                      {user.address || "Not specified"}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Grievance Type *
                      </label>
                      <select
                        value={form.grievance_type}
                        onChange={(e) =>
                          setForm({ ...form, grievance_type: e.target.value })
                        }
                        required
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select Type</option>
                        {grievanceTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Input
                      label="Subject"
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      required
                    />

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Description *
                      </label>
                      <textarea
                        value={form.description}
                        onChange={(e) =>
                          setForm({ ...form, description: e.target.value })
                        }
                        rows="5"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary"
                        placeholder="Describe your grievance..."
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Submit Grievance
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Right Section: Past Grievances */}
        <div>
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Your Past Grievances
              </h3>
              {!user ? (
                <p className="text-gray-500 text-sm">
                  Validate your mobile number to view past grievances.
                </p>
              ) : grievances.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  No previous grievances found.
                </p>
              ) : (
                <div className="space-y-4">
                  {grievances.map((g) => (
                    <div
                      key={g.id}
                      className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-semibold text-sm">
                          #{g.id} — {g.subject}
                        </p>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            g.status === "resolved"
                              ? "bg-green-100 text-green-700"
                              : g.status === "in_progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : g.status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {g.status ? g.status.replace("_", " ") : "new"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {new Date(g.created_at).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {g.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}