const {
  pathWrapper,
  defaultHandlerWrapper,
  nextHandlerWrapper
} = require('./next-wrapper')

module.exports = (app, routeList) => {

  let routes = [
    {
      method: 'GET',
      path: '/_next/{p*}',
      handler: nextHandlerWrapper(app)
    },
    {
      method: 'GET',
      path: '/{p*}',
      handler: defaultHandlerWrapper(app)
    }
  ]

  for (let r in routeList) {
    let route = routeList[r]
    routes.push({
      method: 'GET',
      path: route,
      handler: pathWrapper(app, route)
    })
  }

  return routes
}
