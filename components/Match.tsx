import React from "react";
import Circle from "./Circle";

export enum STATUS {
  ENDED = "ENDED",
  LIVE = "LIVE",
  CANCELLED = "CANCELLED",
  UPCOMING = "UPCOMING",
}
const STATUS_MAPPING = {
  finished: STATUS.ENDED,
  canceled: STATUS.CANCELLED,
  inprogress: STATUS.LIVE,
  notstarted: "UPCOMING",
};
interface MatchCardProps {
  country: string;
  leagueTitle: string;
  status: string;
  minute: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date?: string;
  time?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  country,
  leagueTitle,
  status,
  minute,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  date,
  time,
}) => {
  const statusEnum =
    STATUS_MAPPING[status as keyof typeof STATUS_MAPPING] || status;

  const dateObj = new Date(date || "");
  const day = dateObj.getDate();
  let formattedDaySuffix;

  if ((day > 3 && day < 21) || day % 10 > 3) {
    formattedDaySuffix = "th";
  } else {
    formattedDaySuffix = ["st", "nd", "rd"][(day % 10) - 1];
  }

  const formattedDay = day + formattedDaySuffix;
  const formattedMonth = dateObj.toLocaleString("en-US", { month: "short" });
  const formattedDate = `${formattedMonth.toUpperCase()} ${formattedDay}`;

  return (
    <div className="flex flex-col rounded-md border-gray-600 shadow-xl w-full pt-9">
      <div className="flex flex-col justify-center items-center gap-1">
        <p>{country.toUpperCase()}</p>
        <p className="text-xl">{leagueTitle}</p>
        <p
          className={`status-text ${
            statusEnum === STATUS.ENDED
              ? "text-green-500"
              : statusEnum === STATUS.LIVE
              ? "text-yellow-500"
              : statusEnum === STATUS.CANCELLED
              ? "text-red-500"
              : "text-white"
          }`}
        >
          {statusEnum === "UPCOMING" ? `${formattedDate} ${time}` : statusEnum}
        </p>
      </div>
      <div className="flex justify-center w-full mt-10">
        <span>{homeScore}</span>- <span>{awayScore}</span>
      </div>
      <div className="flex items-center justify-between my-12 mx-16">
        <p className=" w-28 truncate sm:text-sm lg:text-xl">{homeTeam}</p>
        <Circle minute={minute} />
        <p className=" w-28 truncate sm:text-sm md:text-xl lg:text-xl">
          {awayTeam}
        </p>
      </div>
    </div>
  );
};

export default MatchCard;
