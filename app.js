const express = require('express');
const app = express();

const { PORT = 8080 } = process.env;

app.get('/', (req, res) => {
    res.send("This is the freaking homepage I TELL AND KID YOU NOT REALLY THIS TIME");
})

app.listen(PORT, () => {
        console.log("WAZAAAP");
});