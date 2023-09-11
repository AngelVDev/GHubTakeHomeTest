export const formattedDate = (date: string | Date) => {
    const phaseOneDate = new Date(date);
    const finalDate = new Intl.DateTimeFormat(['ban', 'id']).format(
      phaseOneDate,
    );
    return finalDate;
  };