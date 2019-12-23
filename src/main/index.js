const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow = null

let init = () => {
  mainWindow = new BrowserWindow({
    width: 800, height: 600
  })

  mainWindow.loadURL(process.env.NODE_ENV === 'DEV'
  ? 'http://localhost:8080/'
  : `file://${process.cwd()}/dist/index.html`)
}

let onAllClosed = () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

app.on('ready', init)
app.on('activate', () => mainWindow === null ? init() : null)
app.on('window-all-closed', onAllClosed)