import React from 'react'
import { Tag } from 'antd'
import './Tags.scss'

const Tags = ({ onClose, closable, value, className, ...rest }) => {
  return (
    <Tag closable={closable} onClose={onClose} className={`tag ${className}`}>{value}</Tag>
  )
}

export default Tags