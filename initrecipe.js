const sql = require('better-sqlite3');
const db = sql('recipes.db');

// Crear tablas
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      user_id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  
    CREATE TABLE IF NOT EXISTS recipes (
      recipe_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      image TEXT,
      summary TEXT NOT NULL,
      instructions TEXT NOT NULL,
      preparation_time INTEGER,
      cooking_time INTEGER,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );
  `);
  
  // Datos de ejemplo
  const dummyUsers = [
    {
      username: 'chef_juan',
      email: 'juan@example.com',
      password_hash: '$2a$10$N9qo8uLOickgx2ZMRZoMy.Mr/.YJY4.0eSBJ0VJv7sVt6Q5uTBlK6' // hash de "password123"
    },
    {
      username: 'maria_cocina',
      email: 'maria@example.com',
      password_hash: '$2a$10$N9qo8uLOickgx2ZMRZoMy.Mr/.YJY4.0eSBJ0VJv7sVt6Q5uTBlK6'
    }
  ];
  
  const dummyRecipes = [
    {
      user_id: 1,
      title: 'Panqueques Clásicos',
      slug: 'panqueques-clasicos',
      image: '/images/panqueques.jpg',
      summary: 'Panqueques esponjosos para el desayuno o merienda',
      instructions: `
        1. Mezclar 1 taza de harina, 1 huevo, 1 taza de leche y una pizca de sal.
        2. Cocinar en sartén antiadherente a fuego medio.
        3. Servir con miel o frutas.
      `,
      preparation_time: 10,
      cooking_time: 15
    },
    {
      user_id: 1,
      title: 'Pasta Alfredo',
      slug: 'pasta-alfredo',
      image: '/images/pasta.jpg',
      summary: 'Pasta cremosa con salsa alfredo casera',
      instructions: `
        1. Cocinar pasta al dente.
        2. Preparar salsa con crema, mantequilla y queso parmesano.
        3. Mezclar y servir caliente.
      `,
      preparation_time: 5,
      cooking_time: 15
    },
    {
      user_id: 2,
      title: 'Ensalada César',
      slug: 'ensalada-cesar',
      image: '/images/ensalada.jpg',
      summary: 'Ensalada clásica con aderezo César y crutones',
      instructions: `
        1. Lavar y cortar lechuga romana.
        2. Preparar aderezo con anchoas, ajo y limón.
        3. Añadir crutones y queso parmesano.
      `,
      preparation_time: 15,
      cooking_time: 0
    }
  ];
  
  // Poblar la base de datos
  function initData() {
    try {
      // Insertar usuarios
      const insertUser = db.prepare(`
        INSERT INTO users (username, email, password_hash)
        VALUES (@username, @email, @password_hash)
      `);
      
      dummyUsers.forEach(user => insertUser.run(user));
  
      // Insertar recetas
      const insertRecipe = db.prepare(`
        INSERT INTO recipes (
          user_id, title, slug, image, summary, instructions,
          preparation_time, cooking_time
        ) VALUES (
          @user_id, @title, @slug, @image, @summary, @instructions,
          @preparation_time, @cooking_time
        )
      `);
      
      dummyRecipes.forEach(recipe => insertRecipe.run(recipe));
  
      console.log('Base de datos poblada exitosamente!');
      
      // Mostrar datos insertados
      console.log('Usuarios:', db.prepare('SELECT * FROM users').all());
      console.log('Recetas:', db.prepare('SELECT * FROM recipes').all());
      
    } catch (error) {
      console.error('Error al poblar la base de datos:', error);
    }
  }
  
  initData();