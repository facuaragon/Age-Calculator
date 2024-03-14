import styles from "./Qr.module.css";

export default function QR() {
  return (
    <>
      <section className={styles.qrChallenge}>
        <h1>QR Challenge</h1>
        <div className={styles.container}>
          <div>
            <img className={styles.qr} src="image-qr-code.png" />
          </div>
          <div className={styles.qText}>
            <p className={styles.title}>
              Improve your front-end skills by building projects
            </p>
            <p className={styles.description}>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
