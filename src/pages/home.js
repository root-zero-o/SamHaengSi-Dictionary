import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Show from '../components/Show';
import {loadSamFB} from '../redux/modules/post';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';


function Home() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadSamFB()); 
    })

    return (
        <Wrapper>
            <TextContainer>
                <H1>삼행시 사전</H1>
                <h3>♥ 삼행시 잘짓는 사람, 매력있을지도? ♥</h3>
            </TextContainer>
            <H3>카드를 클릭하시면 상세페이지로 이동합니다!</H3>
            <Link to={`/input`} style={{textDecoration: "none"}}>
                <ButtonToDetail>+</ButtonToDetail>
            </Link>
            <ShowContainer>
                <Show/>
            </ShowContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: #630000; 
    color: #EEEBDD;

    padding: 55px 0px 40px 0px;
    margin-bottom: 30px;

    font-family: Yeongdo;
`;

const H1 = styled.h1`
    font-size: 60px;

    margin-bottom: 30px;
`;

const H3 = styled.h3`
    font-size: 20px;
    font-family: "KyoboHandwriting2020pdy";
    font-weight: bold;

    margin-bottom: 25px;
`;

const ButtonToDetail = styled.button`
    width: 50px;
    height: 50px;

    border-radius: 50%;
    border: none;

    background-color: #630000;
    color: #EEEBDD;
    box-shadow: 0px 2px 3px rgba(0,0,0,0.2);

    font-size: 40px;
    transition: all ease 1s;

    &:hover{
      transform: rotate(180deg);
      cursor: pointer;
    }

    position: fixed;
    right: 50px;
    bottom: 50px;
`;

const ShowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 100%;
`;

export default Home;