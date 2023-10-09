import React from 'react';
import './Avatar.scss';
import { Avatar } from 'antd'


const Avatars = ({ src, shape, icon, size, ...rest }) => {
  return (
    <Avatar src={src} icon={icon} size={size} shape={shape} />
  )
}

export default Avatars