function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log('${index}: ${element}')
  })
}

function iterate(callback) {
  let ray = [1, 2, 3, 4]
  ray.forEach(callback);
  return ray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
