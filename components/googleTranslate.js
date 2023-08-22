// components/GoogleTranslate.js
// "use client"; 
import React, { useEffect,useState } from 'react';
import { useRouter } from 'next/router';

const GoogleTranslate = () => {
  const { isFallback, events } = useRouter()
 
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({
       pageLanguage: 'en',
       includedLanguages: 'en,ta',
    layout: window.google.translate.TranslateElement.InlineLayout.Bubble, 
  }, 
  'google_translate_element'
  )}

  useEffect(() => {

    const id = 'google-translate-script'

    const addScript = () => {
      const s = document.createElement('script')
      s.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
    
      s.setAttribute('id', id)
      const q = document.getElementById(id)
      console.log(!q)
      if (!q) {
        document.body.appendChild(s)
        window.googleTranslateElementInit = googleTranslateElementInit
      }
    }

  

    const removeScript = () => {
      const q = document.getElementById(id)
      if (q) q.remove()
      const w = document.getElementById('google_translate_element')
      if (w) w.innerHTML = ''
    }

    isFallback || addScript()
    
    console.log(  isFallback || addScript()   )

    events.on('routeChangeStart', removeScript)
    events.on('routeChangeComplete', addScript)

    return () => {
      events.off('routeChangeStart', removeScript)
      events.off('routeChangeComplete', addScript)
    }



    
  }, [isFallback,events])

  return  <div id="google_translate_element"></div>;
};

export default GoogleTranslate;