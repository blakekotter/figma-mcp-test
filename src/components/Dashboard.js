import React from 'react';
import StatsCard from './StatsCard';
import RecentUploads from './RecentUploads';
import CategoryManagement from './CategoryManagement';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold mb-8 text-text-dark">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Assets" count={0} />
        <StatsCard title="Uploads This Week" count={0} />
        <StatsCard title="Admins" count={0} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentUploads />
        <CategoryManagement />
      </div>
    </div>
  );
};

export default Dashboard;
