const BASE_API = "https://rickandmortyapi.com/api/character";

async function getOneCharacter(id) {
  const response = await fetch(`${BASE_API}/${id}`);
  if (!response.ok) {
    throw new Error("no se pudo obetener el caracter solicitado");
  }
  const data = await response.json();

  return data;
}
export default getOneCharacter;
