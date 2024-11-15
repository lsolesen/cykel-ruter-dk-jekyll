const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await setViewport({
    width: 1024,
    height: 768,
    deviceScaleFactor: 1,
  });
  await setJavaScriptEnabled(false);
  await goto('https://www.visitskanderborg.dk/');
  await evaluate(_ => {
    function xcc_contains(selector, text) {
        var elements = document.querySelectorAll(selector);
        return Array.prototype.filter.call(elements, function(element){
            return RegExp(text, "i").test(element.textContent.trim());
        });
    }
    var _xcc;
    _xcc = xcc_contains('[id*=cookie] a, [class*=cookie] a, [id*=cookie] button, [class*=cookie] button', '^(Alle akzeptieren|Akzeptieren|Verstanden|Zustimmen|Okay|OK)$');
    if (_xcc != null && _xcc.length != 0) { _xcc[0].click(); }
  });
  await screenshot({ path: 'bornholm-info.png' });

  await browser.close();
})();
