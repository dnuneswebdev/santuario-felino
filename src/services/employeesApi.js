import supabase from "./supabase";

export async function getEmployees() {
  const {data, error} = await supabase.from("employees").select("*");

  if (error)
    throw new Error("Não foi possível carregar as informações, 😢", error);

  return data;
}
