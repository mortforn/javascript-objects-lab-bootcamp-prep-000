var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 var object2 = Object.assign({}, recipes, {key: value});
 return object2;
}
//function updateObjectWithObject(targetObject, updatesObject) {
 // return Object.assign({}, targetObject, updatesObject)
//}

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