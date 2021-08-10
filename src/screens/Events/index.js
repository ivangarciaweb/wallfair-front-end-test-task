import _ from "lodash";
import BaseContainerWithNavbar from "../../components/BaseContainerWithNavbar";
import NewEventCard from "../../components/NewEventCard";
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
                    userId={event.text}
                    hot={event.hot}
                    eventEnd={event.eventEnd}
                    // onClick={onEventClick(event._id, bet._id)}
                />
            );

            // return _.map(bets, (bet, betIndex) => {
            //     const key = eventIndex + "." + betIndex;
            //     const eventEnd = new Date(_.get(bet, "endDate"));
            //     const tradeState = _.get(bet, "status");

            //     if (tradeState === BetState.active) {

            //     }
            // });
        });
    };

    const renderEventCreationButton = () => {
        return <FixedEventCreationIconButton />;
    };

    console.log("events test", events);

    return (
        <BaseContainerWithNavbar>
            {/* <Header events={events} /> */}
            {/* <LiveEventCarouselContainer /> */}
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
