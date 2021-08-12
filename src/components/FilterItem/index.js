import classNames from "classnames";
import Icon from "components/Icon";
import styles from "./styles.module.scss";
import IconTheme from "../Icon/IconTheme";
import itemBackground from "../../data/backgrounds/highlight-menu-add-event-or-bet.svg";

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
            <div className={styles.filter_item___circle}>
                <div className={styles.filter_item___circle___icon}>
                    <Icon iconType={icon} iconTheme={IconTheme.black} />
                </div>
                <div
                    className={styles.filter_item___circle___background}
                    style={{ backgroundImage: `url('${itemBackground}')` }}
                />
            </div>
            <span className={styles.filter_item___label}>{label}</span>
        </div>
    );
}
