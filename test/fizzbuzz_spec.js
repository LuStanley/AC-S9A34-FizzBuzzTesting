let should = chai.should()

describe('Test fizzbuzz_spec function', function () {
  it('Should expect return: Fizz, which value divisible by 3', function () {
    let testData = 9
    let result = fizzBuzz(testData)
    let results = 'Fizz'
    result.should.be.equal(results)
  })

  it('Should expect return: Buzz, which value divisible by 5', function () {
    let testData = 10
    let result = fizzBuzz(testData)
    let results = 'Buzz'
    result.should.be.equal(results)
  })

  it('Should expect return: FizzBuzz, which value divisible by 5 and 3', function () {
    let testData = 15
    let result = fizzBuzz(testData)
    let results = 'FizzBuzz'
    result.should.be.equal(results)
  })

  it('Should expect return input, which value cannot divisible by 5 and 3', function () {
    let testData = 1
    let result = fizzBuzz(testData)
    let results = testData
    result.should.be.equal(results)
  })
})