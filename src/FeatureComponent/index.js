import React from 'react';
import './FeatureComponent.css'

function FeatureComponent({children, feature, featureSelected}) {
    const isVisible = feature === featureSelected;

    return (
    <div
      className={`feature__component ${!isVisible && "feature__component--hidden"}`}
    >
      {children}
    </div>
  );
}

export {FeatureComponent};