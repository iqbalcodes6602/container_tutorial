const express = require('express')
const app = express()

const port = 3000

app.get("/api", (req, res) => {
    res.json({ message: "hello world from server" })
})

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})