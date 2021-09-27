const { request, response } = require("express");
const express = require("express");
const app = express();

app.use(express.json({ extended: false}));

app.get('/', (request, response) => {
 return response.send("bao dep trai");
});
 app.listen(3000, () => {
     console.log('server is running on port 3000')
 });