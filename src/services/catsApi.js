import {formatDate} from "../utils/helpers";
import supabase, {supabaseUrl} from "./supabase";

export async function getCats() {
  const {data, error} = await supabase.from("cats").select("*");

  const newData = data.map((item) => {
    item.departureDate === null
      ? (item.departureDate = "-")
      : (item.departureDate = formatDate(item.departureDate));

    item.entryDate = formatDate(item.entryDate);

    return item;
  });

  if (error)
    throw new Error("Não foi possível carregar as informações, 😢", error);

  return newData;
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
