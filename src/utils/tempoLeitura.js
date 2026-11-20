const PALAVRAS_POR_MINUTO = 200

// Estima o tempo de leitura (em minutos) a partir dos blocos do texto da notícia.
// Cada bloco é um parágrafo (texto) ou um subtítulo ({ subtitulo: '...' }).
export function tempoDeLeitura(texto) {
  const palavras = texto
    .map((bloco) => (typeof bloco === 'string' ? bloco : bloco.subtitulo))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length

  return Math.max(1, Math.ceil(palavras / PALAVRAS_POR_MINUTO))
}
