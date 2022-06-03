import React, { useRef } from "react";
import { useDispatch } from 'react-redux';
import { postText, addFB } from '../redux/modules/post';
import styled from 'styled-components';
import "../App.css";
import { Link } from 'react-router-dom';



function PostContainer() {

    const nameInput = useRef(null);
    const wordInput = useRef(null);
    const textInput = useRef(null);

    const dispatch = useDispatch();

    const onPostText = () => {
        // dispatch(postText(nameInput.current.value, wordInput.current.value, textInput.current.value))
        dispatch(addFB({name : nameInput.current.value, word: wordInput.current.value, text: textInput.current.value}));
    }

    return (
        <InputContainer>
            <H2>멋진 삼행시를 지어보세요😎</H2>
            <InputDiv>
                <h3>별명 : </h3>
                <Input type="text" placeholder="나의 별명을 입력하세요!" ref={nameInput}/>
            </InputDiv>
            <InputDiv>
                <h3>단어 : </h3>
                <Input type="text" placeholder="어떤 단어로 삼행시를 지을까?" ref={wordInput}/>
            </InputDiv>
            <InputDiv>
                <h3>내용 : </h3>
                <Input type="textarea" placeholder="삼행시를 지어주세요!" ref={textInput}/>
            </InputDiv>
            <InputDiv>
                <StyledLink to={`/`}>
                    <Button onClick={onPostText}>
                        <ButtonSpan>추가하기</ButtonSpan>
                    </Button>
                </StyledLink>
                <StyledLink to={`/`}>
                    <Button><ButtonSpan>취소</ButtonSpan></Button>
                </StyledLink>    
            </InputDiv>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60%;
    padding: 10px;

    border: 7px solid #630000;
    border-radius: 20px;
    background-color: #F8ECD1;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.5);

    font-family: KyoboHandwriting2020pdy;
`;

const H2 = styled.h2`
    font-size: 30px;

    margin: 15px 0px;
`;

const InputDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: 10px 0px;
`;

const Input = styled.input`
    width: 70%;
    height: 60px;

    border: none;
    border-radius: 10px;

    box-shadow: 0px 2px 3px rgba(0,0,0,0.2);

    margin: 0px 10px;

    font-size: 15px;
    text-align: center;
    font-family: KyoboHandwriting2020pdy;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: black;
`;

const Button = styled.div`
    width: 100px;
    height: 50px;

    background-color: #630000;
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0px 20px;

    &:hover{
        background-color: rgba(99, 0, 0, 0.7);
        cursor: pointer;
    }

`;

const ButtonSpan = styled.div`
    color: white;

    font-size: 18px;
    font-weight: bold;

    font-family: KyoboHandwriting2020pdy;
`;


export default PostContainer;