import styles from './MenuButton.module.scss';

export default function MenuButton({ onClick } : { onClick: () => void}) {
  return (
    <button
      className = {styles.button}
      onClick = {onClick}
    >
      <span className={styles.label}>menu</span>
      <span className={styles.hamburguer}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </span>
    </button>
  )
}
