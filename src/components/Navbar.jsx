import CartWidget from './CartWidget';
import styles from '../style/Navbar.module.css';
import { Link } from 'react-router';
import { NavDropdown } from 'react-bootstrap';

export default function Navbar({ categorias }) {


    return (

        <nav className={styles.Navegador}>
            <h1 className={styles.Logo}> <Link to="/">KAZEOVER</Link> </h1>
            <NavDropdown title='Categorias'>
                <ul className={styles.Categorias}>
                    {categorias.map(cat => (
                        <Link to={`/category/${cat}`} key={cat}> {cat}   </Link>
                    ))}
                </ul>
            </NavDropdown>

            <div className={styles.Iconcarrito}>
                <CartWidget />
                <span className={styles.Badge}>3</span>
            </div>
        </nav>
    )
}
