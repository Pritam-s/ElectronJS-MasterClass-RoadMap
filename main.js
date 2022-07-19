const { app, BrowserWindow } = require('electron')
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
  

  mainWindowState.manage(win); // manage window state
}

app.on('ready', createWindow) // when the app is ready, create the window

