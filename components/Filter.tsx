"use client";

import { Filter, Match } from "@/types";
import { FunctionComponent, useMemo, useState } from "react";
import FilterButton from "./FilterButton";

interface FiltersProps {
  matches: Match[];
  setFilter: React.Dispatch<React.SetStateAction<"all" | "finished" | "inprogress" | "notstarted">>;
}

const Filters: FunctionComponent<FiltersProps> = ({ matches, setFilter }) => {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    let all = 0;
    let finished = 0;
    let inprogress = 0;
    let notstarted = 0;

    matches.forEach((match) => {
      all++;
      if (match.status.type === "finished") finished++;
      if (match.status.type === "inprogress") inprogress++;
      if (match.status.type === "notstarted") notstarted++;
    });

    return { all, finished, inprogress, notstarted };
  }, [matches]);

  const handleFilterChange = (filter: Filter) => {
    setActiveFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-2xl p-4">Filters</div>
      <div className="flex flex-col pb-16">
        <FilterButton
          filter="all"
          count={counts.all}
          setFilter={handleFilterChange}
          label="All"
          isActive={activeFilter === "all"}
        />
        <FilterButton
          filter="finished"
          count={counts.finished}
          setFilter={handleFilterChange}
          label="Result"
          isActive={activeFilter === "finished"}
        />
        <FilterButton
          filter="inprogress"
          count={counts.inprogress}
          setFilter={handleFilterChange}
          label="Live"
          isActive={activeFilter === "inprogress"}
        />
        <FilterButton
          filter="notstarted"
          count={counts.notstarted}
          setFilter={handleFilterChange}
          label="Upcoming"
          isActive={activeFilter === "notstarted"}
        />
      </div>
    </div>
  );
};

export default Filters;
