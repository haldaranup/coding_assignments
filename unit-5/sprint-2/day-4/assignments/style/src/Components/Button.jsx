
import styled from "styled-components"

const Button = styled.body`
background-color: ${(props) => (props.theme==="light" ? "#f6f53d": "#143f5b") };
border: 1px solid black;
border-radius: 4px;
height: 100%;
padding: 10px;
padding-top: 8px;
text-align: center;
background: ${(props) => (props.theme==="light" ?  "#143f5b" : "#f6f53d") };
color: ${(props) => (props.theme === "light" ? "#143f5b": "#f6f53d") };
cursor: pointer;
margin: 5px;
&:hover {
box-shadow: #02f523 0 3px 8px;
}


`

export { Button };