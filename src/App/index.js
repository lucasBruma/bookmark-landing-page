import React from 'react';
import './App.css';
import '../Button/Button.css';
import {Header} from "../Header";
import {IllustrationWithBg} from "../IllustrationWithBg";
import {Intro} from "../Intro"
import {Title} from "../Title"
import { Paragraph } from '../Paragraph';
import { Button } from '../Button';
import { Features } from '../Features';
import { FeatureButton } from '../FeatureButton';
import { FeatureComponent } from '../FeatureComponent';
import { DownloadExtension } from '../DownloadExtension';
import { Card } from '../Card';
import { Faq } from '../Faq';
import { Form } from '../Form';
import {Footer} from '../Footer';
import { Icon } from '../Icon';

const cards = [{browser:'chrome',version:'62'},{browser:'firefox',version:'55'},{browser:'opera',version:'46'}]

function App() {
  const [featureSelected, setFeatureSelected] = React.useState('bookmarking');
  const [faqs, setFaqs] = React.useState([
    {
      question: 'What is Bookmark?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
      open: false
    },
    {
      question: 'How can a I request a new browser?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
      open: false
    },
    {
      question: 'Is there a mobile app?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
      open: false
    },
    {
      question: 'What about other Chromium browsers?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
      justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
      open: false
    }
  ]);

  return (
    <>
      <Header/>
      <Intro>
        <IllustrationWithBg img='illustration-hero.svg' direction='right' type='intro'/>
        <div className='intro__content'>
            <Title size='large'>A Simple Bookmark Manager</Title>
            <Paragraph>
              A clean and simple interface to organize your favourite websites. Open a new 
              browser tab and see your sites load instantly. Try it for free.
            </Paragraph>
          <div className='intro__buttons'>
            <Button bg="blue" type="box">Get it on Chrome</Button>
            <Button bg="white" type="box">Get it on Firefox</Button>
          </div>
        </div>
      </Intro>
      <Features>
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
            <Title size="medium">Bookmark in one click</Title>
            <Paragraph>Organize your bookmarks however you like. Our simple drag-and-drop interface 
              gives you complete control over how you manage your favourite sites.
            </Paragraph>
          </FeatureComponent>
          <FeatureComponent feature="searching" featureSelected={featureSelected}>
            <IllustrationWithBg img='illustration-features-tab-2.svg' direction='left' type='composed'/>
            <Title size="medium">Intelligent search</Title>
            <Paragraph>Our powerful search feature will help you find saved sites in no time at all. 
              No need to trawl through all of your bookmarks.
            </Paragraph>
          </FeatureComponent>
          <FeatureComponent feature="sharing" featureSelected={featureSelected}>
            <IllustrationWithBg img='illustration-features-tab-3.svg' direction='left' type='composed'/>
            <Title size="medium">Share your bookmarks</Title>
            <Paragraph>Easily share your bookmarks and collections with others. Create a shareable 
              link that you can send at the click of a button.
            </Paragraph>
          </FeatureComponent>
        </div>
      </Features>
      <DownloadExtension>
        <Title size="medium">Download the extension</Title>
        <Paragraph>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
          got a favourite you’d like us to prioritize.</Paragraph>
        <div className='cards-container'>
          {cards.map( (card, index) =>(
            <Card browser={card.browser} version={card.version} key={index}/>
          )    
          )}
        </div>
      </DownloadExtension>
      <div className='faqs-container'>
        <Title size="medium">Frequently Asked Questions</Title>
        <Paragraph>
          Here are some of our FAQs. If you have any other questions you’d like 
          answered please feel free to email us.
        </Paragraph>
        <div className='faqs'>
          {faqs.map((faq, i)=>{

            return <Faq faqs={faqs} faq={faq} key={i} setFaqs={setFaqs} index={i}/>
          })}
        </div>
          <Button type='box' bg='blue'>More info</Button>
      </div>
      <Form/>
      <Footer>
          <img src='/images/logo-bookmark-footer.svg'></img>
          <Button bg='transparent' type='footer'>FEATURES</Button>
          <Button bg='transparent' type='footer'>PRICING</Button>
          <Button bg='transparent' type='footer'>CONTACT</Button>
          <div className='footer__icons'>
            <Icon src='/images/icon-facebook.svg'></Icon>
            <Icon src='/images/icon-twitter.svg'></Icon>
          </div>
      </Footer>
    </>
  );
}

export {App};
