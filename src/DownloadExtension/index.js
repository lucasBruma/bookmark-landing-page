import React from 'react';
import './DownloadExtension.css';

function DownloadExtension({children}) {
    return (
        <div className='download-container' id='pricing'>
            {children}
        </div>
    );
}

export {DownloadExtension};