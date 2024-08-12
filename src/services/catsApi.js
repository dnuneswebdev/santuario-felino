import {formatDate} from "../utils/helpers";
import supabase from "./supabase";

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
