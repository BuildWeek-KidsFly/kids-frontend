import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import LandingImg from "../../src/img/airplanes.jpg";

const Landing = () => {

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

        @media (max-width: 800px) {
            font-size: 3rem;
        }

        @media (max-width: 500px) {
            font-size: 2.5rem;
        }
    `;

    const Banner = styled.div`
        background: url(${LandingImg}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100vh;

        @media (max-width: 500px) {
            height: 120vh;
        }
    `;

    const Holder = styled.div`
        display: flex;
        justify-content: space-around;  
        
        @media (max-width: 1000px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
    `;

    const Container = styled.div`
        background: #091D86;
        width: 30%;
        height: 17em;
        border: solid black 1px;
        border-radius: 20px;
        margin-top: 4%;
        box-shadow: 10px 10px 5px black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (max-width: 1000px) {
            width: 70%;
            height: 15em;
            margin-top: 2%;
    
        }

        @media (max-width: 500px) {
            height: 16em;
            margin-bottom: 2em;
        }
    `;

    const Header2 = styled.h2`
        color: #FFCC00;
        font-family: 'Quicksand', sans-serif;

        @media (max-width: 500px) {
            font-size: 1em;
        }
        `;

    const TextContain = styled.div`
        max-height: 70px;
        max-width: 400px;

        @media (max-width: 1000px) {
            max-height: 80px;
            max-width: 550px;
        }
    `;

    const Paragraph = styled.p`
        font-size: 1rem;
        margin-top: 0;
        letter-spacing: 2px;
        font-family: 'Quicksand', sans-serif;
        padding: 10px;

        @media (max-width: 500px) {
            padding: 0;
            font-size: .9em;
        }
        `;

    const Button = styled.button`
        background: #FFCC00;
        border-radius: 20px;
        height: 3em;
        width: 9em;
        margin-top: 25%;
        border: solid black 2px;
        font-weight: bold;
        font-size: 1.2em;
        :hover {
            background: #23972A;
            cursor: pointer;
            box-shadow: 3px 3px 3px black;
        }

        @media (max-width: 1000px) {
            margin-top: 0;
        }

        @media (max-width: 800px) {
            margin-top: 10%;
            height: 2.8em;
            width: 8em;
            font-size: 1em;
            border-radius: 17px;
        }

        @media (max-width: 500px) {
            margin-top: 30px;
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