var MyArrayList = /** @class */ (function () {
    function MyArrayList() {
        this.list = [];
    }
    return MyArrayList;
}());
function main() {
    var a = new MyArrayList();
    a.list.push("2");
    console.log(a);
}
main();
