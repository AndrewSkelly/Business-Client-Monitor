import React from 'react';
import './Tag.scss';

// Define colors for different tags
const tagColors: { [key: string]: string } = {
  'New Customer': '#22bbdd', // Blue
  'Missed Payment': '#ff5733', // Red
  'Late': '#f1c40f', // Yellow
  'Friendly': '#2ecc71', // Green
  'Special Accommodations': '#8e44ad', // Purple
  'Confrontational': '#e74c3c', // Dark Red
  'Banned': '#95a5a6', // Grey
  'Allergies': '#3498db', // Light Blue
  // Add more colors as needed
};

interface TagProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

const Tag: React.FC<TagProps> = ({ text, backgroundColor, textColor = '#ffffff' }) => {
  // Determine the background color based on the tag text
  const color = backgroundColor || tagColors[text] || '#e0e0e0'; // Default to grey if no color is defined

  return (
    <span className='Tag' style={{ backgroundColor: color, color: textColor }}>
      {text}
    </span>
  );
};

export default Tag;
