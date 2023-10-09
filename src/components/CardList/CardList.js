import React from 'react'
import { Col, Row, Space } from 'antd'
import Avatars from '../Avatar/Avatar'
import { images } from '../../config/images'
import Tags from '../Tags/Tags'
import './CardList.scss'

const CardList = () => {
  return (
    <div className="listing_card">
      <Row gutter={0} className='listing_card_wrap'>
        <Col span={8} className='listing_card_title'>
          <Avatars src={images.avatar_img} />
          <h4>Mastodon</h4>
        </Col>
        <Col span={16} className='listing_card_content'>
          <p>Mastodon is free and open-source software that provides instant global communication.</p>
          <Space size={[0, 4]}>
            <Tags value="Analytics" className="tag-grey small" />
            <Tags value="Big data" className="tag-grey small" />
            <Tags value="Financial" className="tag-grey small" />
            <Tags value="Developer" className="tag-grey small" />
            <Tags value="Digital Marketing" className="tag-grey small" />
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export default CardList