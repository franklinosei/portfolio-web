export function formatProjectDate(isoDate) {
    const date = new Date(isoDate);
    const options = { month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleString('default', options);
    return formattedDate;
  }
  