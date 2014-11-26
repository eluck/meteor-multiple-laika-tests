assert = require('assert')

suite 'integration-test', ->
  test 'server', (done, server) ->
    server.eval ->
      emit 'done'

    server.once 'docs', ->
      assert.equal 1, 1
      done()
