import React from 'react'

const CustomLine = ({className="", width=1, height=20, color="#90A1BD52"}: {className?: any, width?: number, height?: number, color?: string}) => {
  return (
    <div className={className} style={{border: `${width}px solid ${color}`, height: `${height}px`}}/>
  )
}

export default CustomLine