const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return h.response('Homepage').code(200);
    },
  },

  {
        method: '*',
        path: '/',
        handler: (request, h) => {
          const{ method } = request;
          return h.response(`Halaman tidak dapat diakses dengan method ${ method }`).code(400);
        },
    },

  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return h.response('About Page').code(200);
    },
  },

  {
        method: '*',
        path: '/about',
        handler: (request, h) => {
          const{ method } = request;
          return h.response(`Halaman tidak dapat diakses dengan method ${ method }`).code(400);
        },
    },

    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return h.response('Halaman tidak ditemukan').code(404);
        },
    },

    {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if(lang === 'id') {
          return h.response(`Hai, ${name}!`).code(200);
      }
      return h.response(`Hello, ${name}!`).code(200);
   },
 },

 {
   method: 'POST',
   path: '/login',
   handler: (request, h) => {
      const { username, password } = request.payload;
      return h.response(`Welcome ${username}!`).code(200);
    },
  },
];

module.exports = routes;
