import sql from 'better-sqlite3'

const db = sql('recipes.db')


export async function getUser() {
    return db.prepare('SELECT * FROM users').all()
}

export async function getRecipes() {
    return db.prepare('SELECT * FROM recipes').all()
}

export async function getRecipeByUser(userID) {
    return db.prepare(`SELECT * FROM recipes WHERE user_id = ${userID}`).all()
}