export const GetPath = (): string => {
  const pathArray = window.location.pathname.split("/");
  return pathArray[1];
};
