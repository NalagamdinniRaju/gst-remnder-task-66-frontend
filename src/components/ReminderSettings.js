import React, { useState } from 'react';

const ReminderSettings = () => {
  const [reminderDays, setReminderDays] = useState(7);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to the backend to update settings
    console.log('Reminder days set to:', reminderDays);
  };

  return (
    <div className="reminder-settings">
      <h2>Reminder Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Send reminders
          <input
            type="number"
            value={reminderDays}
            onChange={(e) => setReminderDays(e.target.value)}
            min="1"
            max="30"
          />
          days before due date
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default ReminderSettings;