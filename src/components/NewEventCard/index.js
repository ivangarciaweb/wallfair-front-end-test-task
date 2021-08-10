import styles from "./styles.module.scss";
import Tags from "../Tags";

const NewEventCard = ({ onClick, image, title, hot, tags, eventStart }) => {
    const getEventCardStyle = () => {
        return {
            backgroundImage: 'url("' + image + '")',
        };
    };
    return (
        <div className={styles.event_card} onClick={onClick}>
            <div
                className={styles.event_card___background}
                style={getEventCardStyle()}
            />
            <div className={styles.event_card___content}>
                <div>
                    <span className={styles.title}>{title}</span>
                    <Tags tags={tags} />
                </div>
            </div>
        </div>
    );
};

export default NewEventCard;
