// useGoogleTranslate.js
import { useEffect } from 'react';

function useGoogleTranslate(selectedLanguage) {
    console.log(selectedLanguage)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;

    script.onload = () => {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
      };
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [selectedLanguage]);
}

export default useGoogleTranslate;