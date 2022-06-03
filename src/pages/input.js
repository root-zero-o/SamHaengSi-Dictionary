import PostContainer from '../containers/PostContainer';
import styled from 'styled-components';

const Input = () =>{

    return (
        <Wrapper>
            <TextContainer>
                <H1>삼행시 사전</H1>
            </TextContainer>
            <PostContainer/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: #630000; 
    color: #EEEBDD;

    padding: 30px 0px;
    margin-bottom: 50px;

    font-family: Yeongdo;
`;

const H1 = styled.h1`
    font-size: 50px;
`;

export default Input;