require 'shelljs/global'

which 'node'
console.log pwd()
console.log 'switching to meteor-project'
cd 'meteor-project'

testsResults = [
  exec 'coffee -c tests/integration-tests && laika tests/integration-tests -t 10000'
  exec 'coffee -c tests/performance-tests && laika tests/performance-tests -t 10000'
]
testsResults = testsResults.map (result) -> result.code

console.log 'testResults:', testsResults
exit 1
exit Number(testsResults.some (result) -> result)
