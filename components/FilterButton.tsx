import { Filter } from "@/types";
import { FunctionComponent } from "react";

interface ButtonProps {
    filter: Filter;
    count: number;
    setFilter: (filter: Filter) => void;
    label: string;
    isActive: boolean;
  }
  
  const FilterButton: FunctionComponent<ButtonProps> = ({ filter, count, setFilter, label, isActive }) => {
    return (
      <button 
        className={`border-y border-y-gray-500 px-4 py-3 ${isActive ? 'bg-[#222121]' : 'hover:bg-[#727272]'}`}
        onClick={() => setFilter(filter)}
      >
        <div className="flex justify-between">
          <div>{label}</div> 
          <div>({count}) </div>
        </div>
      </button>
    );
  };

export default FilterButton;
