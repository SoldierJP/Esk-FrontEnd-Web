import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../CSS/navbar.css';
import '../CSS/Terms.css'; 

const TermsAndService: React.FC = () => {
  const [termsContent, setTermsContent] = useState<string>(''); 

  useEffect(() => {
    fetch('/src/assets/Txt/message.txt')
      .then((response) => response.text())
      .then((text) => {
        setTermsContent(text); 
      });
  }, []);

  return (
    <div className='back'>
      <div className="blur-box1">
        <div className="terms-content">
          <ReactMarkdown>{termsContent}</ReactMarkdown> 
        </div>
      </div>
    </div>
  );
};

export default TermsAndService;
