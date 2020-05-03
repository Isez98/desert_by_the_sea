function DetectLang() {
  const navLang = navigator.language.substr(0, 2);

  let detectLang = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\#');
    var regex = new RegExp('[#]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  };

  let lang = function () {
    if (detectLang('lang', '') == null) {
      return navLang;
    }
    return detectLang('lang', '');
  };

  let detectedLang = lang();
  return detectedLang;
}
export default DetectLang;
