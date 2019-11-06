const assert = require('assert');
const app = require('../../src/app');

describe('\'serviceFirst\' service', () => {
  it('registered the service', () => {
    const service = app.service('servicefirst');

    assert.ok(service, 'Registered the service');
  });
});
