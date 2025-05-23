import { createContext, useState, useEffect } from 'react'
import { getApiData } from '../services/apiServices'


const AppContext = createContext()


const AppProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem('lang')
  const [language, setLanguage] = useState(savedLanguage ?? 'br')
  const [languages, setLanguages] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const getTexts = await getApiData('webtext')
        if (getTexts) {
          setLanguages(getTexts)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchLanguages()
  }, [])

  useEffect(()=>{
    localStorage.setItem('lang', language)
  }, [language])

  return (
    <AppContext.Provider value={{ language, languages, setLanguage, loading }}>
      {children}
    </AppContext.Provider>
  )
}


export { AppContext, AppProvider }