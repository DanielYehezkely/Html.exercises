const objective = {
  lastname: 'yehezkely',
    name: 'daniel'
}

const swapObj = (objective) => {
    const result = {};
    for (const key in objective) {
      result[objective[key]] = key;
    }
    return result;
  };
  console.log(swapObj(objective));
  