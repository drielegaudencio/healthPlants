import { colabGetAll } from "./colabGetAll";

export async function colabGetByUser(idUser: string) {
  const colaboradores = await colabGetAll();

  return colaboradores.filter(
    (item) => item.idUser === idUser
  );
}