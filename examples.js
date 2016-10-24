// Your test code examples go here. Make sure you console.log() results.

// EXPLORER MODE
// one()
console.log(md.one('div'))

// all()
console.log(md.all('div'))

// remove()
console.log(md.remove('h4'))

// addClass()
console.log(md.addClass('h4', 'red'))

// removeClass()
console.log(md.removeClass('h4', 'red'))

// hasClass()
console.log('div class = container-fluid', md.hasClass('div', 'container-fluid'))

// getAttr()
console.log(md.getAttr('div', 'class'))

// setAttr()
console.log(md.setAttr('h4', 'class', 'red'))

// setHTML()
console.log(md.setHTML('h1', 'hello'))

// getHTML()
console.log(md.getHTML('h4'))

// ADVENTURER MODE

// getProp()
console.log(md.getProp('.nav-sidebar', 'innerHTML'))

// ajax()
md.ajax('http://swapi.co/api/', function(data) {
    console.log(data)
})
