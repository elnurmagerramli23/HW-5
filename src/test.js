function ArrayList() {
    this.array = [];
    this.size = 0;
};
ArrayList.prototype.init = function(array) {
    this.array = array;
    this.size = array.length;
};
ArrayList.prototype.clear = function() {
    this.array = [];
    this.size = 0;
};
ArrayList.prototype.addToEnd = function(argument) {
    const array = this.array;
    array[array.length] = argument;
    this.size = array.length
};
ArrayList.prototype.deleteFromEnd = function() {
    const array = this.array;
    array.length = [array.length - 1];
    this.size = array.length;
};
ArrayList.prototype.deleteFirst = function() {
    const array = this.array;
    let deleted = [];
    
    for (let i = 1; i < array.length; i++) {
        deleted[i-1] = array[i] 
    };
    this.array = deleted;
    this.size -= 1
};
ArrayList.prototype.addToFirst = function(argument) {
    const array = this.array;
    let newArr = [argument];

    for (let i = 0; i < array.length; i++) {
        newArr[i+1] = array[i]
    };
    this.array = newArr;
    this.size += 1;
};
ArrayList.prototype.revArr = function() {
    const array = this.array;
    let newArr = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArr[newArr.length] = array[i]
    };
    this.array = newArr;
    this.size = newArr.length
};
ArrayList.prototype.checkForInclude = function(argument) {
    const array = this.array;

    for (let i = 0; i < array.length; i++) {
        if (argument === array[i]) {
            return 'true'
        };
    }
    return 'false'
};
ArrayList.prototype.checkForIndex = function(argument) {
    const array = this.array;

    for (let i = 0; i < array.length; i++) {
        if (argument === array[i]) return i
    };

    this.size = array.length;

    return '-1';
};
ArrayList.prototype.changeToString = function() {
    const array = this.array;
    return '' + array;
};
ArrayList.prototype.getSliceAction = function(start, end) {
    const array = this.array;
    let newArr = [];
    let counter = 0;
    
    if(end) {
        for (let i = start; i < end; i++) {
            newArr[counter++] = array[i]
        }
    } else {
        for (let i = start; i < array.length; i++) {
            newArr[counter++] = array[i];
        }
    };
    this.array = newArr;
    this.size = newArr.length;
};
const testArray = new ArrayList();
testArray.init([1,2,3]);
console.log(testArray);
testArray.addToEnd(5);
console.log(testArray);
testArray.deleteFromEnd();
console.log(testArray);
testArray.deleteFirst();
console.log(testArray);
testArray.addToFirst(1);
console.log(testArray);
testArray.revArr();
console.log(testArray);
console.log(testArray.checkForInclude(1));
console.log(testArray.checkForIndex(4));
console.log(testArray.changeToString());
testArray.getSliceAction(0,1);
console.log(testArray);




