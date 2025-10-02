import Logo from '../components/logo/Logo'
import NavBar from '../components/NavBar/NavBar'
import styles from './Header.module.css'

export default function Header(){
    return <div className={styles.card}>
    <Logo />
    <NavBar/>
    </div>
}