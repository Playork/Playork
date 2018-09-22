const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({ width: 1100, height: 680, icon:'playork.png', title: "Playork", backgroundColor: '#111', show: false})
  win.loadURL(`file://${__dirname}/index.html`)
  win.setMenuBarVisibility(false)//menu is in work
  win.on('ready-to-show', function() { 
  win.show(); 
  win.focus();
  });
});
//menu is in work
if (process.platform === 'darwin') { 
  var template = [{ 
    label: 'FromScratch', 
    submenu: [{ 
      label: 'Quit', 
      accelerator: 'CmdOrCtrl+Q', 
      click: function() { 
        app.quit(); 
      } 
    }] 
  }, { 
    label: 'Edit', 
    submenu: [{ 
      label: 'Undo', 
      accelerator: 'CmdOrCtrl+Z', 
      selector: 'undo:' 
    }, { 
      label: 'Redo', 
      accelerator: 'Shift+CmdOrCtrl+Z', 
      selector: 'redo:' 
    }, { 
      type: 'separator'
    }, { 
      label: 'Cut', 
      accelerator: 'CmdOrCtrl+X', 
      selector: 'cut:' 
    }, { 
      label: 'Copy', 
      accelerator: 'CmdOrCtrl+C', 
      selector: 'copy:'
    }, { 
      label: 'Paste', 
      accelerator: 'CmdOrCtrl+V', 
      selector: 'paste:' 
    }, { 
      label: 'Select All', 
      accelerator: 'CmdOrCtrl+A', 
      selector: 'selectAll:' 
    }] 
  }];
  var osxMenu = menu.buildFromTemplate(template);
  menu.setApplicationMenu(osxMenu);
}