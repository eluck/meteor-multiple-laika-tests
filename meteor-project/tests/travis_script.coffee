require 'shelljs/global'

which 'node'
pwd()
console.log 'switching to meteor-project'
cd 'meteor-project'

testsResults = [
  exec 'coffee tests/integration-tests && laika tests/integration-tests -t 10000'
  exec 'coffee tests/performance-tests && laika tests/performance-tests -t 10000'
]

console.log 'testResults:', testsResults
exit Number(testsResults.some (result) -> result)
