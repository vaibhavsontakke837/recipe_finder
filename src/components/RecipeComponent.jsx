
import { RecipeContainer, CoverImg, ReceipeName, IngredientsText, SeeMoreText } from "./styledRecipeComponent"
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const RecipeComp = (props) => {

    const [show, setShow] = useState(false)

    console.log(props)
    const { recipeObj } = props
    return (
        <>
            <Dialog open={show}>
                <DialogTitle>Ingredients</DialogTitle>
                <DialogContent>
                    <table>
                        <thead>
                            <th>Ingredients</th>
                            <th>Weight</th>
                        </thead>
                        <tbody>
                            {
                                recipeObj.ingredients.map(ingredientObj =>
                                    <tr>
                                        <td>{ingredientObj.text}</td>
                                        <td>{ingredientObj.weight}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <IngredientsText onClick={() => window.open(recipeObj.url)}>See More</IngredientsText>
                    <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
                </DialogActions>
            </Dialog>
            <RecipeContainer>
                <CoverImg src={recipeObj.image} alt='Receipr_img' />
                <ReceipeName>{recipeObj.label}</ReceipeName>
                <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
                <SeeMoreText onClick={() => window.open(recipeObj.url)}>See Complete Receipe</SeeMoreText>
            </RecipeContainer>
        </>
    )
}
export default RecipeComp