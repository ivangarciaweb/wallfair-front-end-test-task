import React from "react";
import styles from "./styles.module.scss";
import HotBetBadgeTheme from "./HotBetBadgeTheme";
import classNames from "classnames";
import SelectionHelper from "../../helper/SelectionHelper";

const HotBetBadge = ({
    className,
    text = "Hot trade",
    theme = HotBetBadgeTheme.opacity01,
}) => {
    return (
        <div
            className={classNames(
                styles.hotBetBadge,
                SelectionHelper.get(theme, {
                    [HotBetBadgeTheme.opacity01]: styles.hotBetBadge01,
                    [HotBetBadgeTheme.opacity04]: styles.hotBetBadge04,
                }),
                className
            )}
        >
            🔥 {text}
        </div>
    );
};

export default HotBetBadge;
