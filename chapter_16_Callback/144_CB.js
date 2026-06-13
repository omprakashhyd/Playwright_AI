function test(name, fn) {
  console.log(`Running test: ${name}`);
  fn();
}

test("has title", () => {
  console.log("Hi");
});

test("om", () => {
  console.log("Hello, world!");
});
