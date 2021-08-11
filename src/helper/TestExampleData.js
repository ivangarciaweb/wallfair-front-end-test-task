import USElection from "../data/images/events/us-election.webp";
import GermanyElection from "../data/images/events/germany-election.jpg";
import Oscars from "../data/images/events/oscar-awards.jpg";
import ElonMusk from "../data/images/events/elon-musk.jpg";
import Nasa from "../data/images/events/nasa.jpg";
import Football from "../data/images/events/psg-vs-bayern.jpg";
import Tokyo2020 from "../data/images/events/tokyo-2020.jpg";
import GermanyFootballTeam from "../data/images/events/germany-football-team.jpg";
import RedBullRampage from "../data/images/events/red-bull-rampage.jpg";
import Dota2 from "../data/images/events/dota-2.jpg";
import MarbleRace from "../data/images/events/marble-olympics.jpg";
import DachshundRace from "../data/images/events/dachshund-race.jpg";

export const eventsList = [
    {
        src: USElection,
        title: "US Election",
        tags: ["politics", "us"],
        eventEnd: 1632383100000,
        hot: true,
    },
    {
        src: GermanyElection,
        title: "Germany Election",
        tags: ["politics", "europe"],
        eventEnd: 1631000700000,
        hot: true,
    },
    {
        src: Oscars,
        title: "Oscar Night 2021",
        tags: ["celebrities"],
        eventEnd: 1638866700000,
    },
    {
        src: ElonMusk,
        title: "SpaceX's Starship launch",
        tags: ["politics", "technology"],
        eventEnd: 1634456700000,
    },
    {
        src: Football,
        title: "PSG vs Bayern München",
        tags: ["football"],
        eventEnd: 1629298680000,
    },
    {
        src: Nasa,
        title: "NASA",
        tags: ["space"],
        eventEnd: 1629923400000,
    },
    {
        src: Tokyo2020,
        title: "Tokyo 2020",
        tags: ["sports"],
        eventEnd: 1631133000000,
    },
    {
        src: RedBullRampage,
        title: "Red Bull Rampage 2021",
        tags: ["downhill", "sports"],
        eventEnd: 1633883400000,
        hot: true,
    },
    {
        src: GermanyFootballTeam,
        title: "UEFA Euro 2020",
        tags: ["football", "euro2020"],
        eventEnd: 1639157400000,
        hot: true,
    },
    {
        src: Dota2,
        title: "Dota 2 World Series",
        tags: ["e-sports", "championship"],
        eventEnd: 1629217800000,
        hot: true,
    },
    {
        src: MarbleRace,
        title: "Marble League 2021",
        tags: ["marble"],
        eventEnd: 1629000800000,
    },
    {
        src: DachshundRace,
        title: "Dachshund Race",
        tags: ["dogs", "races"],
        eventEnd: 1630341000000,
    },
];

export const eventsFilters = [
    {
        icon: "calendar",
        label: "All",
        value: "all",
    },
    {
        icon: "basketball-ball",
        label: "Sports",
        value: "sports",
    },
    {
        icon: "celebrities",
        label: "Celebrities",
        value: "celebrities",
    },
    {
        icon: "politics",
        label: "Politics",
        value: "politics",
    },
    {
        icon: "other",
        label: "Other",
        value: "other",
    },
];
