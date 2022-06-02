// module.exports = (req, res) => {
// 	res.end('Welcome to Micro');
// };

const handler = require('.');

const options = {
  public: '/',
  symlinks: true,
};

module.exports = async (request, response) => {
  await handler(request, response, options);
};
