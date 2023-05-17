import { STATUS } from "@/types";

export function getFormattedDateAndStatusColor(statusEnum: STATUS, date?: string ) {
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
  
    const statusColor =
      statusEnum === STATUS.ENDED
        ? "green"
        : statusEnum === STATUS.LIVE
        ? "yellow"
        : statusEnum === STATUS.CANCELLED
        ? "red"
        : "white";
  
    return { formattedDate, statusColor };
  }