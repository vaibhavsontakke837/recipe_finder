import styled from "styled-components"

export const Container = styled.div`
  display:flex;
  flex-direction:column;
`
export const Header = styled.div`

  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;


  color:white;
  background-color:black;
  width:100%;
  font-weight:bold;
  font-size:1.5rem;
  padding:.6rem .5rem;
  box-shadow:0 0.1rem 1rem black;
`

export const AppNameComponent = styled.div`
  display:flex;
  align-items:center;
  margin:0 1rem;
  
`
export const AppIcon = styled.img`
    width:2rem;
    height:2rem;
  margin:0 1rem;
  @media only screen and (max-width: 600px){
    margin-left:-.5rem;
  }
`


export const SearchComponent = styled.div`
    display:flex;
    flex-direction:row;
    background-color:white;
    color:black;
    padding:.5rem;
    border-radius:.3rem;
    width:50%;
    margin-right:50px;
    margin-left:10x;
    @media only screen and (max-width: 600px){
      margin-left:2px;
      margin-right:20px;

    }
    

    & input{
      outline:none;
      border:none;
      margin-right:1rem;
      font-weight:bold;
      font-size:1rem;
      width:100%;

    }
`