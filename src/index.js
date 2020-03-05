function ArrayList() {
    this.array = [];
    this.size = 0;
};
ArrayList.prototype.init = function(array) {
    if (!array) return 'Please input an array';
    this.array = array;
    this.size = array.length;
    return array;
};
ArrayList.prototype.clearObject = function() {
    this.array = [];
    this.size = 0;
    return this.array;
};
ArrayList.prototype.addAtEnd = function(arrElm) {
    if (!arrElm) return 'Please input an array';
    
    const array = this.array;

    array[array.length] = arrElm;
    this.size = array.length;
    return array;
};
ArrayList.prototype.deleteFromEnd = function() {
    const array = this.array;
    array.length = [array.length - 1];
    this.size = array.length;
    
    return array;
};
ArrayList.prototype.deleteFirst = function() {
    const array = this.array;
    let deleted = [];
    
    for (let i = 1; i < array.length; i++) {
        deleted[i-1] = array[i] 
    };
    this.array = deleted;
    this.size -= 1;

    return array
};
ArrayList.prototype.addToFirst = function(argument) {
    if (!argument) return 'Please check your input';
    const array = this.array;
    let newArr = [argument];

    for (let i = 0; i < array.length; i++) {
        newArr[i+1] = array[i]
    };
    this.array = newArr;
    this.size += 1;
    
    return this.array;
};
ArrayList.prototype.revArr = function() {
    const array = this.array;
    let newArr = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArr[newArr.length] = array[i]
    };
    this.array = newArr;
    this.size = newArr.length;
    
    return this.array;
};
ArrayList.prototype.checkForInclude = function(argument) {
    if (!argument) return 'Please input an array';
    const array = this.array;

    for (let i = 0; i < array.length; i++) {
        if (argument === array[i]) return 'true';
    }

    return 'false';
};
ArrayList.prototype.checkForIndex = function(argument) {
    if (!argument) return 'Please input an array';
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
    if ((typeof start) !== 'number' || (typeof end) !== 'number') return 'Please input a number';
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

    return this.array;
};