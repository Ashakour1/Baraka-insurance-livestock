import React from "react";

const Dashboard: React.FC = () => {
  return (
    <main className="flex-1 overflow-auto">
      <div className="space-y-20">
        <h1 className="text-xl font-bold text-Accent mb-4">Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            {
              label: "Total Pastoralists",
              value: 120,
              icon: <i className="fas fa-users h-7 w-7 text-green-500"></i>,
            },
            {
              label: "Total Groups",
              value: 45,
              icon: (
                <i className="fas fa-layer-group h-7 w-7 text-green-500"></i>
              ),
            },
            {
              label: "Total Admin Users",
              value: 10,
              icon: (
                <i className="fas fa-user-shield h-7 w-7 text-green-500"></i>
              ),
            },
            {
              label: "Total Livestock",
              value: 300,
              icon: <i className="fas fa-horse h-7 w-7 text-green-500"></i>,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-transparent text-Accent"
            >
              <div className="flex flex-row items-center justify-between pb-2">
                <span className="text-sm font-medium">{item.label}</span>
                {item.icon}
              </div>
              <div className="text-2xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
