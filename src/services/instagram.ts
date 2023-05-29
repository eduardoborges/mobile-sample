export const foo = async () => {
  const response = await fetch('https://www.instagram.com/instagram/?__a=1');
  const data = await response.json();
  return data;
};
