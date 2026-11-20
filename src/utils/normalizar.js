// Tira acentos e maiúsculas, para a busca achar "oficina" em "Oficína".
export const normalizar = (texto) =>
  texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
