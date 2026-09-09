const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 750,
    title: "Maomi - Học Từ Vựng",
    autoHideMenuBar: true, // Ẩn thanh menu mặc định
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Cho phép phát video autoplay không cần tương tác trước
      autoplayPolicy: 'no-user-gesture-required' 
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});