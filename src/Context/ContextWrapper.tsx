import React, { PropsWithChildren, useState } from 'react'
import GlobalContext from './GlobalContext'

export const ContextWrapper = (props: PropsWithChildren) => {
  const [lang, setLang] = useState<string>('')

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
