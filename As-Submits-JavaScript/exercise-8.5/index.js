const objective = {
    name: 'daniel',
    lastname: 'yehezkely'
}

const swapObj = (obj) => {
    const result = {};
    for (const key in obj) {
      result[obj[key]] = key;
    }
    return result;
  };
  console.log(swapObj(objective));
  