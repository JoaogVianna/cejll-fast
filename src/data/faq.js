// Perguntas frequentes. Para adicionar uma pergunta, copie um bloco.
// provisoria: true mostra a etiqueta "Resposta a confirmar" (troque o texto e tire a linha).
// link: opcional, um botão que leva para outra página do site.
export const PERGUNTAS = [
  {
    pergunta: 'Quem pode participar do CEJLL Fest?',
    resposta:
      'O evento é voltado à comunidade escolar. A participação de visitantes externos depende da autorização da direção.',
  },
  {
    pergunta: 'Preciso criar um projeto novo?',
    resposta: 'A organização vai confirmar se o projeto precisa ser novo ou pode já existir.',
    provisoria: true,
  },
  {
    pergunta: 'Posso participar individualmente?',
    resposta: 'A organização vai confirmar se a participação pode ser individual ou só em grupo.',
    provisoria: true,
  },
  {
    pergunta: 'Posso apresentar um trabalho antigo?',
    resposta: 'A organização vai confirmar se trabalhos já feitos podem ser apresentados.',
    provisoria: true,
  },
  {
    pergunta: 'A inscrição garante participação?',
    resposta: 'A organização vai explicar aqui o que acontece depois que o formulário é enviado.',
    provisoria: true,
    link: { para: '/participe', rotulo: 'Ver os formulários' },
  },
  {
    pergunta: 'Posso participar de mais de uma atividade?',
    resposta: 'A organização vai confirmar se é possível participar de mais de uma atividade.',
    provisoria: true,
  },
  {
    pergunta: 'Como serão escolhidos os projetos?',
    resposta: 'Os critérios de escolha dos projetos serão divulgados pela organização.',
    provisoria: true,
    link: { para: '/projetos', rotulo: 'Ver projetos' },
  },
  {
    pergunta: 'Como funcionará o CEJLL Awards?',
    resposta:
      'O CEJLL Awards é a competição que premia projetos em categorias. Participar da exposição não significa participar obrigatoriamente da competição.',
    link: { para: '/awards', rotulo: 'Conhecer o Awards' },
  },
  {
    pergunta: 'Visitantes externos poderão entrar?',
    resposta: 'Depende da autorização da direção da escola.',
  },
  {
    pergunta: 'Como faço para participar do comitê?',
    resposta:
      'Pelo formulário do comitê de organização, na página Participe. Quando as inscrições abrirem, o botão do formulário fica disponível.',
    link: { para: '/participe#comite', rotulo: 'Ir ao formulário do comitê' },
  },
]
