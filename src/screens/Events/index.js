import _ from "lodash";
import BaseContainerWithNavbar from "../../components/BaseContainerWithNavbar";
import Container from "components/Container";
import NewEventCard from "../../components/NewEventCard";
import BetCard from "../../components/BetCard";
import CarouselContainer from "../../components/CarouselContainer";
import FixedEventCreationIconButton from "../../components/FixedEventCreationIconButton";
import Header from "../../components/Header/index";
import LiveEventCarouselContainer from "../../components/LiveEventCarouselContainer";
import Routes from "../../constants/Routes";
import styles from "./styles.module.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import BetState from "../../components/BetView/BetState";
import { events } from "../../helper/TestExampleData";

const Events = () => {
    const history = useHistory();

    const onEventClick = (eventId, betId = "") => {
        return () => {
            history.push(
                Routes.getRouteWithParameters(Routes.bet, {
                    eventId,
                    betId,
                })
            );
        };
    };

    const renderEventsList = () => {
        return _.map(events, (event, eventIndex) => {
            console.log("event", event);

            return (
                <NewEventCard
                    key={eventIndex}
                    image={event.src}
                    title={event.title}
                    hot={event.hot}
                    tags={event.tags}
                    eventStart={event.eventStart}
                />
            );
        });
    };

    const renderEventCreationButton = () => {
        return <FixedEventCreationIconButton />;
    };

    return (
        <BaseContainerWithNavbar withPaddingTop={true} contentPadding={true}>
            <Container>{renderEventsList()}</Container>
            {/* <Header events={events} /> */}

            {/* <CarouselContainer title={"Events"}>
                {renderMostPopularBets()}
            </CarouselContainer> */}
            {/* {renderEventCreationButton()} */}
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
