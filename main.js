const { app, BrowserWindow, globalShortcut, dialog } = require('electron')
const path = require('path')
const windowStateKeeper = require('electron-window-state');
let win;

function createWindow() {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });


  win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html')
  //   win.webContents.openDevTools() // open dev tools

  // 11. webContents
  let wc = win.webContents; // web content
  wc.on('dom-ready', () => { 
    console.log("Our app dom is ready")
  }) //triggers when our dom is ready

  wc.on('devtools-opened', () => {
    console.log("Devtools is opened") 
  } ) //triggers when Devtools is opened

  wc.on('did-create-window', ()=>{
    console.log('New window is opened now')
  }) //triggers when New windows is opened
  

  //12. Global Shortcuts
  globalShortcut.register("Shift+k", () => {
    console.log('Key combination shift+k is pressed')
  })

  globalShortcut.register('shift+c', ()=>{
    win.loadFile('child.html')
    console.log('The shortcut for navigating to the file child.html is triggered')
  })


  //13. dialog
  win.webContents.on('did-finish-load', ()=>{
    dialog.showOpenDialog({
      buttonLabel:"Select your image buddy" //gives ability to change the name of the button on the dialog.
    });
  })

  globalShortcut.register('Control+f', ()=>{
    dialog.showOpenDialog({
      buttonLabel:"Select your file mate"
    })
  }) //triggers a file select dialog box when a shortcut key CTRL+f is pressed.


  mainWindowState.manage(win); // manage window state
}

app.on('ready', createWindow) // when the app is ready, create the window

