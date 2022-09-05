import React, { useState } from 'react'
import GlobalContext from './GlobalContext'

export const ContextWrapper = (props: any) => {
  const [lang, setLang] = useState<'en' | 'es'>('en')

  return (
    <GlobalContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
