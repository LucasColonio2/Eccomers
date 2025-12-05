import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBotpkOmfFjGsGwHJB-RCBkxuLa79Gr4S4",
  authDomain: "kazeover-ecommerce.firebaseapp.com",
  projectId: "kazeover-ecommerce",
  storageBucket: "kazeover-ecommerce.firebasestorage.app",
  messagingSenderId: "1075226294962",
  appId: "1:1075226294962:web:ecbd03ca75fa050fe4a7ab"
};

export const app = initializeApp(firebaseConfig);