const recipes = { breakfast: "eggs", lunch: "sandwich", dinner: "lasagna"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
