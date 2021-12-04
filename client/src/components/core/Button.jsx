import styled from 'styled-components';

const StyledButton = styled.button`
	all: unset;
	text-align: center;
	background-color: var(--accent);
	color: white;
	padding: 4px 8px;
	margin-bottom: 8px;
	height: 20px;
`;
function Button({ children }) {
	return <StyledButton>{children}</StyledButton>;
}

export default Button;
