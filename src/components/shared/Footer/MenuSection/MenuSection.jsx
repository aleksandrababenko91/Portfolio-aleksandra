import styles from './menu.module.scss';
import Links from '../../Links/Links';
import { navLinks } from './constants';
import { v4 as uuidv4 } from 'uuid';

export default function MenuSection () {
  return(

    <ul className={styles.menu}>
      {navLinks.map(({url, name, text}) => (
        <li key={uuidv4()}> 
          <Links url={url} >{name} {text}</Links>
        </li>
      ))}
    </ul>
  )
}