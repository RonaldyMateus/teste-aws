const express = require('express');

const app = express();

app.listen(3333, () => {console.log("app rodando")});

app.get('/', (req, res) => {
    return(
         res.status(200).json({message:"Rodando"})
    )
})



