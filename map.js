function map(arr, callbackFn) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i]));
  };
  return result;
}


var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));