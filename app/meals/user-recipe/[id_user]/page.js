import { getRecipeByUser } from "@/lib/recipes"
import classes from './page.module.css'
import Image from "next/image"


export default async function RecipeByUser({params}) {

    const chefRecipes = await getRecipeByUser(params.id_user)

    console.log(chefRecipes)

    return(
        <>
            <div className={classes.containerRecipes}>
            {
                chefRecipes.map(recipe => (
                    <>
                        <div className={classes.card_recipe} key={recipe.recipe_id}>
                            <h3>{recipe.title}</h3>
                            <div className={classes.image}>
                                <Image src={recipe.image} fill alt="sometin"/>
                            </div>
                            <p>{recipe.summary}</p>
                            <p>{recipe.user_id}</p>
                        </div>
                    </>
                ))
            }
            </div>
        </>
    )
}