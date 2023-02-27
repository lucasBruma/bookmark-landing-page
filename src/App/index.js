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
import { MenuButton } from '../MenuButton';
import {Modal} from '../Modal';

const cards = [{browser:'chrome',version:'62'},{browser:'firefox',version:'55'},{browser:'opera',version:'46'}]

function App() {

  const [showModal, setShowModal] = React.useState(false);
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

  const initialState = window.innerWidth < 768 ? false : true;
  const [showMenu, setShowMenu] = React.useState(initialState);
  const [featuresBtn, setFeaturesBtn] = React.useState(initialState);

  React.useEffect(() => {
      function handleResize() {
      if (window.innerWidth < 768) {
          setShowMenu(false);
          setFeaturesBtn(false);
      } else {
          setShowMenu(true);
          setFeaturesBtn(true);
      }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header showModal={showModal} setShowModal={setShowModal} showMenu={showMenu} setShowMenu={setShowMenu}/>
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
      <Features featuresBtn={featuresBtn} setFeaturesBtn={setFeaturesBtn} />
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
          <div className='footer__sections'>
            <img src='/images/logo-bookmark-footer.svg'></img>
            <MenuButton bg='transparent' type='footer'>FEATURES</MenuButton>
            <MenuButton bg='transparent' type='footer'>PRICING</MenuButton>
            <MenuButton bg='transparent' type='footer'>CONTACT</MenuButton>
          </div>
          <div className='footer__icons'>
            <a href='#'><Icon src='/images/icon-facebook.svg'></Icon></a>
            <a href='#'><Icon src='/images/icon-twitter.svg'></Icon></a>
          </div>
      </Footer>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal}/>}
    </>
  );
}

export {App};
