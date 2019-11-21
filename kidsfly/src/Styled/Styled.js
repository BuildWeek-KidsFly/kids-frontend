import styled from 'styled-components';
import React from 'react';

export const Card = styled.div`
background: #091d86;
width: 400px;
max-height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 80px;
box-shadow: 5px 5px black ;
border: 2px solid #999999;
color: #ffcc00;
`;

export const Button = styled.button`
 border: 2px solid black;
  background-color: #ffcc00;
  color: black;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 16px;
  :hover {
            background: #5963DD;
            cursor: pointer;
            box-shadow: 3px 3px 3px black;
        }

`;

export const Container = styled.div`
display: flex;
justify-content: center;
padding-top: 80px;
`;

export const EditStyle = styled.div`
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        align-items: flex-end;

`;