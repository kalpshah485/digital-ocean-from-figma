import Link from 'antd/es/typography/Link'
import React from 'react'
import Filters from '../Filters/Filters'
import CheckBox from '../Checkbox/Checkbox'
import './LeftSidebar.scss'

const filterPanel1 = [
  <div className='filter_panel'>
    <CheckBox value='Blockchain' />
    <CheckBox value='Cloud Aggregator' />
    <CheckBox value='Cloud Management' />
    <CheckBox value='Devops' />
    <CheckBox value='Digital Marketing' />
    <CheckBox value='E-Commerce' />
    <CheckBox value='Kafka' />
    <CheckBox value='Cloud Aggregator' />
    <CheckBox value='Cloud Management' />
    <CheckBox value='Devops' />
    <CheckBox value='Digital Marketing' />
    <CheckBox value='E-Commerce' />
    <CheckBox value='Kafka' />
  </div>
]

const filterPanel2 = [
  <div className='filter_panel'>
    <CheckBox value='Africa' />
    <CheckBox value='Australia' />
    <CheckBox value='Canada' />
    <CheckBox value='Europe - East' />
    <CheckBox value='Europe - South' />
    <CheckBox value='Europe - North' />
    <CheckBox value='Europe - West' />
    <CheckBox value='Australia' />
    <CheckBox value='Canada' />
    <CheckBox value='Europe - East' />
    <CheckBox value='Europe - South' />
    <CheckBox value='Europe - North' />
    <CheckBox value='Europe - West' />
  </div>
]

const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
      <div className="filter_heading">
        <h5>Filter</h5>
        <Link>Reset</Link>
      </div>
      <Filters filterPanel1={filterPanel1}
        filterPanel2={filterPanel2} />
    </div>
  )
}

export default LeftSidebar