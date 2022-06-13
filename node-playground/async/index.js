
async function main() {
  let a = test()
  console.log(a)
}

async function test() {
  return await test2(4)
}

async function test2() {
  console.log("test2")
  return 3;
}

main()