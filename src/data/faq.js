// Perguntas frequentes. Para mudar uma resposta, edite aqui.
//
// provisoria: true mostra a etiqueta "Resposta provisória"; apague a linha quando a resposta for a definitiva.
// resposta:   lista de parágrafos.
// link:       { para, rotulo } (opcional) para levar a outra página do site.

export const FAQ = [
  {
    id: 'quem-pode',
    pergunta: 'Quem pode participar do CEJLL Fest?',
    resposta: ['Aqui entra a resposta.'],
    provisoria: true,
  },
  {
    id: 'projeto-novo',
    pergunta: 'Preciso criar um projeto novo?',
    resposta: ['Aqui entra a resposta.'],
    provisoria: true,
  },
  {
    id: 'individual',
    pergunta: 'Posso participar individualmente?',
    resposta: ['Aqui entra a resposta.'],
    provisoria: true,
  },
  {
    id: 'trabalho-antigo',
    pergunta: 'Posso apresentar um trabalho antigo?',
    resposta: ['Aqui entra a resposta.'],
    provisoria: true,
  },
  {
    id: 'garante-participacao',
    pergunta: 'A inscrição garante participação?',
    resposta: [
      'Não. O envio do formulário não garante automaticamente a participação no evento.',
      'As propostas estarão sujeitas à avaliação e autorização da direção e da organização do CEJLL Fest.',
    ],
    link: { para: '/participe', rotulo: 'Ver as formas de participar' },
  },
  {
    id: 'mais-de-uma',
    pergunta: 'Posso participar de mais de uma atividade?',
    resposta: ['Aqui entra a resposta.'],
    provisoria: true,
  },
  {
    id: 'escolha-projetos',
    pergunta: 'Como serão escolhidos os projetos?',
    resposta: [
      'Todas as propostas passam por avaliação e organização antes de serem confirmadas.',
      'Aqui entram os critérios de escolha.',
    ],
    provisoria: true,
  },
  {
    id: 'como-awards',
    pergunta: 'Como funcionará o CEJLL Awards?',
    resposta: [
      'Participar da exposição não significa obrigatoriamente participar da competição.',
      'As categorias, os indicados e a votação ficam na página do CEJLL Awards.',
    ],
    link: { para: '/awards', rotulo: 'Ver o CEJLL Awards' },
  },
  {
    id: 'visitantes-externos',
    pergunta: 'Visitantes externos poderão entrar?',
    resposta: ['Aqui entra a resposta.'],
    provisoria: true,
  },
  {
    id: 'como-comite',
    pergunta: 'Como faço para participar do comitê?',
    resposta: [
      'Pelo formulário do comitê de organização, na página Participe.',
      'Cada turma poderá indicar um representante. Será dada preferência aos estudantes do 2º e 3º ano, podendo haver participação de estudantes do 1º ano caso necessário.',
    ],
    link: { para: '/participe#comite', rotulo: 'Ir para o comitê de organização' },
  },
]
