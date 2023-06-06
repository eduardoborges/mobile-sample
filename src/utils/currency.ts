const rsCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatBRL(value: number | bigint | string) {
  return rsCurrency.format(Number(value));
}
