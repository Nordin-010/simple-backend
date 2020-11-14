
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Node.js app running from a Docker container!');
});


const PORT = 8080;
app.listen(PORT, _ => {
    console.log('Simple node.js backend is running in production mode...');
})