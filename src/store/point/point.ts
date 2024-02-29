import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Todo {
	id : number,
	todo : string,
}

export interface TodoList {
	todoList : Todo[]
}

const initialState : TodoList = {
	todoList: []
}

let nextId = 1;

export const point = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: {
			reducer:(state, action:PayloadAction<Todo>) => {
				state.todoList = [...state.todoList, action.payload]
			},
			prepare : (todo : string) => ({
				payload : {
					id: nextId++,
					todo
				}
			})
		},
			deleteTodo : (state, action:PayloadAction<number>) => {
				state.todoList = state.todoList.filter((item) => item.id !== action.payload)
			},
	}
})

export const { addTodo, deleteTodo } = point.actions