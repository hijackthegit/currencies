require('dotenv').load();

const Hapi = require('hapi');
const server = Hapi.server({ port: process.env.SERVER_PORT });
require('./routes')(server);

const init = async () => {
    await server.start();
    console.log(`server started at ${process.env.SERVER_PORT}`);
};

init();

module.exports = server;