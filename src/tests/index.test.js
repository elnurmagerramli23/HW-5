describe('Homework - 5', () => {
    describe('Test init prototype', () => {
        describe('ArrayList.prototype.init', function (){
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.init, 'method has been defined')
            });
            it('should warning user to [] (undefined)', () => {
                const arr = undefined;
                const expSize = 'Please input an array';
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.init(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual, expSize)
            });

            it('should warning user to [] (null)', () => {
                const arr = null;
                const expArr = 'Please input an array';
                const expSize = 'Please input an array';

                const actual = ArrayList.prototype.init(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual, expSize)
            });

            it('should return [1,2,3]', () => {
                const arr = [];
                const arrElm = [1,2,3];
                const expArr = [1,2,3];
                const expSize = 3;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.init(arrElm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)
            });
            
            it('should return [2]', () => {
                const arr = [];
                const arrElm = [2];
                const expArr = [2];
                const expSize = 1;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.init(arrElm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return ["Javascript", "is", "awesome"]',() => {
                const arr = [];
                const arrElm = ["Javascript", "is", "awesome"];
                const expArr = ["Javascript", "is", "awesome"];
                const expSize = 3;

                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.init(arrElm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        });
    });
    describe('Test addAtEnd method', () => {
        describe('ArrayList.prototype.addAtEnd', function () {
            it('should be defined', function () {
                assert.isDefined(ArrayList.prototype.addAtEnd, 'method has been defined')
            });

            it('should warning user to [] (null)', () => {
                const arr = null;
                const expArr = 'Please input an array';
                const expSize = 'Please input an array';
                ArrayList.prototype.init(arr);
                const actual = ArrayList.prototype.addAtEnd(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual, expSize)
            });

            it('should warning user to [] (undefined)', () => {
                const arr = undefined;
                const expArr = 'Please input an array';
                const expSize = 'Please input an array';
                ArrayList.prototype.init(arr);
                const actual = ArrayList.prototype.addAtEnd(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual, expSize)
            });

            it('should return an array [1,2,3,4]', () => {
                const array = [1,2,3];
                const arrElm = 4;
                const expArr = [1,2,3,4];
                const expSize = 4;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.addAtEnd(arrElm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)
                
            });

            it('should return "Javascript is awesome', () => {
                const arr = ['Javascript', 'is'];
                const arrElm = 'awesome';
                const expArr = ['Javascript', 'is', 'awesome'];
                const expSize = 3;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.addAtEnd(arrElm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)
            });
        });
    });
    describe('Test clearObject', () => {
        describe('ArrayList.clearObject', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.clearObject, 'method has been defined')
            });

            it('should return []', () => {
                const arr = [1,2,3];
                const expArr = [];
                const expSize = 0;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.clearObject();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)
            });
        });
    });
    describe('Test deleteFromEnd', () => {
        describe('ArrayList.prototype.deleteFromEnd', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.deleteFromEnd, 'method has been defined')
            });

            it('should return [1,2]', () => {
                const arr = [1,2,3];
                const expArr = [1,2];
                const expSize = 2;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.deleteFromEnd();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)
            });

            it('should return "Javascript is awesome"', () => {
                const arr = ['Javascript', 'is', 'awesome'];
                const expArr = ['Javascript', 'is'];
                const expSize = 2;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.deleteFromEnd();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        });
    });
    describe('Test AddToFirst method', () => {    
        describe('ArrayList.addToFirst', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.addToFirst, 'method has been defined')
            });

            it('should return [6, 2, 3, 4], size = 4, ([2, 3, 4])', () => {
                const array = [2, 3, 4];
                const element = 6;
                const expArr = [6, 2, 3, 4];
                const expSize = 4;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.addToFirst(element);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [6, 3, 4], size = 1, ([3, 4])', () => {
                const array = [3, 4];
                const element = 6;
                const expArr = [6, 3, 4];
                const expSize = 3;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.addToFirst(element);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [3, 4], size = 2, ([4])', () => {
                const array = [4];
                const element = 3;
                const expArr = [3, 4];
                const expSize = 2;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.addToFirst(element);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [4], size = 1, ([])', () => {
                const array = [];
                const element = 4;
                const expArr = [4];
                const expSize = 1;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.addToFirst(element);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should warning user to [] (null)', () => {
                const arr = null;
                const expArr = 'Please check your input';
                const expSize = 'Please check your input';

                const actual = ArrayList.prototype.addToFirst(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual, expSize)
            });

            it('should warning user to [] (undefined)', () => {
                const arr = undefined;
                const expArr = 'Please check your input';
                const expSize = 'Please check your input';

                const actual = ArrayList.prototype.addToFirst(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual, expSize)
            });

            it('should return "Javascript is awesome"', () => {
                const arr = ['is', 'awesome'];
                const arrElm = 'Javascript';
                const expArr = ['Javascript', 'is', 'awesome'];
                const expSize = 3;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.addToFirst(arrElm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)

            });

            it('should return [] ([])', () => {
                const arr = [];
                const arrElm = [];
                const expArr = [[]];
                const expSize = 1;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.addToFirst(arrElm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)
            });
        });
    });
    describe('Test revArr method', () => {
        describe('ArrayList.revArr', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.revArr, 'function has been defined')
            });

            it('should return [4, 3, 2, 6], size = 4, ([6, 2, 3, 4])', () => {
                const array = [6, 2, 3, 4];
                const expArr = [4, 3, 2, 6];
                const expSize = 4;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.revArr();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [4, 3, 2, 6, 5], size = 5, ([5, 6, 2, 3, 4])', () => {
                const array = [5, 6, 2, 3, 4];
                const expArr = [4, 3, 2, 6, 5];
                const expSize = 5;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.revArr();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [4, 3], size = 2, ([3, 4])', () => {
                const array = [3, 4];
                const expArr = [4, 3];
                const expSize = 2;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.revArr();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [4], size = 1, ([4])', () => {
                const array = [4];
                const expArr = [4];
                const expSize = 1;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.revArr();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        });
    });
    describe('Test checkForInclude method', () => {
        describe('ArrayList.checkForInclude', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.checkForInclude, 'function has been defined')
            });

            it('should return true, size = 4, ([6, 2, 3, 4])', () => {
                const array = [6, 2, 3, 4];
                const element = 6;
                const expArr = 'true';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForInclude(element);

                assert.deepEqual(actual, expArr);
            });

            it('should warn the user to [ ] (undefined)', () => {
                const arg = undefined;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForInclude(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should warn the user to [ ] (null)', () => {
                const arg = null;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForInclude(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should return true, size = 2, ([3, 4])', () => {
                const array = [3, 4];
                const element = 4;
                const expArr = 'true';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForInclude(element);

                assert.deepEqual(actual, expArr);
            });

            it('should return false, size = 1, ([4])', () => {
                const array = [4];
                const element = 6;
                const expArr = 'false';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForInclude(element);

                assert.deepEqual(actual, expArr);
            });

            it('should return false, size = 5, ([2, 4, 5, 6, 7])', () => {
                const array = [2, 4, 5, 6, 7];
                const element = 10;
                const expArr = 'false';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForInclude(element);

                assert.deepEqual(actual, expArr);
            });
        });
    });
    describe('Test changeToString method', () => {
        describe('ArrayList.changeToString', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.changeToString, 'function has been defined')
            });

            it('should return \'6,2,3,4\', size = 4, ([6, 2, 3, 4])', () => {
                const array = [6, 2, 3, 4];
                const expArr = '6,2,3,4';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.changeToString();

                assert.deepEqual(actual, expArr);
            });
        });
    });
    describe('Test checkForIndex method', () => {
        describe('ArrayList.checkForIndex', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.checkForIndex, 'function has been defined')
            });

            it('should return 0, size = 4, ([6, 2, 3, 4])', () => {
                const array = [6, 2, 3, 4];
                const element = 6;
                const expArr = 0;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForIndex(element);

                assert.deepEqual(actual, expArr);
            });

            it('should warn the user to [ ] (undefined)', () => {
                const arg = undefined;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForIndex(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should warn the user to [ ] (null)', () => {
                const arg = null;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForIndex(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should return 1, size = 2, ([3, 4])', () => {
                const array = [3, 4];
                const element = 4;
                const expArr = 1;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForIndex(element);

                assert.deepEqual(actual, expArr);
            });

            it('should return 0, size = 1, ([4])', () => {
                const array = [4];
                const element = 4;
                const expArr = 0;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForIndex(element);

                assert.deepEqual(actual, expArr);
            });

            it('should return -1, size = 5, ([2, 4, 5, 6, 7])', () => {
                const array = [2, 4, 5, 6, 7];
                const element = 10;
                const expArr = '-1';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForIndex(element);

                assert.deepEqual(actual, expArr);
            });
        });
    });
    describe('Test getSliceAction method', () => {
        describe('ArrayList.getSliceAction', () => {
            it('should be defined', () => {
                assert.isDefined(ArrayList.prototype.getSliceAction, 'function has been defined')
            });

            it('should warning user to input a number (null, null)', () => {
                const array = [];
                const start = null;
                const end = null;
                const expArr = 'Please input a number';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.getSliceAction(start, end);

                assert.deepEqual(actual, expArr)
            });

            it('should warning user to input a number (undefined, undefined)', () => {
                const array = [];
                const start = undefined;
                const end = undefined;
                const expArr = 'Please input a number';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.getSliceAction(start, end);

                assert.deepEqual(actual, expArr)
            });

            it('should warning user to input a number ("", "")', () => {
                const array = [];
                const start = "";
                const end = "";
                const expArr = 'Please input a number';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.getSliceAction(start, end);

                assert.deepEqual(actual, expArr);
            });

            it('should warning user to input a number ([], [])', () => {
                const array = [];
                const start = [];
                const end = [];
                const expArr = 'Please input a number';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.getSliceAction(start, end);

                assert.deepEqual(actual, expArr);
            });
        });
    });
});
