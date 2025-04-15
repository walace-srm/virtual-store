export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string; // ex: "Camisetas", "Calças", etc.
  sizes: string[]; // ex: ["P", "M", "G", "GG"]
  colors: string[]; // ex: ["Preto", "Branco"]
  image: string[]; // múltiplas imagens
  images: string[];
  featured: boolean; // produto em destaque na home
  user?: string; // UID do usuário que cadastrou

  // Campos adicionais que você já usava — mantidos por compatibilidade:
  status?: string;
  discounted?: string;
  discount?: number;
}
