// Initializes the `servicesecond` service on path `/servicesecond`
const { Servicesecond } = require('./servicesecond.class');
const createModel = require('../../models/servicesecond.model');
const hooks = require('./servicesecond.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/servicesecond', new Servicesecond(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('servicesecond');

  service.hooks(hooks);
};
