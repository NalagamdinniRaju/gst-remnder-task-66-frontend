import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InvoiceList from './InvoiceList';
import ReminderSettings from './ReminderSettings';
import AdminAlert from './AdminAlert';

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);
  const [totalGSTDue, setTotalGSTDue] = useState(0);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get('https://gst-reminder-task-66.onrender.com/api/invoices');
      setInvoices(response.data);
      calculateTotalGSTDue(response.data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  const calculateTotalGSTDue = (invoices) => {
    const total = invoices.reduce((sum, invoice) => {
      return invoice.status === 'pending' ? sum + invoice.gstAmount : sum;
    }, 0);
    setTotalGSTDue(total);
  };

  return (
    <div className="dashboard">
      <h1>GST Reminder Dashboard</h1>
      <InvoiceList invoices={invoices} />
      <ReminderSettings />
      <AdminAlert totalGSTDue={totalGSTDue} />
    </div>
  );
};

export default Dashboard;