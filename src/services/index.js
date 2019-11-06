const users = require('./users/users.service.js');
const serviceFirst = require('./service-first/service-first.service.js');
const servicesecond = require('./servicesecond/servicesecond.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(serviceFirst);
  app.configure(servicesecond);
};
