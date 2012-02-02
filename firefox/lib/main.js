var pageMod = require("page-mod");
pageMod.PageMod({
  include: "*.foo.com",
  contentScriptWhen: 'start',
  contentScript: "window.document.getElementsByTagName('html')[0].className = 'kiosk';"
});
