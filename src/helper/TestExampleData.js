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

export const events = [
    {
        src: USElection,
        text: "US Election",
        tags: ["#politics", "#us"],
        eventEnd: 1632383100000,
    },
    {
        src: GermanyElection,
        text: "Germany Election",
        tags: ["#politics", "#europe"],
        eventEnd: 1631000700000,
    },
    {
        src: Oscars,
        text: "Oscar Night 2021",
        tags: ["#celebrities"],
        eventEnd: 1638866700000,
    },
    {
        src: ElonMusk,
        text: "SpaceX's Starship launch",
        tags: ["#politics", "#technology"],
        eventEnd: 1634456700000,
    },
    {
        src: Football,
        text: "PSG vs Bayern München",
        tags: ["#football"],
        eventEnd: 1629298680000,
    },
    {
        src: Nasa,
        text: "NASA",
        tags: ["#space"],
        eventEnd: 1629923400000,
    },
    {
        src: Tokyo2020,
        text: "Tokyo 2020",
        tags: ["#sports"],
        eventEnd: 1631133000000,
    },
    {
        src: RedBullRampage,
        text: "Red Bull Rampage 2021",
        tags: ["#downhill", "#sports"],
        eventEnd: 1633883400000,
    },
    {
        src: GermanyFootballTeam,
        text: "UEFA Euro 2020",
        tags: ["#football", "#euro2020"],
        eventEnd: 1639157400000,
    },
    {
        src: Dota2,
        text: "Dota 2 World Series",
        tags: ["#e-sports", "#championship"],
        eventEnd: 1629217800000,
    },
    {
        src: MarbleRace,
        text: "Marble League 2021",
        tags: ["#marble"],
        eventEnd: 1629217800000,
    },
    {
        src: DachshundRace,
        text: "Dachshund Race",
        tags: ["#dogs", "#races"],
        eventEnd: 1630341000000,
    },
];
