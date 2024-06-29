import React from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="London"
          name="test"
          title="London"
        />
        <InputField
          handleChange={handleChange}
          value="seattle"
          name="test"
          title="Seattle"
        />{" "}
        <InputField
          handleChange={handleChange}
          value="madrid"
          name="test"
          title="Mandrid"
        />{" "}
        <InputField
          handleChange={handleChange}
          value="boston"
          name="test"
          title="Boston"
        />
        <InputField
          handleChange={handleChange}
          value="san francisco"
          name="test"
          title="San Francisco"
        />
      </div>
    </div>
  );
};

export default Location;
