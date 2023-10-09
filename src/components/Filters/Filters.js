import { Collapse } from 'antd'
import React from 'react'
import './Filters.scss'

const Filters = ({ filterPanel1, filterPanel2 }) => {
  const { Panel } = Collapse;
  const onChange = (key) => {
    console.log(key);
  }
  return (
    <div className="filter_content">
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition='end'
      >
        <Panel header={<><span>Partner Profile</span> <span className='badge badge-primary'>3</span></>} key="1">
          {filterPanel1}
        </Panel>
        <Panel header="Services" key="2">
          {filterPanel2}
        </Panel>
        <Panel key="3" header="Regions">

        </Panel>
        {/* <Panel header="Regions" key="3">

        </Panel>
        <Panel header="Business Type" key="4">
          <div>{""}</div>
        </Panel>
        <Panel header="Industries" key="5"></Panel>
        <Panel header="Certifications" key="6"></Panel>
        <Panel header="Budget" key="7"></Panel>
        <Panel header="Partner Size"></Panel> */}
      </Collapse>
    </div>
  )
}

export default Filters