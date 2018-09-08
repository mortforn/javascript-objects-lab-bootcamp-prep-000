var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var object2 = Object.assign({}, {key: value});
 return object;
}
//Object.assign({}, { foo: 'bar' })
// { foo: 'bar' }
//const object2 = Object.assign({c: 4, d: 5}, object1);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj, {key: value})
  delete newObj.key;
  return newObj;
}