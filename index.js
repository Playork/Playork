const {Menu} = require('electron')
const electron = require('electron')
const {app, BrowserWindow} = electron

require('electron-context-menu')({
	prepend: (params, browserWindow) => [{
    label: 'v2.0.0'
  }],
  showInspectElement: false
});

app.on('ready', () => {
  let win = new BrowserWindow({ width: 800, height: 600, icon:'playork.png',backgroundColor: '#fff', title: "Playork", frame: false})
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('ready-to-show', function() { 
  win.show(); 
  win.focus();
  });
});