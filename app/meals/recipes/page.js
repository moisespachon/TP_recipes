import { getRecipes } from "@/lib/recipes"
import Image from "next/image"
import classes from './page.module.css'

export default async function RecipesPage () {

    const recipes = await getRecipes()


    return(
        <>
            <div className={classes.containerRecipes}>
            {
                recipes.map(recipe => (
                    <div className={classes.card_recipe} key={recipe.recipe_id}>
                        <h3>{recipe.title}</h3>
                        <div className={classes.image}>
                            <Image src={recipe.src} fill/>
                        </div>
                        <p>{recipe.summary}</p>
                        <p>{recipe.user_id}</p>
                    </div>
                ))
            }
            </div>
        </>
    )
}