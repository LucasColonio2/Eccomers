import CartWidget from './CartWidget';
import styles from '../style/Navbar.module.css';

export default function Navbar({categorias}) {
  

    return (

        <nav className={styles.Navegador}>
            
            <h1 className={styles.Logo}>KAZEOVER</h1>

            <ul className={styles.Categorias}>
                {categorias.map(cat =>(
                    <li href="#"> {cat} </li>
                ) )}
            </ul>

            <div className={styles.Iconcarrito}>


                <CartWidget />
                <span className={styles.Badge}>3</span>

            </div>

        </nav>
    )
}
