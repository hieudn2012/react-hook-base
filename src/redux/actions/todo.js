export const ACTION = {
  EDIT_TASK: 'EDIT_TASK',
  CLEAR_TASK: 'CLEAR_TASK',
}

export const setTastEdit = (task) => {
  return {
    type: ACTION.EDIT_TASK,
    payload: task,
  }
}

export const clearTaskEdit = () => {
  return {
    type: ACTION.CLEAR_TASK,
    payload: {},
  }
}