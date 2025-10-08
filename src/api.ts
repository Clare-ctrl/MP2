import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
});

export async function getPokemonList(limit = 60) {
  const { data } = await instance.get(`/pokemon?limit=${limit}`);
  return data.results; 
}

export async function getPokemonBrief(name: string) {
  const { data } = await instance.get(`/pokemon/${name}`);
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default
    }
  };

export async function getListBrief() {
    const list = await getPokemonList();
    const details = await Promise.all(
        list.map((p: any) => getPokemonBrief(p.name)));
    return details;
}   

export async function getPokemonDetail(name: string) {
  const { data } = await instance.get(`/pokemon/${name}`);
  
  return {
    id: data.id,
    name: data.name,
    types: data.types.map((t: any) => t.type.name),
    image: data.sprites.other["official-artwork"].front_default,
    stats: data.stats.map((s: any) => ({
      name: s.stat.name,
      value: s.base_stat
    }))
  };
}

export async function getListDetail() {
    const list = await getPokemonList();
    const details = await Promise.all(
        list.map((p: any) => getPokemonDetail(p.name)));
    return details;
}  