const server = require('./server.js');
const {PORT}= require('./secrets.js')
// const PORT = 50

server.listen(PORT, () => 
    console.log(PORT)
)