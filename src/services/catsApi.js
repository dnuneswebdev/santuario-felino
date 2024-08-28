import supabase, {supabaseUrl} from "./supabase";
import {formatDate} from "../utils/helpers";
import {PAGE_SIZE} from "../utils/constants";

export async function getCats({filter, sortBy, page}) {
  let query = supabase.from("cats").select("*", {count: "exact"});

  if (filter && filter.value !== "undefined")
    query = query.ilike("name", `%${filter.value}%`, {type: "websearch"});

  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const {data, error, count} = await query;

  const newData = data.map((item) => {
    item.departureDate
      ? (item.departureDate = formatDate(item.departureDate))
      : null;
    item.entryDate = formatDate(item.entryDate);

    return item;
  });

  if (error)
    throw new Error("Não foi possível carregar as informações, 😢", error);

  return {newData, count};
}

export async function createCat(newCat) {
  const {data, error} = await supabase.from("cats").insert(newCat);

  if (error) throw new Error("Não foi possível cadastrar o Felino, 😢", error);

  return data;
}

export async function editCat(cat, id) {
  const {data, error} = await supabase
    .from("cats")
    .update(cat)
    .eq("id", id)
    .select();

  if (error) throw new Error("Não foi possível editar o Felino, 😢", error);

  return data;
}

export async function uploadCatImage(imageFile, id) {
  const imageName = `${Math.random()}-${imageFile.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cats/${imageName}`;
  let query = supabase.from("cats");

  if (id) query = query.update({image: imagePath}).eq("id", id);

  const {data, error} = await query.select().single();
  if (error) throw new Error("A imagem não pode ser salva. 😿", error);

  const {storageError} = await supabase.storage
    .from("cats")
    .upload(imageName, imageFile);

  if (storageError) {
    throw new Error("A imagem não pode ser salva. 😿", error);
  }

  return data.image;
}
