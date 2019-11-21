import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import LandingImg from "../../src/img/airplanes.jpg";

const Landing = (props) => {

    const Page = styled.div`
        background: white;
        // height: 100vh;
        width: 100%;
        // max-width: 1200px;
        // margin: 0 auto;
        
    `;

    const Welcome = styled.h1`
        font-size: 4rem;
        padding-top: 3%;
        padding-bottom: 1%;
        margin: 0 auto;
        color: white;
        text-shadow: 4px 4px 1px black;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    `;

    const Banner = styled.div`
        background: url(${LandingImg}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100vh;
    `;

    const Holder = styled.div`
        display: flex;
        justify-content: space-around;        
        
    `;

    const Container = styled.div`
        background: #091D86;
        width: 30%;
        height: 275px;
        border: solid black 1px;
        border-radius: 20px;
        margin-top: 4%;
        box-shadow: 10px 10px 5px black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        // @media (max-width: 800px) {
        //     background-color: black;
        // }
    `;

    const Header2 = styled.h2`
        color: #FFCC00;
        font-family: 'Quicksand', sans-serif;
        `;
    const TextContain = styled.div`
        max-height: 70px;
        max-width: 400px;
    `;

    const Paragraph = styled.p`
        font-size: 1rem;
        margin-top: 0;
        letter-spacing: 2px;
        font-family: 'Quicksand', sans-serif;
        `;

    const Button = styled.button`
        background: #FFCC00;
        border-radius: 20px;
        height: 60px;
        width: 170px;
        margin-top: 25%;
        border: solid black 2px;
        font-weight: bold;
        font-size: 1.2rem;
        :hover {
            background: #23972A;
            cursor: pointer;
            box-shadow: 3px 3px 3px black;
        }
    `;

    
    return (

        <Page>
            <Banner>
            <Welcome>Welcome to KidsFly!</Welcome>
            <Holder>
                <Container>
                    <Header2>If You're A Parent!</Header2>
                    <TextContain>
                        <Paragraph>Here at KidsFly, we want your travel experience to be First Class! Click below to Register as a KidsFly Traveller today!</Paragraph>
                    </TextContain>
                    <Link to="/signup">
                        <Button>Parent Click Here!</Button>
                    </Link>
                </Container>
                <Container>
                    <Header2>If You're A Team Member!</Header2>
                    <TextContain>
                        <Paragraph>Here at KidsFly, we only have the best Connection Members! Click below to Register as a KidsFly Team Member today!</Paragraph>
                    </TextContain>
                    <Link to="/connectionReg">
                        <Button>Connect Click Here!</Button>
                    </Link>
                </Container>
            </Holder>

            </Banner>
        </Page>
    )
}

export default Landing;