import { createSlice,nanoid } from '@reduxjs/toolkit';

const initialState = {
      todos:[{id:"abc",task:"Sample task",isDone:false}],
};
export const todoSclice=createSlice({
      name:"todo",
      initialState,
      reducers:{
            addTodo:(state,action)=>{
                  const newTodo={
                        id:nanoid(),
                        task:action.payload,
                        isDone:false,
                  };
                  state.todos.push(newTodo);
            },
            deleteTodo:(state,action)=>{
                  state.todos=state.todos.filter((todo)=>todo.id != action.payload)
            },
            markAsDone:(state,action)=>{
                  state.todos.map((todo)=>{
                        if(todo.id === action.payload){
                              todo.isDone=true;
                        }
                  })
            }
      }
});

export const {addTodo,deleteTodo,markAsDone}=todoSclice.actions;
export default todoSclice.reducer;