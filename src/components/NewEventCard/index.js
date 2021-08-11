import Tags from "../Tags";
import TimeLeftCounter from "components/TimeLeftCounter";
import HotBetBadge from "components/HotBetBadge";

import styles from "./styles.module.scss";

export default function NewEventCard({
    onClick,
    image,
    title,
    hot,
    tags,
    eventEnd,
}) {
    return (
        <div className={styles.event_card} onClick={onClick}>
            <div
                className={styles.event_card___background}
                style={{ backgroundImage: `url("${image}")` }}
            />
            {hot && (
                <div className={styles.event_card___hot}>
                    <HotBetBadge text="Hot event" />
                </div>
            )}
            <div className={styles.event_card___content}>
                <span className={styles.event_card___content___title}>
                    {title}
                </span>
                <Tags tags={tags} />

                <div className={styles.event_card___content___time_counter}>
                    <span
                        className={
                            styles.event_card___content___time_counter___label
                        }
                    >
                        Events ends in:
                    </span>
                    <TimeLeftCounter endDate={eventEnd} />
                </div>
            </div>
        </div>
    );
}
