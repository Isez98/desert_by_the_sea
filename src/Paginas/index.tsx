import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import DetectLang from '../Components/DetectLang'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import GlobalContext from '../Context/GlobalContext'
import Home from './Home'

function useQuery() {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

const Page = () => {
  const query = useQuery()
  const history = useHistory()
  const { lang, setLang } = useContext(GlobalContext)

  useEffect(() => {
    if (!query.get('lang')) {
      setLang(DetectLang as unknown as 'en' | 'es')
      history.push({
        pathname: '/',
        search: `?lang=${lang}`,
      })
    }
  }, [query, lang])

  return (
    <div className="App">
      <div className="App-header">
        <Nav />
        <Home lang={lang} />
      </div>
      <Footer />
    </div>
  )
}

export default Page
