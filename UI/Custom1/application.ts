
const {app, BrowserWindow, session} = require('electron');
const path = require('path');
const url = require("url");
const express = require('express');
const proxy = require('express-http-proxy');

const wapp = express();
let mainWindow;


wapp.listen(9001, function () {
    console.log('Your application is listening on port 9001!')
})
wapp.use(express.static('dist'));
wapp.use('/_cdnUrl_', proxy('localhost:9001'));
wapp.use('/services',(req, res ,next) => {  
  console.log("before redirecting ",req.url);
  res.redirect('/test/services'+req.url);
  console.log("after redirecting ",req.url);
  next();
});
wapp.use('/',proxy('localhost:8080'));
app.on("ready", () => {
   console.log("app started");         

          mainWindow = new BrowserWindow({
            // icon: path.join(__dirname, "../dist/angproject/assets/icon.png"),
            frame:true,
             webPreferences: {
                 nodeIntegration: true, // Allows IPC and other APIs
             }
         });
         mainWindow.removeMenu();
         mainWindow.loadURL("http://localhost:9001/");
        // mainWindow.webContents.openDevTools();
    
});

app.on("window-all-closed", () => {app.quit()});