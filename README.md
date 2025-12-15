# Kazeover Ecommerce (React SPA)

Ecommerce **SPA** de tecnología desarrollado con **React + Vite** y **Firebase (Firestore)**.

---

## Categorías
- Portátiles
- Consolas
- Tablets
- Móviles
- Smartwatches

---

## Tecnologías y dependencias

### Core
- **React**  
  https://react.dev/
- **React DOM**  
  https://react.dev/reference/react-dom
- **Vite**  
  https://vite.dev/

### Routing
- **React Router**  
  https://reactrouter.com/

### UI
- **Bootstrap**  
  https://getbootstrap.com/
- **React Bootstrap**  
  https://react-bootstrap.github.io/
- **Material UI (MUI)**  
  https://mui.com/material-ui/
- **MUI Icons**  
  https://mui.com/material-ui/material-icons/
- **Emotion (styling)**  
  https://emotion.sh/docs/introduction

### Backend / BaaS
- **Firebase**  
  https://firebase.google.com/docs
- **Cloud Firestore**  
  https://firebase.google.com/docs/firestore

### UX
- **react-hot-toast**  
  https://react-hot-toast.com/

### Calidad (dev)
- **ESLint**  
  https://eslint.org/
- **@vitejs/plugin-react**  
  https://github.com/vitejs/vite-plugin-react

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
  name: "Portátiles"
}
```

### Colección: Productos
```js
{
  categoryId: "mobiles",
  categoryName: "Móviles",
  description: "Super mega potente",
  img: {
    alt: "Iphone 17",
    url: "https://..."
  },
  isActive: true,
  name: "Iphone17",
  price: 2800000,
  stock: 5
}
```

### Colección: orders
```js
{
  buyer: {
    email: "cliente@email.com",
    name: "Nombre Apellido",
    phone: "1122334455"
  },
  date: "2025-12-13T...",
  items: [
    {
      id: "productoId",
      name: "Notebook 15 Full HD",
      description: "Equipo potente y elegante",
      img: "https://...",
      category: "Portátiles",
      count: 1,
      price: 1450000
    }
  ],
  total: 1450000
}
```

---

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

---

## Estructura del proyecto

```txt
src/
  components/
    Navbar/
    ProductCard/
    ProductGrid/
    CartDrawer/
  pages/
    Home/
    Category/
    ProductDetail/
    Checkout/
  context/
    CartContext.jsx
  firebase/
    firebaseConfig.js
    products.service.js
    categories.service.js
    orders.service.js
  utils/
    formatPrice.js
  App.jsx
  main.jsx
```

---

## Capturas
Agregar imágenes en `docs/screenshots/`:

```md
![Home](docs/screenshots/home.png)
![Carrito](docs/screenshots/cart-drawer.png)
![Checkout](docs/screenshots/checkout.png)
![Firestore Productos](docs/screenshots/firestore-products.png)
![Firestore Orders](docs/screenshots/firestore-orders.png)
```
