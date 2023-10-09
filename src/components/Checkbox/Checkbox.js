import { Checkbox } from 'antd'
import React from 'react'

const onChange = (e) => {
  console.log(`checked = ${e.target.clicked}`);
}

const CheckBox = ({ value, ...rest }) => {
  return (
    <div>
      <Checkbox onChange={onChange}>{value}</Checkbox>
    </div>
  )
}

export default CheckBox