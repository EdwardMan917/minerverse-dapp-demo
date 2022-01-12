const apyReducer = (state = {}, action: { type: any; payload: {[poolId: number]: string}; }) => {
  
  let apy: {[key: number] : string} = Object.assign({}, state);
  
  switch (action.type) {
    case "UPDATE":
      Object.entries(action.payload).forEach((pair: any[]) => {
        const [poolId, currentAPY] = pair;
        apy[poolId] = currentAPY;
      })
      break;
    default:
      break;
  }

  return apy;
};

export default apyReducer;