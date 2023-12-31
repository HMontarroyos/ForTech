export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export const areAllCategoriesPresent = (selectedItems: {}) => {
  const categories = [
    "Motherboard",
    "Processor",
    "Memory",
    "VideoCard",
    "Storage",
  ];
  return categories.every((category) => category in selectedItems);
};