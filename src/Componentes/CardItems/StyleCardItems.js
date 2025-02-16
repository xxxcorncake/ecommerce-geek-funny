import styled from "styled-components";


export const CardConteiner = styled.div`
display: grid;
grid-template-rows: 3fr 1fr 0.5fr;
row-gap: 1em;
max-width: 80%;
background-color: #FFFFFF;
padding: 10px;
box-shadow: 5px 10px 18px #888888;
`

export const ImageCard = styled.img`
width: 100%;
height: 100%;
transition: transform 0.3s;
&:hover {
  transform: scale(1.1);
}
`

export const InfoCard = styled.div`
display: grid;
grid-template-rows: 2fr 1fr;
row-gap: 1em;
;`

export const NameCard = styled.h2`
text-align: center;
color: #301e4e;
text-decoration: 0.2rem solid underline #ff6e6c;
text-underline-offset: 0.5rem;
`
export const PriceCard = styled.h1`
text-align: center;

`
export const CardButton = styled.button`
background-color: #301E4E;
color: #ffffff;
padding: 8px 16px;
border-radius: 5px;
text-transform: uppercase;
font-weight: bold;
border: none;
cursor: pointer;
font-size: 14px;

  &:hover {
    border: 2px bold #000000;
    background-color: #7761E2;
  }

`;
