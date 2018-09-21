const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({ width: 1100, height: 680, icon:'Playork1.png', title: "Productivity Tools", resizable: false, frame: false})
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('ready', () => { win = null })
  win.setMenu(null);
})

function render () {
  var el = document.getElementById('win32-titlebar')
  yo.update(el, yo`<div id="win32-titlebar">
    <a class="win32-titlebar-btn win32-titlebar-minimize" onclick=${onClickMinimize}>a</a>
    <a class="win32-titlebar-btn win32-titlebar-maximize" onclick=${onClickMaximize}>b</a>
    <a class="win32-titlebar-btn win32-titlebar-close" onclick=${onClickClose}>c</a>
  </div>`)
}

// event handlers
// =

function onClickMinimize () {
  remote.getCurrentWindow().minimize()
}

function onClickMaximize () {
  var win = remote.getCurrentWindow()
  if (win.isMaximized()) {
    win.unmaximize()
  } else {
    win.maximize()
  }
}

function onClickClose () {
  remote.getCurrentWindow().close()
}