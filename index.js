const next = require('next')

module.exports = {
  name: 'next-hapi',
  version: '1.0.0',
  register: async function(server, options) {
    const app = next({
      dev: process.env.NODE_ENV !== 'production',
      dir: options.dir
    });
    await app.prepare();
    server.route(require('./routes')(app, options.routes))
  }
}