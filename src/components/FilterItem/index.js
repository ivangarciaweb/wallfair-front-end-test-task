import classNames from "classnames";
import Icon from "components/Icon";
import styles from "./styles.module.scss";

export default function FilterItem({
    active = false,
    label,
    value,
    icon,
    onClick,
}) {
    const classes = classNames({
        [`${styles.filter_item}`]: true,
        [`${styles.active}`]: active,
    });
    return (
        <div className={classes} onClick={() => onClick(value)}>
            <Icon iconType={icon} />
            <span className={styles.filter_item___label}>{label}</span>
        </div>
    );
}
