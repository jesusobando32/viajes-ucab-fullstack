const { Pool } = require('pg');

// La conexión se configura con las variables de entorno estándar de PostgreSQL
// (PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT). Ver README.
const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'viajes_ucab',
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT) || 5432,
});

module.exports = pool;
