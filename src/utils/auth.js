export const isAllowed = () => {
  return localStorage.getItem("allowed") === "true";
};
