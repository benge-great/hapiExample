module.exports = async (server) => {
  await server.register({
    name    : 'myplugin',
    register: async (server) => {
      server.route({
        method : 'GET',
        path   : '/hello/{name}',
        options: {
          handler: (request, h) => {
            return `hello ${request.params.name}`
          }
        }
      })
    }
  })
}