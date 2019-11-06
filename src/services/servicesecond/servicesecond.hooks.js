const { authenticate } = require('@feathersjs/authentication').hooks;
const { Forbidden } = require('@feathersjs/errors');
const checkPermissions = require('../../middleware/permissions')

module.exports = {
  before: {
    all: [ authenticate('jwt'),
    checkPermissions,
    context => {
        if (!context.allow) {
          throw new Forbidden('You do not have the correct permissions (invalid permission entity).');
          }
      }
  ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
