require 'shelljs/global'

which 'node'
pwd()
console.log 'switching to meteor-project'
cd 'meteor-project'

testsResults =
  exec 'laika tests/integration-tests -t 10000',
  exec 'laika tests/performance-tests -t 10000'

exit(testsResults.some (result) -> result)
