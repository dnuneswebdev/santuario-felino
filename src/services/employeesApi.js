import {formatDate} from "../utils/helpers";
import supabase, {supabaseUrl} from "./supabase";

export async function getEmployees({filter}) {
  let query = supabase.from("employees").select("*");

  if (filter && filter.value !== "undefined")
    query = query.ilike("name", `%${filter.value}%`, {type: "websearch"});

  const {data, error} = await query;

  const newData = data.map((item) => {
    item.entryDate = formatDate(item.entryDate);
    item.birthDate = formatDate(item.birthDate);

    return item;
  });

  if (error)
    throw new Error("Não foi possível carregar as informações, 😢", error);

  return newData;
}

export async function createEmployee(newEmployee) {
  const {data, error} = await supabase.from("employees").insert(newEmployee);

  if (error)
    throw new Error("Não foi possível cadastrar o Funcionário, 😢", error);

  return data;
}

export async function editEmployee(employee, id) {
  const {data, error} = await supabase
    .from("employees")
    .update(employee)
    .eq("id", id)
    .select();

  if (error)
    throw new Error("Não foi possível editar o Funcionário, 😢", error);

  return data;
}

export async function uploadEmployeeImage(imageFile, id) {
  const imageName = `${Math.random()}-${imageFile.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/employees/${imageName}`;
  let query = supabase.from("employees");

  if (id) query = query.update({image: imagePath}).eq("id", id);

  const {data, error} = await query.select().single();
  if (error) throw new Error("A imagem não pode ser salva. 😿", error);

  const {storageError} = await supabase.storage
    .from("employees")
    .upload(imageName, imageFile);

  if (storageError) {
    throw new Error("A imagem não pode ser salva. 😿", error);
  }

  return data.image;
}

export async function deleteEmployee(id) {
  const {data, error} = await supabase.from("employees").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("O Funcionário não pode ser deletado.");
  }
  return data;
}
