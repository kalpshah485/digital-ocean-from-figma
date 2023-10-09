import React from 'react'
import LeftSidebar from '../components/LeftSidebar/LeftSidebar'
import Banner from '../components/Banner/Banner'
import { Col, Row, Space } from 'antd'
import Tags from '../components/Tags/Tags'
import ListView from '../components/ListView/ListView'
import CardView from '../components/CardView/CardView'

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container py-48">
        <Row gutter={62}>
          <Col span={6}>
            <LeftSidebar />
          </Col>
          <Col span={18}>
            <Space size={[0, 4]} className="filter-tags">
              <Tags value="Blockchain" closable={true} className="tag-grey" />
              <Tags value="Cloud Aggregator" closable={true} className="tag-grey" />
              <Tags value="Cloud Management" closable={true} className="tag-grey" />
            </Space>
            <CardView />
            <ListView />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home