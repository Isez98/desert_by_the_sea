import React, { useState } from 'react'
import DetectLang from '../Components/DetectLang'
import GlobalContext from './GlobalContext'

export const ContextWrapper = (props: any) => {
  const [lang, setLang] = useState<'en' | 'es'>(
    DetectLang as unknown as 'en' | 'es'
  )

  return (
    <GlobalContext.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default ContextWrapper
