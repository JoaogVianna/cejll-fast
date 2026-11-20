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
//   4. mude exemplo para false

export const PLANTA = {
  imagem: null,
  largura: 1000,
  altura: 480,
  exemplo: true,
}

export const ESPACOS = [
  { id: 'entrada', nome: 'Entrada principal', x: 40, y: 40, w: 240, h: 200 },
  { id: 'patio', nome: 'Pátio', x: 300, y: 40, w: 400, h: 200 },
  { id: 'auditorio', nome: 'Auditório', x: 720, y: 40, w: 240, h: 200 },
  { id: 'arte', nome: 'Sala de artes', x: 40, y: 270, w: 240, h: 170 },
  { id: 'lab', nome: 'Laboratório de informática', x: 300, y: 270, w: 240, h: 170 },
  { id: 'biblioteca', nome: 'Biblioteca', x: 560, y: 270, w: 190, h: 170 },
  { id: 'quadra', nome: 'Quadra', x: 770, y: 270, w: 190, h: 170 },
]
