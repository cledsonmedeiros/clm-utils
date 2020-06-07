function formatMoney(value) {
  if (isNaN(value)) {
    return null
  }

  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

module.exports = {
  formatMoney,
}
