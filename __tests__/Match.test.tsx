import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchCard from "../components/Match";

describe("MatchCard", () => {
  const mockProps = {
    country: "England",
    leagueTitle: "Premier League",
    status: "live",
    minute: 45,
    homeTeam: "Team A",
    awayTeam: "Team B",
    homeScore: 2,
    awayScore: 1,
  };

  it("renders without crashing", () => {
    render(<MatchCard {...mockProps} />);
  });

  it("displays the country", () => {
    render(<MatchCard {...mockProps} />);
    expect(
      screen.getByText(mockProps.country.toUpperCase())
    ).toBeInTheDocument();
  });

  it("displays the league title", () => {
    render(<MatchCard {...mockProps} />);
    expect(screen.getByText(mockProps.leagueTitle)).toBeInTheDocument();
  });

  it("displays the home team name", () => {
    render(<MatchCard {...mockProps} />);
    expect(screen.getByText(mockProps.homeTeam)).toBeInTheDocument();
  });

  it("displays the away team name", () => {
    render(<MatchCard {...mockProps} />);
    expect(screen.getByText(mockProps.awayTeam)).toBeInTheDocument();
  });
});
