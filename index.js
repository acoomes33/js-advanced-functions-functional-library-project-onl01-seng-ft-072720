const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, cb) {
      const newColl = (coll instanceof Array) ? coll : Object.values(coll)
        for(let i=0;i<newColl.length;i++){
          cb(newColl[i])
        }
        return coll;
    },

    map: function(coll, cb) {
      if (!(coll instanceof Array))
      coll = Object.values(coll)

    const newArr = []

    for (let idx = 0; idx < coll.length; idx++)
      newArr.push(cb(coll[idx]))

    return newArr
    },

    reduce: function(coll, cb, acc) {
      const newColl = (coll instanceof Array) ? coll : Object.values(coll)
        let r = !!acc ? acc : newColl[0]
        let i = !!acc ? 0 : 1

        for (; i<newColl.length; i++){
          r = cb(r,newColl[i], newColl)
        }
        return r;
    },

    find: function(coll, pred){
      const newColl = coll instanceof Array ? coll : Object.values(coll)
      let r = undefined;
      for(let i=0;i<newColl.length;i++){
        if (pred(newColl[i])) {
          r = newColl[i];
          break;
        }
      }
      return r;
    },

    filter: function(coll, pred){
      const newColl = coll instanceof Array ? coll : Object.values(coll)
      let r = [];
      for(let i=0;i<newColl.length;i++){
        if (pred(newColl[i])) {
          r.push(newColl[i]);
        }
      }
      return r;
    },

    size: function(coll) {
      const newColl = coll instanceof Array ? coll : Object.values(coll)
        return newColl.length
    },

    first: function(array, n) {
      return n === undefined ? array[0] : array.slice(0, n)
  
    },

    last: function(array, n){
      return (n === undefined) ? array[array.length-1] : array.slice(array.length-n)

    },

    compact: function(array){
      const newArr = [];
      for(let el of array){
        el ? newArr.push(el) : el
      }
      return newArr
    },

    sortBy: function(array, cb){
      let newArr = [];
      if (typeof array[0] === 'number'){
       newArr = array.sort(cb(function(a, b){return a - b}))
    }
    else {
       newArr = array.sort(cb())
    }
      return newArr
    },

    flatten: function(object) {
      
    },

    uniq: function(arr, isSorted, cb) {
      if (isSorted){

      }
      else{

      }
    },

    keys: function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },

    functions: function(object) {
      return Object.getOwnPropertyNames(object).filter(item => typeof object[item] === 'function')
    },


  }
})()

fi.libraryMethod()


