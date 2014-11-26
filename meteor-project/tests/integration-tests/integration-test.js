var assert = require('assert');

suite('integration-test', function() {
  test('server', function(done, server) {
    server.eval(function() {
      emit('done');
    });

    server.once('docs', function() {
      assert.equal(1, 1);
      done();
    });
  });
});
