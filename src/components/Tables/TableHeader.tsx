import React from 'react';
import './TableHeader.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TableHeaderProps {
    headers: string[]; // An array of header names
    icons: IconProp[]; // An array of FontAwesome icons
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers, icons }) => {
    return (
        <div className="table-header">
            {headers.map((header, index) => (
                <div key={index} className="header-cell">
                    {/* Check if the icon for this index exists before rendering */}
                    {icons[index] && <FontAwesomeIcon className='nav-icon' icon={icons[index]} />}
                    {header}
                </div>
            ))}
        </div>
    );
};

export default TableHeader;
