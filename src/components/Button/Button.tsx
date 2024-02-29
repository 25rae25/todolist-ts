import styled from 'styled-components';


interface ButtonProps {
	childern: string;
	onClick?:()=> void;
}

const Button = ({ childern, onClick }:ButtonProps) => {
	return(
		<ButtonContainer onClick={onClick}>{childern}</ButtonContainer>
	)
}

export default Button

const ButtonContainer = styled.button`
	width:100px;
	height: 50px;
	border : 1px solid black;
	border-radius: 10px;
`
