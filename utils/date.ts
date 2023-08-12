export const dateFormat = (date: string): string => {
  const newDate = new Date(date);
  if (isNaN(newDate.getTime())) {
    throw new Error('Formato de fecha invalido');
  }
  const year = newDate.getUTCFullYear();
  const month = String(newDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(newDate.getUTCDate()).padStart(2, '0');
  return `${day}/${month}/${year}`;
};
