var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var object2 = Object.assign({}, object, {[key]: value});
 return object2;
}
//function updateObjectWithKeyAndValue(obj, key, value) {
  //return Object.assign({}, obj, { [key]: value })
  
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