import React from 'react';

const RecentUploads = () => {
  // Sample data for the uploads
  const uploads = [
    { id: 1, asset: 'Sample Asset 1', uploadDate: '04/05/2024' },
    // Add more items as needed
  ];

  return (
    <div className="bg-dashboard-gray rounded-xl border border-black p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-dashboard-text">Recent Uploads</h2>
        <span className="text-2xl text-dashboard-text">View All</span>
      </div>
      
      <div className="bg-dashboard-gray rounded-xl border border-black mb-4">
        <div className="grid grid-cols-2 p-4">
          <h3 className="text-2xl text-dashboard-text text-center">Asset</h3>
          <h3 className="text-2xl text-dashboard-text text-center">Upload Date</h3>
        </div>
      </div>

      {uploads.map((upload) => (
        <div key={upload.id} className="bg-dashboard-gray rounded-xl border border-black mb-4">
          <div className="grid grid-cols-2 p-4">
            <div className="text-xl text-dashboard-text text-center">{upload.asset}</div>
            <div className="text-xl text-dashboard-text text-right">{upload.uploadDate}</div>
          </div>
        </div>
      ))}

      {/* Image placeholder */}
      <div className="bg-[#B48888] h-40 rounded-xl border border-black mt-4"></div>
    </div>
  );
};

export default RecentUploads;