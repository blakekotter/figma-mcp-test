import React from 'react';

const StatsCard = ({ title, count }) => {
  return (
    <div className="bg-card-gray p-6 rounded-xl border border-black">
      <p className="text-center text-xl text-text-dark">{title}</p>
      <p className="text-center text-5xl font-semibold mt-2 text-black">{count}</p>
    </div>
  );
};

export default StatsCard;
