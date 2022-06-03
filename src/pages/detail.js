import React from 'react';
import styled from 'styled-components';
import ShowDetail from '../components/ShowDetail';

import '../App.css';

function Detail() {
  return (
    <>
        <Wrapper>
            <TextContainer>
                <H1>삼행시 사전</H1>
            </TextContainer>
            <H3>삼행시 상세페이지</H3>
            <ShowDetail/>
        </Wrapper>
    </>
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

const H3 = styled.h3`
    font-size: 25px;
    font-family: "KyoboHandwriting2020pdy";
    font-weight: bold;

    margin-bottom: 40px;
`;

export default Detail;
