import Link from "next/link"
import classes from './page.module.css'
import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"

 const MealsPage = async() => {

    const meals = await getMeals()

    return(
        <>
            <header className={classes.header}>
                <h1>Delicius meal, created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself, It easy and fun</p>
                <p className={classes.cta}>
                    <Link href={'/meal/share'}>
                        Share your Fav recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
              <MealsGrid meals={meals}/>
            </main>

        </>
    )
}

export default MealsPage