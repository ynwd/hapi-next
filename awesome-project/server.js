const Hapi = require('hapi')

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {

  await server.register({
    plugin: require('@ynwd/hapi-next'),
    options: { 
      dir: './web',
      routes: ['/welcome', '/about'],
    }
  })
  
  server.route({
    path: '/hello',
    method: 'GET',
    handler: (request, h) => {
      return `Hello world`;
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`)
};

init()