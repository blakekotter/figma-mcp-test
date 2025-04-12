import React from 'react';

const RecentUploads = () => {
  // Placeholder data for recent uploads
  const uploads = [
    { id: 1, name: 'Asset', date: '04/05/2024' },
    // Add more placeholders as needed
  ];

  return (
    <div className="bg-card-gray p-6 rounded-xl border border-black shadow-card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-text-dark">Recent Uploads</h2>
        <button className="text-2xl text-text-dark">View All</button>
      </div>
      
      <div className="overflow-hidden rounded-xl border border-black bg-card-gray mb-4">
        <div className="flex p-4 border-b border-black">
          <div className="w-1/2 text-center text-2xl text-text-dark">Asset</div>
          <div className="w-1/2 text-center text-2xl text-text-dark">Upload Date</div>
        </div>
        
        {uploads.map(upload => (
          <div key={upload.id} className="flex p-4">
            <div className="w-1/2 flex justify-center items-center">
              <div className="h-16 w-16 rounded-xl bg-[#B48888] border border-black"></div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <p className="text-2xl text-text-dark text-right">{upload.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUploads;
