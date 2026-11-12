// Notícias do site. A Home mostra as 3 primeiras; a página /noticias mostra todas.
// id: vira o endereço da notícia (/noticias/<id>), sem espaços nem acentos.
// data: 'AAAA-MM-DD' ou null.
// texto: resumo curto (aparece nos cartões).
// conteudo: lista de parágrafos do texto completo (aparece na página da notícia).
// variante: 'navy', 'pink' ou 'gray' (cor do bloco de cima do cartão).
export const NOTICIAS = [
  {
    id: 1,
    titulo: 'Abertura das inscrições',
    texto: 'Aqui entra o comunicado com a data de abertura dos formulários.',
    conteudo: [
      'Aqui entra o comunicado completo com a data de abertura dos formulários de comitê, projetos e oficinas.',
      'Quando as inscrições abrirem, os botões da página Participe passam a levar para os formulários.',
    ],
    data: null,
    categoria: 'Inscrições',
    variante: 'pink',
    exemplo: true,
  },
  {
    id: 2,
    titulo: 'Novidades sobre o evento',
    texto: 'Aqui entram os avisos e as atividades confirmadas pela organização.',
    conteudo: [
      'Aqui entram os avisos da organização e a divulgação das atividades confirmadas.',
    ],
    data: null,
    categoria: 'Avisos',
    variante: 'navy',
    exemplo: true,
  },
  {
    id: 3,
    titulo: 'Mudanças na programação',
    texto: 'Aqui entram os ajustes de horário e de local das atividades.',
    conteudo: [
      'Aqui entram os ajustes de horário e de local das atividades da programação.',
      'A programação completa sempre fica atualizada na página Programação.',
    ],
    data: null,
    categoria: 'Programação',
    variante: 'gray',
    exemplo: true,
  },
]
