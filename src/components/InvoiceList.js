import React from 'react';

const InvoiceList = ({ invoices }) => {
  return (
    <div className="invoice-list">
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Recruiter</th>
            <th>Amount</th>
            <th>GST Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice._id}>
              <td>{invoice.recruiter.name}</td>
              <td>${invoice.amount}</td>
              <td>${invoice.gstAmount}</td>
              <td>{new Date(invoice.dueDate).toLocaleDateString()}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;