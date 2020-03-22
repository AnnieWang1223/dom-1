dom.style(test, { color: 'red' })
const testDiv = dom.find('#test')[0]
console.log(testDiv)
const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))

