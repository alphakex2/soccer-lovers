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

export enum STATUS {
  ENDED = "ENDED",
  LIVE = "LIVE",
  CANCELLED = "CANCELLED",
  UPCOMING = "UPCOMING",
}
export const STATUS_MAPPING = {
  finished: STATUS.ENDED,
  canceled: STATUS.CANCELLED,
  inprogress: STATUS.LIVE,
  notstarted: STATUS.UPCOMING,
};