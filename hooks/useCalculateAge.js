export const useCalculateAge = () => {
  return (dateOfBirth) => {
    const birthYear = Number(dateOfBirth.slice(0, 4));
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };
};
