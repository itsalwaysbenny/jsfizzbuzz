describe("fizzBuzz", function() {

it("Should say fizz when number divdes by 3", function() {
  expect(fizzBuzz(3)).toEqual('fizz');
});

it("Should say buzz when number divdes by 5", function() {
  expect(fizzBuzz(5)).toEqual('buzz');
});

it("Should say fizzbuzz when number divdes by 3", function() {
  expect(fizzBuzz(15)).toEqual('fizzbuzz');
});

});
