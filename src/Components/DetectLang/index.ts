function DetectLang() {
  const userLang = navigator.language
  return userLang.substring(0, 2)
}
export default DetectLang
