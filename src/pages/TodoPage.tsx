import styled from "styled-components"
import Input from "../components/Input/\bInput"
import Button from "../components/Button/Button"
import { useState } from "react"


const TodoPage = () => {
	const [todo, setTodo] = useState<String>("");


	const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
		setTodo(e.target.value);
	}


	return(
		<Wrapper>
			<TodoTitle>TodoList</TodoTitle>
			<TodoForm>
				<Input placeholder="input" handleChange={handleChange} value={todo as string} />
				<Button> add </Button>
			</TodoForm>
			<TodoContainer>
				<TodoListWrap>
					<TodoList>
						<Button> delete </Button>
					</TodoList>
				</TodoListWrap>
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
	justify-content: end;
	padding: 10px;
	border: 1px solid #000;
`

const TodoList = styled.li`
	display: flex;
	align-items: center;
`