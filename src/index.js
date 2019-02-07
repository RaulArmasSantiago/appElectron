'use strict'

//INstnciando los objetos app y browserWindow
const {app, BrowserWindow} = require('electron')

//PROPIEDADES DE APP
//console.dir(app)

//Imprime un mensaje en la consola antes de salir
app.on('before-quit', () => {
    console.log('Saliendo...')
})

//Ejecutando ordenes cuando la aplicacion esta lista
app.on('ready', () => {
    //Creando una ventana
    let win = new BrowserWindow({
        width:800,
        height: 600,
        title: 'Hola Mundo...',
        center:true,
        show:false
    })

    win.once('ready-to-show', () => {
        win.show()
    })

    // Detecta cuando la ventana es movida
    /* win.on('move', () => {
        const position = win.getPosition();
        console.log(`La poocisón de la ventana es ${position}`)
    }) */
    
    // detectanto el cierre de la ventana para cerrar el aplicativo
    win.on('closed', () =>{
        win = null
        app.quit()
    })

    //win.loadURL('http://devdocs.io/')

    win.loadURL(`file://${__dirname}/renderer/index.html`)
})