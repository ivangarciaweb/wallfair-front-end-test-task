import styles from "./styles.module.scss";

export default function PageTitle({ title = "home" }) {
    return (
        <div className={styles.page_title}>
            <h2>{title}</h2>
        </div>
    );
}
