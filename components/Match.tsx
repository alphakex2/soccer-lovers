import styled from "styled-components";
import Circle from "./Circle";
import { STATUS, STATUS_MAPPING } from "@/types";
import { getFormattedDateAndStatusColor } from "./utils";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid #2d2d2d;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-width: 250px;
  padding-top: 2.25rem;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const LeagueTitle = styled.p`
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const CardScore = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2.5rem;
  font-size: 3rem;
`;

const CardTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 4rem;
`;

const TeamName = styled.p`
  width: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(10px + 1vw);
  @media (min-width: 640px) {
    font-size: calc(12px + 0.5vw);
  }
`;


const StatusText = styled.p<{ $statusColor: string }>`
  color: ${(props) => props.$statusColor};
`;

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
    STATUS_MAPPING[status as keyof typeof STATUS_MAPPING] || STATUS.UPCOMING;

  const { formattedDate, statusColor } = getFormattedDateAndStatusColor(
    statusEnum,
    date
  );

  return (
    <CardContainer>
      <CardHeader>
        <p>{country.toUpperCase()}</p>
        <LeagueTitle>{leagueTitle}</LeagueTitle>
        <StatusText statusColor={statusColor}>
          {statusEnum === "UPCOMING" ? `${formattedDate} ${time}` : statusEnum}
        </StatusText>
      </CardHeader>
      <CardScore>
        <span>{homeScore}</span>-<span>{awayScore}</span>
      </CardScore>
      <CardTeams>
        <TeamName>{homeTeam}</TeamName>
        <Circle minute={minute} />
        <TeamName>{awayTeam}</TeamName>
      </CardTeams>
    </CardContainer>
  );
};

export default MatchCard;
