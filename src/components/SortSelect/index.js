import { useState } from "react";
import classNames from "classnames";
import Icon from "components/Icon";
import styles from "./styles.module.scss";
import IconType from "../Icon/IconType";
import IconTheme from "../Icon/IconTheme";

import { sortOptions } from "../../helper/TestExampleData";

export default function SortSelect({ onSelect, currentOption }) {
    const [showList, setShowList] = useState(false);
    const renderFiltersList = () => {
        return sortOptions.map((option, index) => {
            const classesOption = classNames({
                [`${styles.sort_select___list___option}`]: true,
                [`${styles.sort_select___list___active}`]:
                    option.value === currentOption.value,
            });
            const { label, value } = option;
            return (
                <div
                    className={classesOption}
                    key={index}
                    onClick={() => onSelect(option)}
                >
                    {label}
                </div>
            );
        });
    };
    const classesIcon = classNames({
        [`${styles.sort_select___content___icon}`]: true,
        [`${styles.sort_select___content___active}`]: showList,
    });
    const classesList = classNames({
        [`${styles.sort_select___list}`]: true,
        [`${styles.sort_select___show}`]: showList,
    });
    const classesOverlay = classNames({
        [`${styles.sort_select___overlay}`]: true,
        [`${styles.sort_select___no_show}`]: !showList,
    });
    return (
        <>
            <div className={styles.sort_select}>
                <div
                    className={styles.sort_select___content}
                    onClick={() => setShowList(!showList)}
                >
                    <span className={styles.sort_select___content___label}>
                        Sort by:
                    </span>
                    <div
                        className={
                            styles.sort_select___content___current_option
                        }
                    >
                        {currentOption.label}
                    </div>
                    <div className={classesIcon}>
                        <Icon
                            iconType={IconType.arrowDown}
                            iconTheme={IconTheme.whiteFill}
                        />
                    </div>
                </div>
                <div className={classesList}>{renderFiltersList()}</div>
            </div>
            <div
                className={classesOverlay}
                onClick={() => setShowList(false)}
            ></div>
        </>
    );
}
