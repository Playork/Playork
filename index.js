const {Menu} = require('electron')
const electron = require('electron')
const {app, BrowserWindow} = electron

require('electron-context-menu')({
	prepend: (params, browserWindow) => [{
    label: 'v1.1.0'
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
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        type: 'separator'
      },
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
    role: 'window',
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
    role: 'help',
    submenu: [
      {
        label: 'Bug Report',
        click () { require('electron').shell.openExternal('https://github.com/Playork/Playork/issues') }
      },
      {
        label: 'Contact US',
        click () { require('electron').shell.openExternal('https://bekalshenoy.wixsite.com/website/contact-1') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {
        role: 'quit'
      }
    ]
  })
  template[3].submenu = [
    {
      label: 'Close',
      accelerator: 'CmdOrCtrl+W',
      role: 'close'
    },
    {
      label: 'Minimize',
      accelerator: 'CmdOrCtrl+M',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    }
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)