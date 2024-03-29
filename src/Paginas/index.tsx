import React, { useContext, useEffect, useMemo } from 'react'
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
  const { setLang } = useContext(GlobalContext)

  useEffect(() => {
    if (query.get('lang') && query.get('lang') !== undefined) {
      setLang(query.get('lang') as 'en' | 'es')
    } else {
      setLang(DetectLang() as unknown as 'en' | 'es')
      history.push({
        pathname: '/',
        search: `?lang=${DetectLang()}`,
      })
    }
  }, [query])

  return (
    <div className="App">
      <div className="App-header">
        {query.get('lang') && (
          <>
            <Nav />
            <Home lang={query.get('lang') as 'en' | 'es'} />
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Page
