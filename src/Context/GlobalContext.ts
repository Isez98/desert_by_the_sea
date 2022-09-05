import React from 'react'

const GlobalContext = React.createContext({
    lang: '', // set a default value
    setLang: (lang: 'en' | 'es') => {lang},
  })
  
  export default GlobalContext