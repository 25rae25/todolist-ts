import styled from 'styled-components';

interface ButtonProps {
	children: string;
	onClick?:()=> void;
}

const Button = ({ children, onClick }:ButtonProps) => {
	return(
		<ButtonContainer onClick={onClick}>{children}</ButtonContainer>
	)
}

export default Button

const ButtonContainer = styled.button`
	width:100px;
	height: 50px;
	border : 1px solid black;
	border-radius: 10px;
`
