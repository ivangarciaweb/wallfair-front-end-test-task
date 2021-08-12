import Icon from "components/Icon";
import styles from "./styles.module.scss";
import IconType from "../Icon/IconType";
import IconTheme from "../Icon/IconTheme";
import { sortOptions } from "../../helper/TestExampleData";

export default function SortSelect({ onChange }) {
    const renderFiltersList = () => {
        return sortOptions.map((option, index) => {
            const { label, value } = option;
            return (
                <div
                    className={styles.sort_select___list___option}
                    key={index}
                    onClick={() => console.log("value", value)}
                >
                    {label}
                </div>
            );
        });
    };
    return (
        <div className={styles.sort_select}>
            <div className={styles.sort_select___current_option}>hola</div>

            <div className={styles.sort_select___list}>
                {renderFiltersList()}
            </div>
        </div>
    );
}
