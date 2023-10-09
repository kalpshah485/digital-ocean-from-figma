import React from 'react';
import Avatars from '../Avatar/Avatar';
import { images } from '../../config/images';
import Tags from '../Tags/Tags';
import Link from 'antd/es/typography/Link';
import './Card.scss';

const Card = () => {
  return (
    <div className='card'>
      <div className="card_img">
        <img src={images.card_thumb} alt="Card Thumbnail" />
        <Tags value="Staff picked" className="tag-blue small" />
      </div>
      <div className='card_img_caption'>
        <Avatars src={images.avatar_img} size={56} />
        <Tags value="PaaS vendor" className="tag-grey small" />
      </div>
      <div className="card_content">
        <h3>Mastodon</h3>
        <p>Mastodon is free and open-source software that provides instant global communication.</p>
      </div>
      <div className="card_bottom">
        <h4>specialist</h4>
        <p>Analytics, Big data, Financial, Developer, Digital Marketing, and 3 more</p>
        <div className="link">
          <Link href='#'>View More</Link>
        </div>
      </div>
    </div>
  )
}

export default Card