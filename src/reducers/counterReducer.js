import * as ActionTypes from '../actions/types';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.RESET:
      return initialState;
    case ActionTypes.INCREMENT:
      return {count: state.count + 1};
    case ActionTypes.DECREMENT:
      return {count: state.count - 1};
    default:
      return state
  }
};

export default reducer;