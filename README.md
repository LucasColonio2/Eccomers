# Ecommerce React App SPA

Ecommerce **SPA** de tecnología desarrollado con **React + Vite** y **Firebase (Firestore)**.

## SPA link :https://ecommercekazeover.vercel.app/

## Categorías
- Portátiles
- Consolas
- Tablets
- Móviles
- Smartwatches

---

## Tech Stack

### Frontend
- **React (UI) + Vite (build/tooling)**   
https://react.dev/
- **React Bootstrap + MUI (UI)**
  https://react-bootstrap.github.io/
  https://mui.com/material-ui/
- **Context API (or Redux) for global state (cart + auth)**

### Routing
- **React Router (routing)**
https://reactrouter.com/


### Backend / BaaS
- **Firebase**  
  https://firebase.google.com/docs
- **Cloud Firestore**  
  https://firebase.google.com/docs/firestore


### Tooling & Quality
- Vite
- npm


---

## Funcionalidades

### Productos
- Listado de productos desde Firestore.
- Cards con imagen, nombre, descripción y precio.
- Layout responsive.

### Filtro por categorías
- Menú desplegable “CATEGORIAS”.
- Filtrado por `categoryId` / `categoryName`.

### Detalle de producto
- Vista individual por ID.
- Opción de agregar al carrito.

### Carrito (Drawer lateral)
- Drawer desde el ícono del carrito.
- Ver productos agregados.
- Acciones:
  - Sumar cantidad
  - Restar cantidad
  - Eliminar producto
- Botones:
  - Vaciar carrito
  - Finalizar compra
- Cálculo automático del total.

### Checkout
- Formulario con:
  - Email
  - Nombre
  - Número de celular
- Al confirmar:
  - Se crea una orden en Firestore (`orders`).

---

## Modelo de datos (Firestore)

### Colección: Categorias
```js
{
  id: "portatiles",        // slug (used for routing & queries)
  name: "Portátiles"       // display 
}

### Colección: Productos
```js
{
  categoryId: "mobiles",   // references Categories.id
  categoryName: "Móviles", // UI only
  name: "Iphone 17",
  description: "Super mega potente",
  img: {
    alt: "Iphone 17",
    url: "https://..."
  },
  price: 2800000,
  stock: 5,
  isActive: true
}
```

### Colección: orders
```js
{
  buyer: {
    email: "cliente@email.com",
    name: "Nombre Apellido",
    phone: "1123456789"
  },
  items: [
    {
      id: "abc123",
      name: "Iphone 17",
      price: 2800000,
      quantity: 1
    }
  ],
  total: 2800000,
  createdAt: Timestamp
}
```


## 🚀 Getting Started

### Setup & Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/LucasColonio2/Eccomers
   cd Eccomers
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```
---

## Project Structure

- **src/**
  - **assets/** — Recursos estáticos (imágenes, íconos)
  - **components/** — Componentes UI y contenedores
    - `Navbar.jsx`
    - `NavBarContainer.jsx`
    - `ItemList.jsx`
    - `ItemListContainer.jsx`
    - `ItemDetail.jsx`
    - `ItemDetailContainer.jsx`
    - `CartDrawer.jsx`
    - `CartContainer.jsx`
    - `CartWidget.jsx`
    - `Checkout.jsx`
    - `Footer.jsx`
  - **context/** — Estado global (React Context)
    - `CartContext.jsx`
    - `CartProvider.jsx`
  - **firebase/** — Configuración Firebase + capa de acceso a datos
    - `config.js`
    - `db.js`
  - **hoc/** — Higher Order Components
    - `withLoading.jsx`
  - **style/** — Estilos (CSS Modules)
    - `Navbar.module.css`
    - `Footer.module.css`
  - **utils/** — Utilidades/helpers
    - `formatPrice.js`
  - `App.jsx` — Root de la app + routing
  - `main.jsx` — Entry point (Vite)
  - `index.css` — Estilos globales


---

## Screenshots

### Home / Product Listing
Vista principal con listado de productos y acceso a categorías y carrito.
![Home](/src/docs/screenshots/home.png)


### Category Filtering
Filtrado de productos por categoría utilizando rutas dinámicas.
![Category](/src/docs/screenshots/category.png)

### Product Detail
Vista de detalle del producto con información completa, selector de cantidad y acción de agregar al carrito.

![Product Detail](/src/docs/screenshots/product-detail.png)



### Cart Drawer
Drawer lateral con productos agregados al carrito, control de cantidades y total.
![Carrito](/src/docs/screenshots/cart-drawer.png)
![Carrito](/src/docs/screenshots/cart-drawer2.png)


### Checkout
Formulario de checkout con validación y generación de orden en Firestore.
![Checkout](/src/docs/screenshots/checkout.png)


### Order Persistence (Firestore)
Ejemplo de orden persistida en Firestore luego de completar el checkout.
![Firestore Orders](/src/docs/screenshots/firestore-orders.png)


## SPA link :https://ecommercekazeover.vercel.app/