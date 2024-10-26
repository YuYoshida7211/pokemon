export const pokeAPI = async () => {
  const pokeNumber = Math.floor(Math.random() * 251) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;

  try {
    const res = await fetch(url);

    if (res.ok) {
      const data = res.json();
      console.log(data);
      return data;
    } else {
      throw new Error("ポケモンをGetできませんでした....");
    }
  } catch (e) {
    alert(e);
  }
};
