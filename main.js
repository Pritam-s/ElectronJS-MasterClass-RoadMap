const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800, // width of the window
    height: 600, // height of the window
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
<<<<<<< HEAD
// child process and child window
  let child = new BrowserWindow({ parent: win})
  child.loadFile('child.html')
   child.show()
=======

>>>>>>> 18d4c2a (8. Auto Reload Main process using Nodemon. & adding a new script in package.json for nodemon.)

  
  win.loadFile('index.html')
//   win.webContents.openDevTools() // open dev tools
}

app.whenReady().then(createWindow)
