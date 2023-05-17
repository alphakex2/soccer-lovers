import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filters from "../components/Filter";
import { Match } from "@/types";


describe("Filters", () => {
  it("renders without crashing", () => {
    const matches: Match[] = []; // provide some mock data for matches
    const setFilter = jest.fn();

    const { getByText } = render(
      <Filters matches={matches} setFilter={setFilter} />
    );

    expect(getByText("Filters")).toBeInTheDocument();
  });

  it("calls setFilter with correct filter when filter button is clicked", () => {
    const matches: Match[] = []; // provide some mock data for matches
    const setFilter = jest.fn();

    const { getByText } = render(
      <Filters matches={matches} setFilter={setFilter} />
    );

    fireEvent.click(getByText("All"));
    expect(setFilter).toHaveBeenCalledWith("all");

    fireEvent.click(getByText("Result"));
    expect(setFilter).toHaveBeenCalledWith("finished");

    fireEvent.click(getByText("Live"));
    expect(setFilter).toHaveBeenCalledWith("inprogress");

    fireEvent.click(getByText("Upcoming"));
    expect(setFilter).toHaveBeenCalledWith("notstarted");
  });
});
