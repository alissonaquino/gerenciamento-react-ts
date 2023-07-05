import styles from "../styles/header.module.css"
import Link from 'next/link'

function Header(){
    return <div className={styles.shape}>
        <Link href="/">Home</Link>
        <Link href="/">Create</Link>
        <Link href="/">Delete</Link>
        <Link href="/">View</Link>
        <Link href="/">Update</Link>
    </div>
}

export default Header