const assert = require('assert');
const app = require('../../src/app');

describe('\'trainingProviderInformation\' service', () => {
  it('registered the service', () => {
    const service = app.service('trainingProviderInformation');

    assert.ok(service, 'Registered the service (trainingProviderInformation)');
  });
});
