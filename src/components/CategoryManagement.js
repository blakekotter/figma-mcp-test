import React from 'react';

const CategoryManagement = () => {
  return (
    <div className="bg-card-gray p-6 rounded-xl border border-black flex flex-col gap-4">
      <button className="bg-card-gray p-4 rounded-xl border border-black text-3xl text-text-dark">
        Create New Category
      </button>
      <button className="bg-card-gray p-4 rounded-xl border border-black text-3xl text-text-dark">
        Manage Categories
      </button>
    </div>
  );
};

export default CategoryManagement;
