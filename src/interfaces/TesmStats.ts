export default interface TesmStats {
  createdAt: string;
  updatedAt: string;
  id: number;
  footballTeam: number;
  seasonGoalsHome: number;
  seasonConceded: number;
  seasonGoalsAway: number;
  seasonConcededAway: number;
  seasonConcededHome: number;
  seasonGoals: number;
  points: number;
  ppgOverall: number;
  seasonGoalDifference: number;
  seasonWinsHome: number;
  seasonWinsAway: number;
  seasonWinsOverall: number;
  seasonDrawsHome: number;
  seasonDrawsAway: number;
  seasonDrawsOverall: number;
  seasonLosses_away: number;
  seasonLosses_home: number;
  seasonLosses_overall: number;
  matchesPlayed: number;
}
