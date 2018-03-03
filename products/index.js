const { json, send } = require('micro');
const { router, get, post } = require('microrouter');

module.exports = router(
  get('/', (req, res) => 'Welcome to the products API'),
  post('/', async (req, res) => {
    const body = await json(req);
    send(res, 200, body);
  }),
  get('/:id', (req, res) => req.params)
);
