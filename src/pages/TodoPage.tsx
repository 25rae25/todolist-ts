import styled from "styled-components"
import Input from "../components/Input/\bInput"
import Button from "../components/Button/Button"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { addTodo, deleteTodo } from "../store/slice/slice"


const TodoPage = () => {
	const [todo, setTodo] = useState<string>("");
	const dispatch = useDispatch();
	const todos = useSelector((state : RootState) => state.todos);

	const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
		setTodo(e.target.value);
	}

	const handleTodoInput = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setTodo("");
		if(todo.trim() !== '') {
			dispatch(addTodo(todo))
		}
	}

	const handleDeleteTodo = (id:number) => {
		dispatch(deleteTodo(id))
	}

	return(
		<Wrapper>
			<TodoTitle>TodoList</TodoTitle>
			<TodoForm onSubmit={handleTodoInput}>
				<Input placeholder="input" handleChange={handleChange} value={todo} />
				<Button> add </Button>
			</TodoForm>
			<TodoContainer>
				{todos.todoList.map((item) => (
				<TodoListWrap key={item.id}>
					<TodoList>{item.todo}</TodoList>
					<Button onClick={() => handleDeleteTodo(item.id)}> delete </Button>
				</TodoListWrap>
			))}
			</TodoContainer>
		</Wrapper>
	)
}

export default TodoPage

const Wrapper = styled.div`
	width:100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 0; 
`

const TodoTitle = styled.div`
	margin-bottom: 30px;
	font-weight: bold;
	font-size: 24px;
`

const TodoForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 500px;
	margin-bottom: 15px;
`

const TodoContainer =styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const TodoListWrap = styled.ul`
	width: 700px;
	height: 70px;
	display: flex ;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border: 1px solid #000;
`

const TodoList = styled.li`
	display: flex;
	align-items: center;
`