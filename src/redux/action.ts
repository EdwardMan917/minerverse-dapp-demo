export const updateAPY = (payload: any) => {
  return {
    type: "UPDATE",
    payload
  };
};

export const updateAccount = (payload: string) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload
  };
}

export const updateProvider = (payload: any) => {
  return {
    type: "UPDATE_PROVIDER",
    payload
  };
}

export const updateSigner = (payload: any) => {
  return {
    type: "UPDATE_SIGNER",
    payload
  };
}