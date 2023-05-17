export interface Match {
  id: string;
  name: string;
  competitionId: string;
  competition: string;
  countryId: string;
  country: string;
  timestamp: number;
  date: string;
  time: string;
  status: {
    code: number;
    type: string;
  };
  round: {
    round: number;
  };
  homeTeam: {
    id: number;
    name: string;
    slug: string;
    gender: string;
    subTeams: any[];
  };
  awayTeam: {
    id: number;
    name: string;
    slug: string;
    gender: string;
    subTeams: any[];
  };
  homeScore: {
    current: number;
    period1: number;
    normaltime: number;
  };
  awayScore: {
    current: number;
    period1: number;
    normaltime: number;
  };
  liveStatus: string;
}

export type Filter = "all" | "finished" | "inprogress" | "notstarted";