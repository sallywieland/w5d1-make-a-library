// Your test code examples go here. Make sure you console.log() results.

// EXPLORER MODE
// one()
console.log(modom.one('div'))

// all()
console.log(modom.all('div'))

// remove()
console.log(modom.remove('h4'))

// addClass()
console.log(modom.addClass('h4', 'red'))

// removeClass()
console.log(modom.removeClass('h4', 'red'))

// hasClass()
console.log('div class = container-fluid', modom.hasClass('div', 'container-fluid'))

// getAttr()
console.log(modom.getAttr('div', 'class'))

// setAttr()
console.log(modom.setAttr('h4', 'class', 'red'))

// setHTML()
console.log(modom.setHTML('h1', 'hello'))

// getHTML()
console.log(modom.getHTML('h4'))

// ADVENTURER MODE

// getProp()
console.log(modom.getProp('.nav-sidebar', 'innerHTML'))

// ajax()
modom.ajax('http://swapi.co/api/', function(data) {
    console.log(data)
})
