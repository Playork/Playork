const {Menu} = require('electron')
const electron = require('electron')
const {app, BrowserWindow} = electron

require('electron-context-menu')({
	prepend: (params, browserWindow) => [{
    label: 'v1.7.0'
  }],
  showInspectElement: false
});

app.on('ready', () => {
  let win = new BrowserWindow({ width: 1100, height: 680, icon:'playork.png', title: "Playork", backgroundColor: '#111', show: false})
  win.loadURL(`file://${__dirname}/index.html`)
  win.on('ready-to-show', function() { 
  win.show(); 
  win.focus();
  });
});
const template = [
  {
    label: 'Edit',
    submenu: [
      {
        role: 'undo'
      },
      {
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        role: 'cut'
      },
      {
        role: 'copy'
      },
      {
        role: 'paste'
      },
      {
        role: 'delete'
      },
      {
        role: 'selectall'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        role: 'resetzoom'
      },
      {
        role: 'zoomin'
      },
      {
        role: 'zoomout'
      },
      {
        type: 'separator'
      },
      {
        role: 'togglefullscreen'
      }
    ]
  },
  {
    role: 'Window',
    submenu: [
      {
        role: 'minimize'
      },
      {
        role: 'close'
      }
    ]
  },
  {
    role: 'Help',
    submenu: [
      {
        label: 'Bug Report',
        click () { require('electron').shell.openExternal('https://github.com/Playork/Playork/issues') }
      },
      {
        label: 'Contact US',
        click () { require('electron').shell.openExternal('http://playork.ml/contact.html') }
      }
    ]
  }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)