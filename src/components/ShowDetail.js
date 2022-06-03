import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSamFB, deleteFB } from '../redux/modules/post';

function ShowDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadSamFB()); 
    }, [])
 
    const mySamList = useSelector(state => state.post.list);

    const mySam = useParams();
    const mySamId = mySam.detail

    const nowSam = mySamList.filter(value => mySamId === value.id)[0];
    
    const onDeleteBtn = () => {
        dispatch(deleteFB(mySamId));
        navigate("/")
    }
    
  return (
    <>
        <Card>
            <TextWrapper>
                <TextDiv>
                    <TextTitle><H3>별명</H3></TextTitle>
                    <TextArea>{nowSam.name}</TextArea>
                </TextDiv>
                <TextDiv>
                    <TextTitle style={{ borderBottom: "1px solid #F8ECD1", borderTop: "1px solid #F8ECD1"}}><H3>단어</H3></TextTitle>
                    <TextArea>{nowSam.word}</TextArea>
                </TextDiv>
                <TextDiv2>
                    <TextTitle><H3>내용</H3></TextTitle>
                    <TextArea>{nowSam.text}</TextArea>
                </TextDiv2>
            </TextWrapper>
        </Card>
        <BtnContainer>
            <Link to={`/`}>
                <Button><ButtonSpan>홈으로</ButtonSpan></Button>
            </Link>
            <Button onClick={onDeleteBtn}>
                <ButtonSpan>삭제하기</ButtonSpan>
            </Button>
        </BtnContainer>
    </>
  )
}

const Card = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 70%;
    height: 50vh;
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

    width: 100%;
    height: 100%;
`;


const TextDiv = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 2px solid #630000;
`;

const TextDiv2 = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border-bottom: 2px solid #630000;
`;

const TextTitle = styled.div`
    width: 25%;
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

    padding-left: 20px;

    font-size: 25px;
    font-weight: bold;
`;

const H3 = styled.h3`
    font-size: 35px;
    font-weight: bold;
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;
`;

const Button = styled.div`
    width: 130px;
    height: 70px;

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
    font-family: KyoboHandwriting2020pdy;
`;

const ButtonSpan = styled.div`
    color: white;

    font-size: 25px;
    font-weight: bold;
`;

export default ShowDetail;