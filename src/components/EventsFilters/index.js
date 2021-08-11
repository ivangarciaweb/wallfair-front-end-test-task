import FilterItem from "components/FilterItem";
import { eventsFilters } from "../../helper/TestExampleData";

import styles from "./styles.module.scss";

export default function EventsFilters({ active = "all", onClick }) {
    const renderFiltersList = () => {
        return eventsFilters.map((filter, index) => {
            const { label, icon, value } = filter;
            return (
                <FilterItem
                    key={index}
                    active={active === value}
                    label={label}
                    icon={icon}
                    value={value}
                    onClick={onClick}
                />
            );
        });
    };
    return <div className={styles.events_filters}>{renderFiltersList()}</div>;
}
