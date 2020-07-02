import { ACTION } from "../actions/todo";

const initialState = {
  task: {}
}
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.EDIT_TASK: {
      return {
        task: Object.assign({}, action.payload),
      }
    }
    case ACTION.CLEAR_TASK: {
      return {
        task: Object.assign({}, action.payload),
      }
    }
    default:
      return state;
  }
};
export default taskReducer;