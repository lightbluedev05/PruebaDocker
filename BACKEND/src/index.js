//--------- INICIAR SERVIDOR ----------
const app = require("./app");

app.get('/products', (req, res) => {
    res.send('Lista des a');
})

app.get('/', (req, res) => {
    res.send('aasda');
})

app.listen(app.get('port'), () => {
    console.log("Servidor iniciado en el puerto", app.get('port'));
});