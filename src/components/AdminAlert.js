import React from 'react';

const AdminAlert = ({ totalGSTDue }) => {
  return (
    <div className="admin-alert">
      <h2>Admin Alert</h2>
      <p>Total GST Amount Due: ${totalGSTDue.toFixed(2)}</p>
      <button>Send Alert to Admin</button>
    </div>
  );
};

export default AdminAlert;