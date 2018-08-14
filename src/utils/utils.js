const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const suffix = i => {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st `;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd `;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd `;
  }
  return `${i}th`;
};

const formatDate = x => {
  const before = x.split("T")[0];
  const format = before.split("-");
  const year = format[0];
  const day = parseInt(format[2], 10);
  const month = months[parseInt(format[1], 10) - 1].toString();

  return `${suffix(day)} ${month}, ${year}`;
};

export default formatDate;
