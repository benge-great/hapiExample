'use strict';

const Hapi = require('@hapi/hapi');
const plugin = require('./plugin.js')

const init = async () => {

  // 初始化一个服务
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // 配一个 route，最简单的方式
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {

          return 'Hello World!';
      }
  });

  // 或者使用插件，这是我们公司最喜欢用的方式
  await plugin(server);
  
    // 启动服务
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();