const BASE_API = "https://rickandmortyapi.com/api/character";

async function getCharacters(id1, id2, id3, id4, id5, id6, id7, id8) {
  const response = await fetch(
    `${BASE_API}/[${id1},${id2},${id3},${id4},${id5},${id6},${id7},${id8}]`
  );
  if (!response.ok) {
    throw new Error("no se pudieron optener los caracteres solicitados");
  }
  const data = await response.json();
  return data;
}
export default getCharacters;
