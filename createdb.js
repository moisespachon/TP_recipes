const sql = require('better-sqlite3');
const db = new sql('recipes.db'); // Esto creará el archivo si no existe

// Ejecutar todas las sentencias CREATE TABLE
db.exec(`
-- Tabla de usuarios
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de recetas
CREATE TABLE recipes (
    recipe_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    image TEXT,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    preparation_time INTEGER,  -- en minutos
    cooking_time INTEGER,      -- en minutos
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
`);

console.log('Base de datos creada correctamente en recipes.db');