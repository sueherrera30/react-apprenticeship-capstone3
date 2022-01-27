import styled from "styled-components";
import palette from "../../themes/palette";

const MainContainer = styled.div`
    width: 400px;
    height: 300px;
    background-color: ${palette.main};
`;

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Textarea = styled.textarea`
    background: ${(props) => props.theme.backgroundColor};
    width: 80%;
    height: 60%;
    color: pink;  
`;

const Button = styled.button`
    border-radius: 20px;
    background-color: ${palette.main};
    background: ${(props) => props.theme.backgroundColor};
    padding: 8px 16px;
    border: transparent;
`;


export { MainContainer, Form, Textarea, Button };