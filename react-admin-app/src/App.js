import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import StatCard from './components/StatCard';
import UploadsTable from './components/UploadsTable';
import ActionButton from './components/ActionButton';

function App() {
  const [stats, setStats] = useState({
    totalAssets: 0,
    uploadsThisWeek: 0,
    admins: 0
  });

  const [uploads, setUploads] = useState([]);

  // Simulate data loading
  useEffect(() => {
    // Simulate loading stats data
    const timer1 = setTimeout(() => {
      setStats({
        totalAssets: 42,
        uploadsThisWeek: 7,
        admins: 3
      });
    }, 1000);

    // Simulate loading uploads data
    const timer2 = setTimeout(() => {
      setUploads([
        { id: 1, name: 'Company Logo', date: '04/10/2024' },
        { id: 2, name: 'Product Banner', date: '04/08/2024' },
        { id: 3, name: 'Team Photo', date: '04/05/2024' }
      ]);
    }, 1500);

    // Clean up timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleViewAll = () => {
    alert('View all uploads');
  };

  const handleButtonClick = (text) => {
    alert(`You clicked: ${text}`);
  };

  return (
    <div className="app-container">
      <div className="container">
        <Header title="Admin Dashboard" />
        
        <div className="stats-container">
          <StatCard title="Total Assets" value={stats.totalAssets} />
          <StatCard title="Uploads This Week" value={stats.uploadsThisWeek} />
          <StatCard title="Admins" value={stats.admins} />
        </div>
        
        <div className="section-header">
          <div className="section-title">Recent Uploads</div>
          <div className="view-all" onClick={handleViewAll}>View All</div>
        </div>
        
        <UploadsTable uploads={uploads} />
        
        <div className="buttons-container">
          <ActionButton 
            text="Create New Category" 
            onClick={() => handleButtonClick('Create New Category')} 
          />
          <ActionButton 
            text="Manage Categories" 
            onClick={() => handleButtonClick('Manage Categories')} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;