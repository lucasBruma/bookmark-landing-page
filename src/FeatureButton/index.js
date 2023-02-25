import React from 'react';
import '../Button/Button.css'

function FeatureButton({children, type, setFeatureSelected, feature, bg, isSelected}) {

    const selectFeature = (feature) => {
        setFeatureSelected(feature);
        console.log(`la feature seleccionada fue: ${feature}`)
    }

    let className =`button button--feature button--${bg}`;
    if (isSelected) {
        className += ` button--feature--selected`;
    }

    if(type === 'feature'){
        className += ` button--${type}--${feature}`;
    }

    return (
        <button className={className} onClick={ ()=>{selectFeature(feature)}}>
            {children}
        </button>
    );
}

export {FeatureButton};