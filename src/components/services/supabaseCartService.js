import { supabase } from "../../supabaseCliente";
// Exemplo de inicialização: createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

const TABLE = "carrinho";

// Adiciona ou incrementa um item no carrinho
export async function addToCart({ user_id, product_id, color, quantity = 1 }) {
  try {
    // Verifica se o item já existe (mesmo produto + cor)
    const { data: existing, error: selectError } = await supabase
      .from("carrinho")
      .select("*")
      .eq("user_id", user_id)
      .eq("product_id", product_id)
      .eq("color", color)
      .single();

    if (selectError && selectError.code !== "PGRST116") throw selectError;

    if (existing) {
      // Atualiza a quantidade
      const { data, error } = await supabase
        .from(TABLE)
        .update({ quantity: existing.quantity + quantity })
        .eq("id", existing.id)
        .select();
      if (error) throw error;
      return data[0];
    } else {
      // Cria novo registro
      const { data, error } = await supabase
        .from(TABLE)
        .insert([{ user_id, product_id, color, quantity }])
        .select();
      if (error) throw error;
      return data[0];
    }
  } catch (err) {
    console.error("Erro ao adicionar ao carrinho:", err);
    throw err;
  }
}

// Busca todos os itens do carrinho de um usuário
  export const getCartItems = async (userId) => {
  // A consulta ao Supabase é a parte mais importante
  const { data, error } = await supabase
    .from("carrinho") // Nome da sua tabela de carrinho
    .select(`
      id,
      quantity,
      color,
      produtos:product_id (
        id,
        nome,
        preco,
        imagem_url
      )
    `)
    .eq("user_id", userId);

  if (error) {
    console.error("Erro ao buscar itens do carrinho:", error);
    throw error;
  }
  
  return data;
};

// Remove um item
export async function removeCartItem(id) {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}

// Limpa carrinho do usuário
export async function clearCart(user_id) {
  const { error } = await supabase.from(TABLE).delete().eq("user_id", user_id);
  if (error) throw error;
}
