import React from 'react';
import StatCard from './StatCard';
import RecentUploads from './RecentUploads';
import ActionCard from './ActionCard';

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-semibold text-dashboard-text mb-8">
        Admin Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Assets" value="0" />
        <StatCard title="Uploads This Week" value="0" />
        <StatCard title="Admins" value="0" />
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Uploads Section */}
        <div className="lg:col-span-2">
          <RecentUploads />
        </div>
        
        {/* Action Cards Section */}
        <div className="space-y-6">
          <ActionCard title="Create New Category" />
          <ActionCard title="Manage Categories" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;