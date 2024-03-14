import styles from "./input.module.css";
export default function Input({ name, value, onChange, error }) {
  const placeholder = name === "day" ? "DD" : name === "month" ? "MM" : "YY";

  return (
    <>
      <div className={styles.inputContainer}>
        <label
          className={
            error ? `${styles.label} ${styles.error}` : `${styles.label}`
          }
          htmlFor={name}
        >
          {name}
        </label>
        <input
          className={styles.input}
          name={name}
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <p className={styles.errorText}>{error && error}</p>
      </div>
    </>
  );
}
