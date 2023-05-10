export const calculateDays = (initial: Date, end: Date) => {
  return (
    Math.round((end.getTime() - initial.getTime()) / (1000 * 60 * 60 * 24)) *
    3.5
  );
};
