import ToolsCard from "./ToolsCard/ToolsCard";
import styles from '../ToolsSection/ToolsSection.module.scss';
import { items } from "./items";
import { v4 as uuidv4 } from 'uuid';

export default function ToolsSection () {

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Tools</h1>
      </div>
      <div className={styles.logoContainer}>
        {items.map((item) => (
          <div key={uuidv4()}>
              <ToolsCard  item={item}/>
          </div>
        ))}
      </div>
    </section>
  )
}