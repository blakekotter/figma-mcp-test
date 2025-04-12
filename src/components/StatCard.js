import React from 'react';

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-dashboard-gray rounded-xl border border-black p-4">
      <h3 className="text-center text-xl text-dashboard-text">{title}</h3>
      <p className="text-5xl font-semibold text-center mt-2">{value}</p>
    </div>
  );
};

export default StatCard;