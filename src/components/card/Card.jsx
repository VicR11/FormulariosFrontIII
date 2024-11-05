import Counter from '../counter/counter';
import styles from './Card.module.css';

const Card = ({id, name, gender, image, race}) =>{
 return(
    <article  className={styles.card} key={id}>
        <h3 className={styles.titleCard}>{name}</h3>
        <img src={image} alt={name} />
        <div>
            <p>{gender}</p>
            <p>{race}</p>
        </div>
        <Counter/>
    </article>
 )

}

export default Card