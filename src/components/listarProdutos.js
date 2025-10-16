import { supabase } from "../supabase";

export async function listarProdutos() {
  let { data, error } = await supabase
    .from("products")
    .select(
      `*,
      cores_produto(
      id, nome_cor, codigo_cor, imagem_cor)`
    )
    .enq("category", "Oferta")
    .in("category", ["Celulares", "Acessorios", "Oferta", "Fone de ouvido"]);
  console.log(data, error);
  if (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }

  console.log("listarProdutos -> got", data.length, "products");
  return data;
}
