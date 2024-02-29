import styled from "styled-components";

interface InputProps {
	placeholder: string,
	value?: string;
	handleChange?:(e: React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = ({ placeholder, handleChange, value }:InputProps) => {
	return(
		<InputContainer>
			<InputText placeholder={placeholder} onChange={handleChange} value={value} />
		</InputContainer>
	)
}

export default Input


const InputContainer = styled.div`
	width:350px;
	height: 60px;
	padding: 8px;
	border : 1px solid #000;
`

const InputText = styled.input`
	width:100%;
	height:100%;
	border: none;
`