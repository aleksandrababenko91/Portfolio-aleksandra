import styles from '../ToolsCard/ToolsCard.module.scss';

export default function ToolsCard ({item}) {
  const {img, title, width, height} = item;

  return (
    <div className={styles.card}>
      {title}
      <img
      src={img}
      width={width}
      height={height}
      alt={title}
      />
    </div>
  )
}