// Reducer is simple a function that takes in a old state, and an action ==> Return a new state...

// Delete Transaction suppose we have a transaction...

// const transactions = [{ id: 1 }];

const contextReducer = (state, action) => {
  let transaction;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      transaction = state.filter((trans) => trans.id !== action.payload);
      return transaction;
    case "ADD_TRANSACTION":
      transaction = [action.payload, ...state];
      return transaction;
    default:
      return StaticRange;
  }
};

export default contextReducer;
