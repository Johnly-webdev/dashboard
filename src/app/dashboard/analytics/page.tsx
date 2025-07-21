import React from "react";

const Page = () => {
  type Metric = {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
  };

  const metrics: Metric[] = [
    { title: "Total Sales", value: "$120,000", change: "+12%", isPositive: true },
    { title: "Active Users", value: "1,200", change: "-8%", isPositive: false },
    { title: "Website Visits", value: "8,500", change: "+5%", isPositive: true },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true },
    { title: "Customer Retention", value: "76%", change: "-2%", isPositive: false },
    { title: "Revenue Growth", value: "$15,000", change: "+9%", isPositive: true },
    { title: "App Downloads", value: "2,300", change: "+22%", isPositive: true },
    { title: "Conversion Rate", value: "4.5%", change: "+1.2%", isPositive: true },
    { title: "Churn Rate", value: "3.1%", change: "-0.4%", isPositive: false },
    { title: "Support Tickets", value: "98", change: "+10%", isPositive: false },
    { title: "Avg. Session Time", value: "3m 42s", change: "+6%", isPositive: true },
    { title: "Newsletter Subscribers", value: "5,300", change: "+7%", isPositive: true },
    { title: "Bounce Rate", value: "39%", change: "-1.5%", isPositive: true },
    { title: "Referral Traffic", value: "1,050", change: "+13%", isPositive: true },
    { title: "Abandoned Carts", value: "187", change: "-5%", isPositive: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-8 mt-8" >
            <h1 className="text-3xl font-bold text-gray-800 mb-8">📊 Analytics Dashboard</h1>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border-l-4 shadow-sm rounded-lg p-5 transition-transform hover:scale-[1.02]
              flex flex-col gap-1
              border-green-400 dark:border-green-500"
              style={{
                borderColor: metric.isPositive ? "#4ade80" : "#f87171",
              }}
            >
              <h3 className="text-lg font-semibold text-gray-700">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p
                className={`text-sm font-medium ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        {/* Chart Sections */}
        <div className="space-y-12">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📈 Website Traffic</h2>
            <div className="bg-white rounded-lg shadow-md h-72 flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">👥 User Sign-Ups</h2>
            <div className="bg-white rounded-lg shadow-md h-72 flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">🕒 Recent Activity</h2>
          <ul className="space-y-4">
            {[
              {
                title: "User Registration",
                detail: "New user signed up on 2025-02-16",
                stat: "+10 Users",
              },
              {
                title: "Sales Increase",
                detail: "Sales grew by 12% on 2025-02-14",
                stat: "+$15,000",
              },
              {
                title: "Website Traffic Surge",
                detail: "Traffic increased by 8% on 2025-02-13",
                stat: "+200 Visits",
              },
            ].map((activity, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.detail}</p>
                </div>
                <div className="text-sm text-gray-600 font-medium">{activity.stat}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
