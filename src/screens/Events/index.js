import { useState, useEffect } from "react";
import BaseContainerWithNavbar from "components/BaseContainerWithNavbar";
import Container from "components/Container";
import NewEventCard from "components/NewEventCard";
import PageTitle from "components/PageTitle";
import EventsFilters from "components/EventsFilters";
import SearchInput from "components/SearchInput";
import SortSelect from "components/SortSelect";
import { eventsList, eventsFilters } from "../../helper/TestExampleData";
import _ from "lodash";
import { connect } from "react-redux";

import styles from "./styles.module.scss";

const Events = () => {
    const [currentFilter, setCurrentFilter] = useState("all");
    const [newEventList, setNewEventList] = useState(eventsList);
    const [filteredEvents, setFilteredEvents] = useState([]);

    const sortingEvents = () => {};

    const searchingEvents = (searchString) => {
        let searchLower = null;
        searchLower = searchString.toLowerCase();
        if (searchString.length === 0) {
            if (currentFilter === "all") {
                setNewEventList(eventsList);
            } else {
                setNewEventList(filteredEvents);
            }
        } else {
            const eventsAfterSearch = filteredEvents.filter((event) => {
                if (event.title.toLowerCase().includes(searchLower))
                    return true;
            });
            setNewEventList(eventsAfterSearch);
        }
    };

    const filteringEvents = (filter) => {
        setCurrentFilter(filter);
        if (filter === "all") {
            setNewEventList(eventsList);
            setFilteredEvents(eventsList);
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
            setNewEventList(eventsAfterFiltering);
            setFilteredEvents(eventsAfterFiltering);
        } else {
            let eventsAfterFiltering = eventsList.filter((event) => {
                for (let i = 0; i < event.tags.length; i++) {
                    if (event.tags[i] === filter) return true;
                }
            });
            setNewEventList(eventsAfterFiltering);
            setFilteredEvents(eventsAfterFiltering);
        }
    };
    const renderEventsList = () => {
        return _.map(newEventList, (event, eventIndex) => {
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
                        onChange={(e) => {
                            searchingEvents(e.target.value);
                        }}
                    />
                    <SortSelect />
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
