// module.exports = (req, res) => {
// 	res.end('Welcome to Micro');
// };

const handler = require('.');

module.exports = async (request, response) => {
	await handler(request, response);
};
