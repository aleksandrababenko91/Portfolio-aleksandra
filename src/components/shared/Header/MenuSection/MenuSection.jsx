import styles from './menu.module.scss';
import Links from '../../Links/Links';
import { navLinks } from './constants';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

export default function MenuSection () {
  return(

    <ul className={styles.menu}>
      {navLinks.map(({url, name, image}) => (
        <li key={uuidv4()}> 
          <Links 
            url={url}>
            {name}
            <Image 
              src={image}  
              width={30} 
              height={30}/>
          </Links>
        </li>
      ))}
    </ul>
  )
}