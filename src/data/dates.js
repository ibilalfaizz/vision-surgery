export const months = [
  {
    abbreviation: "Jan",
    name: "January",
  },
  {
    abbreviation: "Feb",
    name: "February",
  },
  {
    abbreviation: "Mar",
    name: "March",
  },
  {
    abbreviation: "Apr",
    name: "April",
  },
  {
    abbreviation: "May",
    name: "May",
  },
  {
    abbreviation: "Jun",
    name: "June",
  },
  {
    abbreviation: "Jul",
    name: "July",
  },
  {
    abbreviation: "Aug",
    name: "August",
  },
  {
    abbreviation: "Sep",
    name: "September",
  },
  {
    abbreviation: "Oct",
    name: "October",
  },
  {
    abbreviation: "Nov",
    name: "November",
  },
  {
    abbreviation: "Dec",
    name: "December",
  },
];

const startYear = 2000;
const endYear = new Date().getFullYear(); // Get the current year

export const years = Array.from(
  { length: endYear - startYear + 1 },
  (_, index) => endYear - index // Calculate the year in descending order
);
