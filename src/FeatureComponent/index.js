import React from 'react';

function FeatureComponent({children, feature, featureSelected}) {
    return ( 
            feature == featureSelected &&
            <>
                {children}
            </>     
    );
}

export {FeatureComponent};