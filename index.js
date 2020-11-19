const server = require('./server.js');
const {PORT}= require('./secrets.js')

server.listen(PORT, () => 
    console.log(PORT)
)