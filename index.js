const recipes = { breakfast: "eggs", lunch: "sandwich", dinner: "lasagna"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}