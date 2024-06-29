import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Salary</h4>
      <div>
        <Button onClickHandler={handleClick} value="" title="Hourly"/>
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly"/>
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly"/>
      </div>
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
          value={30}
          name="test"
          title="< 30000K"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          name="test"
          title="< 50000K"
        />{" "}
        <InputField
          handleChange={handleChange}
          value={80}
          name="test"
          title="< 80000K"
        />{" "}
        <InputField
          handleChange={handleChange}
          value={100}
          name="test"
          title="< 100000K"
        />
      </div>
    </div>
  )
}

export default Salary
