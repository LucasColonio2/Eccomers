import CartWidget from './CartWidget';
import styles from './Navbar.module.css';

export default function Navbar (){
     return(

         <nav className={styles.Navegador}> 
            
            <h1 className={styles.Logo}>KAZEOVER</h1>

            <ul className={styles.Categorias}> 
                <li> <a href="#">Mujeres</a> </li>  
                <li> <a href="#">Hombres</a>  </li>
                <li> <a href="#">Ninos</a>  </li>
                <li> <a href="#">Bebes</a>  </li>
            </ul>

            <div className={styles.Iconcarrito}>
            
            <CartWidget />

            <span className={styles.Badge}>3</span>
            
            </div>
            
            </nav>
     )
}
