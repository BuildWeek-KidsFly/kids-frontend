import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import myImage from "../../src/img/airplanes.jpg";

const Landing = (props) => {

    const Page = styled.div`
        background: white;
        height: 100vh;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        
    `;

    const Banner = styled.div`
        background-image: url(${myImage});
        background-size: 80vw auto;
        background-repeat: no-repeat;
        height: 100%;
        margin: 0 10%;
        // border-left: solid black 1px;
        // border-right: solid black 1px;
        
    `;

    const Container = styled.div`
        display: flex;
        justify-content: space-around;
        
    `;

    const ContainerParent = styled.div`
        background: #5963DD;
        width: 35%;
        height: 220px;
        border: solid black 1px;
        border-radius: 20px;
        margin-top: 5%;
        box-shadow: 10px 10px 5px black;
        color: white;
    `;

    const ContainerConnect = styled.div`
        background: #5963DD;
        width: 35%;
        height: auto;
        border: solid black 1px;
        border-radius: 20px;
        margin-top: 5%;
        box-shadow: 10px 10px 5px black;
        color: white;
    `;

    const TextContain = styled.div`
        max-height: 70px;
        max-width: 330px;
    `;

    const Paragraph = styled.p`
        font-size: 1rem;
    
    `;

    const Button = styled.button`
        background: yellow;
        border-radius: 20px;
        height: 50px;
        width: 150px;
        margin: 3%;
    `;

    
    return (

        <Page>
            <Banner>
            <Container>
                <ContainerParent>
                    <h2>If You're A Parent!</h2>
                    <TextContain>
                        <Paragraph>Here at KidsFly, we want your travel experience to be First Class! Click below to Register as a KidsFly Traveller today!</Paragraph>
                    </TextContain>
                    <Button>Parent Click Here!</Button>
                </ContainerParent>
                <ContainerConnect>
                    <h2>If You're A Team Member!</h2>
                    <TextContain>
                        <p>Here at KidsFly, we only have the best Connection Members! Click below to Register as a KidsFly Team Member today!</p>
                    </TextContain>
                    <Button>Team Member Click Here!</Button>
                </ContainerConnect>
            </Container>
            </Banner>
        </Page>
    )
}

export default Landing;