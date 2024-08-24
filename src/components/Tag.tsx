import React from 'react'
import './Tag.scss'

interface TagProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
};

const Tag: React.FC<TagProps> = ({ text, backgroundColor = '#e0e0e0', textColor = '#ffffff' }) => {
    return (
      <span className='Tag' style={{
        backgroundColor,
        color: textColor
      }}>{text}</span>
    );
  };

  export default Tag