const {Menu} = require('electron')
const electron = require('electron')
const {app, BrowserWindow} = electron
const { autoUpdater } = require('electron-updater');

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
  autoUpdater.checkForUpdatesAndNotify() 
    .then((data) => console.log('data', data)) 
    .catch((err) => console.log(err));
});
autoUpdater.setFeedURL({ 
  provider: 'github', 
  owner: 'Playork', 
  protocol: 'https', 
  repo: 'Playork'
});