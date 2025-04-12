import React from 'react';
import './UploadsTable.css';

function UploadsTable({ uploads }) {
  return (
    <div className="table-container">
      <table className="uploads-table">
        <thead>
          <tr>
            <th className="image-cell"></th>
            <th>Asset</th>
            <th>Upload Date</th>
          </tr>
        </thead>
        <tbody>
          {uploads.length === 0 ? (
            <tr>
              <td className="image-cell">
                <div className="image-placeholder"></div>
              </td>
              <td>Sample Asset</td>
              <td>04/05/2024</td>
            </tr>
          ) : (
            uploads.map(upload => (
              <tr key={upload.id}>
                <td className="image-cell">
                  <div className="image-placeholder"></div>
                </td>
                <td>{upload.name}</td>
                <td>{upload.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UploadsTable;