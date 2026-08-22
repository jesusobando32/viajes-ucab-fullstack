# ✈️ BDD-Proyect - Sistema de Gestión de Turismo y Viajes

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

Una plataforma integral full-stack para la gestión de paquetes turísticos, reservas, pagos y reportes. Construida con una arquitectura cliente-servidor, proporciona una experiencia de usuario moderna junto con un backend robusto apoyado en bases de datos relacionales complejas y tareas programadas automáticas.

## 🚀 Características Principales

*   **Gestión Integral de Viajes:** Catálogo de paquetes turísticos, vuelos, cruceros, hoteles y actividades.
*   **Procesamiento de Pagos y Reservas:** Sistema de carritos, wishlist y checkout completo.
*   **Automatización de Procesos (Cron Jobs):** Ejecución en segundo plano para aplicar moras diarias automáticamente.
*   **Generación de Reportes PDF:** Integración con `jsreport` y `pdfmake` para la creación de reportes analíticos e itinerarios.
*   **Base de Datos Compleja:** Uso avanzado de PostgreSQL con Triggers, Procedimientos Almacenados y un esquema normalizado.

## 📸 Galería del Proyecto

A continuación, un vistazo a la interfaz principal y los paneles de gestión:

<div align="center">
  <img src="./docs/mainMenu.png" alt="Menú Principal" width="48%">
  <img src="./docs/dashboardViajero.png" alt="Dashboard Viajero" width="48%">
</div>
<br>
<div align="center">
  <img src="./docs/login.png" alt="Pantalla de Login" width="48%">
  <img src="./docs/panelAdminReportes.png" alt="Panel Admin de Reportes" width="48%">
</div>

## 🛠️ Stack Tecnológico

### Frontend
*   **Framework:** Vue 3 (Composition API)
*   **Build Tool:** Vite
*   **Enrutamiento:** Vue Router
*   **Peticiones HTTP:** Axios

### Backend
*   **Entorno:** Node.js
*   **Framework:** Express.js
*   **Reportes:** jsreport & pdfmake
*   **Tareas Programadas:** node-cron

### Base de Datos
*   **Motor:** PostgreSQL (pg)

## ⚙️ Instrucciones de Instalación y Uso (Desarrollo Local)

### 📸 Modo "Solo Frontend" (Para Capturas de Pantalla)
Si no tienes PostgreSQL instalado y solo quieres levantar la interfaz gráfica (UI) para tomar capturas para tu portafolio, puedes correr el frontend de forma independiente:
1. Abre una terminal en la raíz del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:5173` en tu navegador.
*(Nota: Al no estar conectado el backend, la información dinámica de la base de datos no cargará, pero podrás navegar por la estructura de las vistas y componentes para tomar tus fotos).*

---

### 🖥️ Instalación Full-Stack (Frontend + Backend + DB)

#### Prerrequisitos
- [Node.js](https://nodejs.org/) (v20 o superior recomendado)
- [PostgreSQL](https://www.postgresql.org/) (v14 o superior)

### 1. Configuración de la Base de Datos
1. Abre tu terminal de PostgreSQL (psql) o PgAdmin.
2. Crea la base de datos `prueba_nueva`.
3. Ejecuta los scripts ubicados en la carpeta `db-related-stuff/unified/final` en el siguiente orden:
   - `create.sql`
   - `alter.sql`
   - `insert.sql`

*Nota: Actualmente las credenciales de la DB están hardcodeadas en `backend/config/db.js`. Asegúrate de que coincidan con tu usuario/contraseña o modifícalas.*

### 2. Configuración del Backend
1. Abre una terminal y navega a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   node server.js
   ```
   *El servidor correrá en `http://localhost:3000`.*

### 3. Configuración del Frontend
1. Abre otra pestaña en la terminal en la raíz del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la URL proporcionada por Vite en tu navegador (usualmente `http://localhost:5173`).
