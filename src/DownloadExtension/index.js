import React from 'react';
import './DownloadExtension.css';

function DownloadExtension({children}) {
    return (
        <div className='download-container'>
            {children}
        </div>
    );
}

export {DownloadExtension};