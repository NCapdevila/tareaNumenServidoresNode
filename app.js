
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Primer tarea de BackEnd")
})
app.get('/nombre-completo/:nombre/:apellido', (req, res) => {
    nombre = req.params.nombre;
    apellido = req.params.apellido;
    res.send(`Hola ${nombre} ${apellido}`)
})

app.get('/dividir/:divisor/:dividendo', (req, res) => {
    if(req.params.divisor == 0){
        res.json({
            error : 'No se puede dividir por cero'
        })
    }else{ res.json({
        resultado : req.params.dividendo / req.params.divisor
    })}
    
})

app.get('/sumar/:num1/:num2', (req, res) => {
    let num1= Number(req.params.num1);
    let num2= Number(req.params.num2);

    if(num1 && num2 > 0){
        res.json({
            resultado : num1 + num2
        })
    }else{
        res.json({
            error: "los números ingresados tienen que ser mayores a cero"
        })
    }
})

app.get('/auth', (req, res) => {
    let num = req.query.num
    if(num % 2 == 0){
        res.send("Autorizado")
    }else{
        res.send("No autorizado")
    }
})

app.get('/listadecompras', (req, res) => {
    res.json({
        producto1 : req.query.producto1,
        producto2 : req.query.producto2,
        producto3 : req.query.producto3,
        producto4 : req.query.producto4,
        producto5 : req.query.producto5
    })
})

app.listen(port, () => {
    console.log(`Example app http://localhost:${port}`)
})