
class MyArrayList<T> {
  list: T[] = []
}


function main() {
  let a = new MyArrayList();
  a.list.push("2");
  console.log(a);
}

main();