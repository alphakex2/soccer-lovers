"use client";

import styled from "styled-components";
import { Match } from "@/types";
import { FunctionComponent, useEffect, useState } from "react";
import Filter from "./Filter";
import MatchCard from "./Match";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 1rem;
  overflow: auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const FilterContainer = styled.div`
  height: 100%;
  overflow: auto;
  background-color: #3d3d3d;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    width: 20rem;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const MatchesContainer = styled.div`
  height: 100%;
  overflow: auto;
  padding: 1rem;
  background-color: #3d3d3d;
  border-radius: 0.5rem;
  flex-grow: 1;
`;

const MatchesGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
interface HomeProps {}

const HomePage: FunctionComponent<HomeProps> = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [filter, setFilter] = useState<
    "all" | "finished" | "inprogress" | "notstarted"
  >("all");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/matches");
      const data = await res.json();
      setMatches(data);
    };
    fetchData();
  }, []);

  const filteredMatches = matches.filter((match) => {
    if (filter === "all") return true;
    if (filter === "finished" && match.status.type === "finished") return true;
    if (filter === "inprogress" && match.status.type === "inprogress")
      return true;
    if (filter === "notstarted" && match.status.type === "notstarted")
      return true;
    return false;
  });

  return (
    <HomeContainer>
      <FilterContainer>
        <Filter matches={matches} setFilter={setFilter} />
      </FilterContainer>
      <MatchesContainer>
        <MatchesGrid>
          {filteredMatches.map((item) => (
            <MatchCard
              key={item.id}
              country={item.country}
              leagueTitle={item.competition}
              status={item.status.type}
              homeScore={item.homeScore.current}
              awayScore={item.awayScore.current}
              minute={Number(item.liveStatus)}
              homeTeam={item.homeTeam.name}
              awayTeam={item.awayTeam.name}
              date={item.date}
              time={item.time}
            />
          ))}
        </MatchesGrid>
      </MatchesContainer>
    </HomeContainer>
  );
};

export default HomePage;
