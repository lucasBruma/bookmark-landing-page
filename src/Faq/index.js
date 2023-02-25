import React from 'react';
import './Faq.css'

function Faq({faqs, faq, setFaqs, index}) {
    const toggleFAQ = index =>{
        setFaqs(faqs.map((faq,i)=>{
          if(i===index){
            faq.open = !faq.open
          }else{
            faq.open = false
          }
    
          return faq
        }))
      }

    return (
        <div 
            className={"faq " + (faq.open ? 'open' : '')}
            key={index} 
            onClick={()=>toggleFAQ(index)}  
        >
           <div className='faq-question'>
                {faq.question}
           </div>
           <div className='faq-answer'>
                {faq.answer}
           </div>
        </div>
    );
}

export {Faq};