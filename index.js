import express from 'express'

const app = express()
const PORT = 8080

/*
Middleware
*/
app.get("/", (req, res) => {
    res.send("Welcome to Ariadna's Portfolio!")
})

app.listen(PORT, () => {
    console.log(`Port listening to ${PORT}`)
})