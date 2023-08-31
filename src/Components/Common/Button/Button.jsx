import styles from './Button.module.scss';

// Button (obj)
// Button ({text,active},type,onClick)

export function Button({ text,onClick,type, active = true }) {
  let btnStyles = active ? styles.btn__primary : styles.btn__secondary;
  return <button className={`${styles.btn} ${btnStyles}`}
  type={type} onClick={onClick}>{text}</button>;
}
