export const getRefreshToken = (): string => {
  const refreshToken = localStorage.getItem("refreshToken");
  return refreshToken || "";
};
