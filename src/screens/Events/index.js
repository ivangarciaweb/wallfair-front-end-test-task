import { useState } from "react";
import BaseContainerWithNavbar from "components/BaseContainerWithNavbar";
import Container from "components/Container";
import NewEventCard from "components/NewEventCard";
import PageTitle from "components/PageTitle";
import EventsFilters from "components/EventsFilters";
import { eventsList } from "../../helper/TestExampleData";
import _ from "lodash";
import { connect } from "react-redux";

import styles from "./styles.module.scss";

const Events = () => {
    const [currentFilter, setCurrentFilter] = useState("all");
    const updateCurrentFilter = (filter) => {
        setCurrentFilter(filter);
    };
    const renderEventsList = () => {
        return _.map(eventsList, (event, eventIndex) => {
            return (
                <NewEventCard
                    key={eventIndex}
                    image={event.src}
                    title={event.title}
                    hot={event.hot}
                    tags={event.tags}
                    eventEnd={event.eventEnd}
                />
            );
        });
    };

    console.log("currentFilter", currentFilter);

    return (
        <BaseContainerWithNavbar withPaddingTop={true} contentPadding={true}>
            <PageTitle title="Events" />
            <div className={styles.events___filters}>
                <EventsFilters
                    active={currentFilter}
                    onClick={updateCurrentFilter}
                />
            </div>
            <Container>{renderEventsList()}</Container>
        </BaseContainerWithNavbar>
    );
};

const mapStateToProps = (state) => {
    return {
        events: state.event.events,
        user: state.authentication,
    };
};

export default connect(mapStateToProps, null)(Events);
