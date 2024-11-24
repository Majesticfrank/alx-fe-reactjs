// src/components/Profile/ProfileSettings.jsx

import React, { useState } from 'react';

const ProfileSettings = () => {
  // State for managing form inputs
  const [settings, setSettings] = useState({
    emailNotifications: true,
    privacy: 'Public',
    theme: 'Light',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the save logic here
    console.log('Settings Saved:', settings);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Notifications Toggle */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleChange}
            />
            Receive Email Notifications
          </label>
        </div>

        {/* Privacy Settings Dropdown */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            Privacy:
            <select name="privacy" value={settings.privacy} onChange={handleChange} style={{ marginLeft: '10px' }}>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
              <option value="Friends Only">Friends Only</option>
            </select>
          </label>
        </div>

        {/* Theme Selection Dropdown */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            Theme:
            <select name="theme" value={settings.theme} onChange={handleChange} style={{ marginLeft: '10px' }}>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="System">System Default</option>
            </select>
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
