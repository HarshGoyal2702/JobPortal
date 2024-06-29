import React from 'react'
import InputField from '../components/InputField';

const WorkExperience = ({ handleChange }) => {
    return (
      <div>
        <h4 className="text-lg font-medium mb-2">Work Experience</h4>
        <div>
          <label className="sidebar-label-container">
            <input
              type="radio"
              name="test"
              id="test"
              value=""
              onChange={handleChange}
            />
            <span className="checkmark"></span>Any Experience
          </label>
          <InputField
            handleChange={handleChange}
            value="internship"
            name="test"
            title="Internship"
          />
          <InputField
            handleChange={handleChange}
            value="work remotely"
            name="test"
            title="Work remotely"
          />
        </div>
      </div>
    );
  };

export default WorkExperience
