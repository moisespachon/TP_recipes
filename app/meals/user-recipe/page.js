import { getUser } from "@/lib/recipes"
import classes from './page.module.css'
import Link from "next/link"



export default async function UserRecipe ()  {

    const chefs = await getUser()

    return(
        <>
            <div className={classes.containerChefs}>
                <h2>Ours Chefs</h2>
            <ul>
                {
                    chefs.map(chef => (
                        <li key={chef.user_id}>
                            <p>{chef.username}:</p>
                            <p>knows recipes: <Link href={`user-recipe/${chef.user_id}`}>Here</Link></p>
                        </li>
                    ))
                }
            </ul>
            </div>
        </>
    )
}