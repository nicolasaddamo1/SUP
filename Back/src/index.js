import app from "./server";
import AppDataSource from "./config/data-source"

AppDataSource.initialize()
.then(async (res) => {
    console.log("Conexion a la base de datos realizada con éxito")
    app.listen (3000, () => {
        console.log(`Server Listening On Port 3000`)
    })
})