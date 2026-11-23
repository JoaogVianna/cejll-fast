// Mapa do evento.
//
// nome: precisa ser IDÊNTICO ao "local" usado em programacao.js e oficinas.js,
//       porque é assim que o mapa descobre quais atividades acontecem em cada espaço.
// x, y, w, h: posição e tamanho do espaço, medidos numa área de 1000 x 480.
//
// PARA USAR A PLANTA REAL:
//   1. salve a imagem em public/mapa/planta.png
//   2. troque imagem: null por imagem: '/mapa/planta.png'
//   3. ajuste x, y, w, h de cada espaço para ficar por cima do lugar certo na imagem

export const PLANTA = {
  imagem: null,
  largura: 1000,
  altura: 480,
  exemplo: false,
}

export const ESPACOS = [
  { id: 'auditorio', nome: 'Auditório', x: 40, y: 40, w: 300, h: 190 },
  { id: 'frente-auditorio', nome: 'Frente do auditório', x: 40, y: 250, w: 300, h: 190 },
  { id: 'convivencia', nome: 'Convivência', x: 360, y: 40, w: 300, h: 190 },
  { id: 'germinal', nome: 'Germinal', x: 360, y: 250, w: 300, h: 190 },
  { id: 'sala-21', nome: 'Sala 21', x: 680, y: 40, w: 280, h: 120 },
  { id: 'sala-22', nome: 'Sala 22', x: 680, y: 180, w: 280, h: 120 },
  { id: 'segundo-andar', nome: 'Entrada do 2º andar', x: 680, y: 320, w: 280, h: 120 },
]
