function DetectLang() {
  const navLang = navigator.language.substring(0, 2)
  switch (navLang) {
    case 'en':
      return 'en'
    case 'es':
      return 'es'
    default:
      return 'en'
  }
}
export default DetectLang
