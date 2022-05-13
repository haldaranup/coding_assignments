 // { type: , payload: "" }=>Action is a object
// Action Types

export const ADD_TODO = "ADD_TODO";


// Action Creator
export const addTodo = (data) => {
    return {
    type: ADD_TODO,
    payload: data,
    };
    };