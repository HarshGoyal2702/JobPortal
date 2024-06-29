import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date()
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 1000);
    const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 1000);

    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>All Time
      </label>
      <InputField
        handleChange={handleChange}
        value={twentyFourHoursAgoDate}
        name="test"
        title="Last 24 hours"
      />
      <InputField
        handleChange={handleChange}
        value={sevenDaysAgoDate}
        name="test"
        title="Last 7 days"
      />{" "}
      <InputField
        handleChange={handleChange}
        value={ThirtyDaysAgoDate}
        name="test"
        title="Last Month"
      />
      
    </div>
  </div>
  )
}

export default JobPostingData
