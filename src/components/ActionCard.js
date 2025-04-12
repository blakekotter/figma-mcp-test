import React from 'react';

const ActionCard = ({ title }) => {
  return (
    <div className="bg-dashboard-gray rounded-xl border border-black p-6 shadow-dashboard">
      <h3 className="text-3xl text-dashboard-text text-center">{title}</h3>
    </div>
  );
};

export default ActionCard;