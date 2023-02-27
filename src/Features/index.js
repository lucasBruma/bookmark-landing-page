import React from 'react';
import './Features.css';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';
import { FeatureButton } from '../FeatureButton';
import { FeatureComponent } from '../FeatureComponent';
import { IllustrationWithBg } from '../IllustrationWithBg';
import { Button } from '../Button';


function Features({ featuresBtn }) {
    const [featureSelected, setFeatureSelected] = React.useState('bookmarking');
    return (
        <div className='features' id='features'>
          <div className='features__content'>
            <Title size="medium">Features</Title>
            <Paragraph>
                Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.
            </Paragraph>
        </div>
            <div className='features__buttons'>
            <FeatureButton bg="transparent" type="feature" setFeatureSelected={setFeatureSelected} feature="bookmarking" isSelected={featureSelected === 'bookmarking'}>Simple Bookmarking</FeatureButton>
            <FeatureButton bg="transparent" type="feature" setFeatureSelected={setFeatureSelected} feature="searching" isSelected={featureSelected === 'searching'}>Speedy Searching</FeatureButton> 
            <FeatureButton bg="transparent" type="feature" setFeatureSelected={setFeatureSelected} feature="sharing" isSelected={featureSelected === 'sharing'}>Easy Sharing</FeatureButton> 
            </div>
            <div className='features__components'>
            <FeatureComponent feature="bookmarking" featureSelected={featureSelected}>
                <IllustrationWithBg img='illustration-features-tab-1.svg' direction='left'/>
                <div className='feature__text'>
                    <Title size="medium">Bookmark in one click</Title>
                    <Paragraph>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.
                    </Paragraph>
                    {featuresBtn && <Button type='box' bg='blue'>More info</Button>}
                </div>
            </FeatureComponent>
            <FeatureComponent feature="searching" featureSelected={featureSelected}>
                <IllustrationWithBg img='illustration-features-tab-2.svg' direction='left' type='composed'/>
                <div className='feature__text'>
                <Title size="medium">Intelligent search</Title>
                <Paragraph>Our powerful search feature will help you find saved sites in no time at all. 
                    No need to trawl through all of your bookmarks.
                </Paragraph>
                {featuresBtn && <Button type='box' bg='blue'>More info</Button>}
                </div>
            </FeatureComponent>
            <FeatureComponent feature="sharing" featureSelected={featureSelected}>
                <IllustrationWithBg img='illustration-features-tab-3.svg' direction='left' type='composed'/>
                <div className='feature__text'>
                <Title size="medium">Share your bookmarks</Title>
                <Paragraph>Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of a button.
                </Paragraph>
                {featuresBtn && <Button type='box' bg='blue'>More info</Button>}
                </div>
            </FeatureComponent>
          </div>
        </div>
    );
}

export {Features};