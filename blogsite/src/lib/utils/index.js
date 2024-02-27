// export function formatDate(dateString, options) {
//     const { format } = new Intl.DateTimeFormat('en-US', options)
//     return format(new Date(dateString))
//   }

export function formatDate(dateString, options) {
  // Create a new Date object using the dateString
  const date = new Date(dateString);

  // Get the month, day, and year from the date object
  // Note: getMonth() returns 0-11, so add 1 to get 1-12 for the month
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  // Format the month, day, and year into MM/DD/YYYY format
  // Use padStart(2, '0') to ensure two digits for month and day
  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
}
