var assert = require('assert');

suite('integration-test', function() {
  test('server', function(done, server) {
    server.eval(function() {
      emit('done');
    });

    server.once('done', function() {
      assert.equal(0, 1);
      done();
    });
  });
});
