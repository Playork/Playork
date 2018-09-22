const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({ width: 1100, height: 680, icon:'playork.png', title: "Playork"})
  win.loadURL(`file://${__dirname}/index.html`)
 
  
  win.setMenuBarVisibility(false)
})