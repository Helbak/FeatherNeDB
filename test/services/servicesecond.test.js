const assert = require('assert');
const app = require('../../src/app');

describe('\'servicesecond\' service', () => {
  it('registered the service', () => {
    const service = app.service('servicesecond');

    assert.ok(service, 'Registered the service');
  });
});
