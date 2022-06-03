import styled from 'styled-components';
import '../App.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Show() {

    const samList = useSelector(state =>state.post.list)
    
    const textMap = samList.map((value) => (
    <StyledLink to={`/detail/${value.id}`} key={value.id}>
        <Card>
            <TextWrapper>
                <TextDiv>
                    <TextTitle><h3>별명</h3></TextTitle>
                    <TextArea>{value.name}</TextArea>
                </TextDiv>
                <TextDiv>
                    <TextTitle style={{ borderBottom: "1px solid #F8ECD1", borderTop: "1px solid #F8ECD1"}}><h3>단어</h3></TextTitle>
                    <TextArea>{value.word}</TextArea>
                </TextDiv>
                <TextDiv2>
                    <TextTitle><h3>내용</h3></TextTitle>
                    <TextArea>{value.text}</TextArea>
                </TextDiv2>
            </TextWrapper>
        </Card>
    </StyledLink>
    ))

    return (
        <>
            {textMap}
        </>
    )
}

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    color: black;
`;

const Card = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 300px;
    height: 200px;
    margin-bottom: 20px;
    margin-right: 20px;

    background-color: #F8ECD1;
    border: 8px solid  #630000;
    border-radius: 20px;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.2);

    font-family: KyoboHandwriting2020pdy;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextDiv = styled.div`
    width: 300px;
    height: 50px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 2px solid #630000;
`;

const TextDiv2 = styled.div`
    width: 300px;
    height: 100px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 2px solid #630000;
`;

const TextTitle = styled.div`
    width: 80px;
    height: 100%;
    background-color: #630000;

    color: #F8ECD1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextArea = styled.div`
    width: 70%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding-left: 10px;

    font-size: 17px;
    font-weight: bold;
`;
export default Show;