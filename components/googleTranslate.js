// components/GoogleTranslate.js
// "use client"; 
import React, { useEffect, } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ta,en',
          layout: window.google.translate.TranslateElement.InlineLayout.Bubble,
        },
        'google_translate_element'
      );
    };

   

  // Load the Google Translate API script
  // const script = document.createElement('script');
  // script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
  // script.async = true;
  // document.head.appendChild(script);
  // return () => {
  //   document.head.removeChild(script);
  // };
  }, []);

  return  <div id="google_translate_element"></div>;
};

export default GoogleTranslate;