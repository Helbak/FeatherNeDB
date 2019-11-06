// Initializes the `serviceFirst` service on path `/servicefirst`
const { ServiceFirst } = require('./service-first.class');
const createModel = require('../../models/service-first.model');
const hooks = require('./service-first.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/servicefirst', new ServiceFirst(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('servicefirst');

  service.hooks(hooks);
};
