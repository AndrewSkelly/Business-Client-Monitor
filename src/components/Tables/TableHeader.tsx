import React from 'react';
import './TableHeader.scss';

interface TableHeaderProps {
    headers: string[]; // An array of header names
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
    return (
        <div className="table-header">
            {headers.map((header, index) => (
                <div key={index} className="header-cell">
                    {header}
                </div>
            ))}
        </div>
    );
};

export default TableHeader;

