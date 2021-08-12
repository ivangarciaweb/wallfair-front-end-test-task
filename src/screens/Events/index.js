import { useState, useEffect } from "react";
import BaseContainerWithNavbar from "components/BaseContainerWithNavbar";
import Container from "components/Container";
import NewEventCard from "components/NewEventCard";
import PageTitle from "components/PageTitle";
import EventsFilters from "components/EventsFilters";
import SearchInput from "components/SearchInput";
import { eventsList, eventsFilters } from "../../helper/TestExampleData";
import _ from "lodash";
import { connect } from "react-redux";

import styles from "./styles.module.scss";

const Events = () => {
    const [currentFilter, setCurrentFilter] = useState("all");
    const [filteredEvents, setEventsFiltered] = useState(eventsList);

    const filteringEvents = (filter) => {
        setCurrentFilter(filter);
        if (filter === "all") {
            setEventsFiltered(eventsList);
        } else if (filter === "other") {
            let newArrayFilters = eventsFilters.filter((filter) => {
                if (filter.value !== "all" && filter.value !== "other")
                    return true;
            });
            let eventsAfterFiltering = eventsList.filter((event) => {
                for (let i = 0; i < event.tags.length; i++) {
                    for (let j = 0; j < newArrayFilters.length; j++) {
                        if (event.tags[i] === newArrayFilters[j].value)
                            return false;
                    }
                }
                return true;
            });
            setEventsFiltered(eventsAfterFiltering);
        } else {
            let eventsAfterFiltering = eventsList.filter((event) => {
                for (let i = 0; i < event.tags.length; i++) {
                    if (event.tags[i] === filter) return true;
                }
            });
            setEventsFiltered(eventsAfterFiltering);
        }
    };
    const renderEventsList = () => {
        return _.map(filteredEvents, (event, eventIndex) => {
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

    useEffect(() => {
        filteringEvents(currentFilter);
    }, []);

    return (
        <BaseContainerWithNavbar withPaddingTop={true} contentPadding={true}>
            <PageTitle title="Events" />
            <div className={styles.events___filters}>
                <EventsFilters
                    active={currentFilter}
                    onClick={filteringEvents}
                />
                <div className={styles.events___filters___search_sort}>
                    <SearchInput
                        placeholder="Search..."
                        onChange={(e) => console.log("value", e.target.value)}
                    />
                </div>
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
