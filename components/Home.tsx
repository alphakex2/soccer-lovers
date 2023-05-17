"use client";

import { Match } from "@/types";
import { FunctionComponent, useEffect, useState } from "react";
import Filter from "./Filter";
import MatchCard from "./Match";

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
    <div className="flex flex-col h-screen m-4 overflow-auto lg:flex-row">
    <div className="h-full overflow-auto lg:w-80 lg:h-auto bg-[#3D3D3D] rounded lg:mr-4 mb-4 lg:mb-0">
      <Filter matches={matches} setFilter={setFilter} />
    </div>
    <div className="h-full overflow-auto p-4 bg-[#3D3D3D] rounded lg:flex-grow">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
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
      </div>
    </div>
  </div>
  );
};

export default HomePage;
