import supabase from "./supabase";

export async function login({email, password}) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw new Error("O Login falhou! Tente novamente mais tarde.");
  }
  return data;
}

export async function logout() {
  let {error} = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

export async function getCurrentUser() {
  const {data: session} = await supabase.auth.getSession();

  if (!session.session) return null;

  const {data, error} = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error("O Login falhou! Tente novamente mais tarde.");
  }

  return data?.user;
}
