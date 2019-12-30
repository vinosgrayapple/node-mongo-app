const func = (string, word) => {
  const ln = Math.sqrt(string.length)
  return word.split('').map(ch => {
    const ind = string.indexOf(ch)
    return [~~(ind / ln) ,ind % ln]
  })
}
console.log('func :', func('OLGNAEKIRLRNGEAE', 'KING'));
console.log('func :', func('QWEASDZXC', 'SEX'));
