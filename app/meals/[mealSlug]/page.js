





const MealDetailPage = ({params}) => {
    return(
        <>
            <h1>Just one meal</h1>
            <p>{params.mealSlug}</p>
        </>
    )
}

export default MealDetailPage