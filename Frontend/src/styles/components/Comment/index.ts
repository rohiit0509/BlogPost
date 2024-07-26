import styled from "styled-components";

export const CommentWrapper = styled.div`
background-color: #ffffff;
width: 370px;
height: 100vh;
position: absolute;
z-index: 15;
right: 0;
top: 0;
box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
overflow: auto;
overflow-x: hidden;
`
export const CommentTitle = styled.div`
font-size: 20px;
font-weight:500;
`
export const CommentTitleDiv = styled.div`
padding: 25px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const CommentInput = styled.input`
outline: none;
border: none;
width: 100%;
max-width: 340px;
font-size: 15px;
padding: 18px 15px;
margin: 0 15px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
`
export const CommentForm = styled.form`
margin-bottom: 30px;
`

export const CommentContainer = styled.div`
display: flex;
flex-direction: column;
padding: 15px 40px;
gap: 5px;
`
export const Msg = styled.div`
font-size: 14px;
`