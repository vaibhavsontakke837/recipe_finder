import styled from "styled-components"

export const ReceipeListContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:1.5rem;
padding:2rem;
justify-content:space-around;
`

export const RecipeContainer = styled.div`
display:flex;
flex-direction:column;
gap:.8rem;
padding:1rem;
box-shadow:0 3px 10px 0 #aaa;
width:15rem;
border-radius:.5rem;
`
export const CoverImg = styled.img`
height:10rem;
border-radius:.4rem;


`

export const ReceipeName = styled.span`
font-size:1.2rem;
font-weight:bold;
color:black;
margin:.1rem 0;
`

export const IngredientsText = styled.span`
  font-size:1.1rem;
  font-weight:600;
  border:1px solid green;
  margin: .3rem 0;
  cursor:pointer;
  padding: .6rem 1rem;
  border-radius: .2rem;
  color:green;
  text-align:center;
  margin-bottom:0.3rem;

  &:hover {
    background-color: green;
    color:white;
  }

   
`

export const SeeMoreText = styled(IngredientsText)`
color:#1578F1;
border:1px solid #1578F1;
&:hover {
  background-color: #1578F1;
  color:white;
}
`
