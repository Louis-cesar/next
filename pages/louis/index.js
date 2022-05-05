import styles from '../../styles/Louis.module.css';
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return{
        props: {    louis: data    }
    }
}

const Louis = ({ louis }) => {
    return ( 
        <div> 
        <h1>All Listing</h1>
        {louis.map(louie => (
            <Link href={'/louis/' + louie.id} key={louie.id}>
                <a className={styles.single}>
                    <h3>{louie.name}</h3>
                </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Louis;