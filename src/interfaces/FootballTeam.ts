import TeamStats from "./TeamStats";

export default interface FootballTeam {
    createdAt: string;
    updatedAt: string;
    id: number;
    leagueTableRecord: TeamStats;
    externalId: number;
    name: string;
    cleanName: string;
    englishName: string;
    shortHand: string;
    country: string;
    continent: string;
    founded: number;
    image: string;
    flagElement: string;
    season: string;
    seasonClean: string;
    url: string;
    stadiumName: string;
    stadiumAddress: string;
    tablePosition: string;
    performanceRank: string;
    risk: string;
    seasonFormat: string;
    competitionId: string;
    fullName: string;
    altNames: string;
    officialSites: string;
}
