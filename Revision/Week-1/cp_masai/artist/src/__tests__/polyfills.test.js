import MyArray from "../polyfills.js";

global.score = 1;

test("MyArray constructor exitss", () => {
  expect(MyArray).toBeDefined();
  const c = new MyArray();
  expect(c).toBeInstanceOf(MyArray);
  expect(c.length).toBe(0)
  global.score += 1;
});

test("push works properly", () => {
  const c = new MyArray();
  expect(c.hasOwnProperty("push")).toBe(false)
  c.push(1)
  c.push(2)
  expect(c.length).toBe(2)

  global.score += 1;
});

test("pop works properly", () => {
  const c = new MyArray();
  expect(c.hasOwnProperty("pop")).toBe(false)
  c.push(1)
  c.push(2)
  c.push(3)
  c.push(4)
  c.pop()
  expect(c.length).toBe(3)

  global.score += 1;
});

test("map works properly", () => {
  const c = new MyArray();
  expect(c.hasOwnProperty("map")).toBe(false)
  c.push(1)
  c.push(2)
  var res = c.map(item => item*item)
  res.map((item, index) => {
    expect(item).toBe(c[index]*c[index])
  })
  expect(res.length).toBe(c.length)
  global.score += 2;
});


test("filter works properly", () => {
  const c = new MyArray();
  expect(c.hasOwnProperty("filter")).toBe(false)
  var arr = [1,2,3,4,5,6]
  var ans = []

  for(var i =0 ; i< arr.length; i++){
    c.push(arr[i])
    if(arr[i]%2 == 0){
      ans.push(arr[i])
    }
  }
  var res = c.filter(item => item%2 == 0)

  ans.map((item, index) => {
    expect(item).toBe(res[index])
  })

  expect(res.length).toBe(ans.length)
  global.score += 2;
});

test("reduce works properly", () => {
  const c = new MyArray();
  expect(c.hasOwnProperty("reduce")).toBe(false)
  var arr = [4,5,6]
  var sum = 0

  for(var i =0 ; i< arr.length; i++){
    c.push(arr[i])
    sum += arr[i]
  }

  var res = c.reduce((acc, item) => acc+item)
  expect(res).toBe(sum)

  global.score += 2;
});


afterAll(() => {
  console.log("Final Score is", global.score);
});