import React from "react";
import PageHeader from "../../components/common/PageHeader";
import Card from "../../components/ui/Card";
import { Briefcase, FileEdit, UserCheck } from "lucide-react";

export default function MNREGA() {
  const breadcrumbs = [{ label: "MNREGA", href: null }];

  return (
    <div className="relative min-h-screen bg-white">

      {/* Light patterned background (visible but soft) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.09) 2px, rgba(75, 85, 99, 0.09) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.08) 2px, rgba(107, 114, 128, 0.08) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.07) 2px, rgba(55, 65, 81, 0.07) 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.06) 2px, rgba(31, 41, 55, 0.06) 3px, transparent 3px, transparent 8px)
          `,
        }}
      />

      <div className="relative z-10">
        <PageHeader 
          title={
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              MNREGA
            </span>
          }
          subtitle="Online Application Service Portal"
          breadcrumbs={breadcrumbs}
        />

        <div className="container py-12">
          {/* Section Text */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Gram Panchayat – Online Application Service
            </h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              The facility to submit various MNREGA-related applications online is available for
              all citizens. You can easily apply for job cards or demand work under MNREGA.
            </p>
            <p className="text-gray-600">
              Citizens are requested to make use of these services and submit applications online.
            </p>
          </div>

          {/* Application Boxes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Job Card Application */}
            <Card
              hover
              className="bg-gradient-to-b from-purple-500/10 to-purple-600/10 border-purple-200 shadow-md"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="bg-purple-600 text-white p-4 rounded-full mb-4 shadow">
                  <FileEdit size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-purple-700">
                  जॉब कार्ड मागणी अर्ज
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Apply online for a new MNREGA job card.
                </p>
                <button className="px-5 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                  Apply Now
                </button>
              </div>
            </Card>

            {/* Work Demand Application */}
            <Card
              hover
              className="bg-gradient-to-b from-gray-500/10 to-gray-700/10 border-gray-300 shadow-md"
            >
              <div className="p-8 flex flex-col items-center text-center">
                <div className="bg-gray-700 text-white p-4 rounded-full mb-4 shadow">
                  <UserCheck size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-700">
                  काम मागणी अर्ज
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Demand MNREGA work online using this service.
                </p>
                <button className="px-5 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-800 transition">
                  Apply Now
                </button>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
