import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ReceipeListContainer } from "./components/styledRecipeComponent"
import { Header, Container, AppNameComponent, AppIcon, SearchComponent } from "./components/headerComponent"
import RecipeComp from './components/RecipeComponent';
import AppIcoHeader from "./Images/hamburger.svg"
import AppIco from "./Images/food.png"


const APP_ID = "7ad30477"
const APP_KEY = "88a65528abc013c109c4ec4bdd8946fc"

const Placeholder = styled.img`
    max-width:20%;
    margin:8rem;
    opacity:70%;
    @media only screen and (max-width: 600px){
      max-width:50%;
    }
`

function App() {

  const [timeOutId, setTimeOutId] = useState()
  const [recipeList, updateRecipeList] = useState([])

  const fetchReceipe = async (searchString) => {
    const res = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // console.log(res)
    updateRecipeList(res.data.hits)
  }

  const onTextChange = (e) => {
    clearTimeout(timeOutId)
    const timeOut = setTimeout(() => fetchReceipe(e.target.value), 500)
    setTimeOutId(timeOut)
    // console.log("API Call")
  }

  return (
    <Container className="App">
      <Header>
        <AppNameComponent>
          <AppIcon src={AppIcoHeader} alt='Recipe_img' />
          Recipe Finder
        </AppNameComponent>

        <SearchComponent>
          <AiOutlineSearch />
          <input type="text" placeholder="Search here...i.e-shake,kaju,badam" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <ReceipeListContainer>
        {
          recipeList.length ? recipeList.map(recipeObj => (<RecipeComp recipeObj={recipeObj.recipe} />))
            : <Placeholder src={AppIco} alt='img' />
        }
      </ReceipeListContainer>
    </Container>
  );
}
export default App;
