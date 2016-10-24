// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function () {
    'use strict' // adds extra error checking

    var one = function(selector) { // name variable referring to homework list
    return document.querySelector(selector) // selector allows it to run
    }
    var all = function(selectors) {
        return document.querySelectorAll(selectors)
    }
    var remove = function(selector) {
        return document.querySelector(selector).remove()
    }
    var addClass = function(selector, className) {
        return document.querySelector(selector).classList.add(className)
    }
    var removeClass = function(selector, className) {
        return document.querySelector(selector).classList.remove(className)
    }
    var hasClass = function(selector, className) {
        return document.querySelector(selector).classList.contains(className)
    }
    var getAttr = function(selector, attribute) {
        return document.querySelector(selector).getAttribute(attribute)
    }
    var setAttr = function(selector, attributeName, attributeValue) {
        return document.querySelector(selector).setAttribute(attributeName, attributeValue)
    }
    var setHTML = function(selector, textInput) {
        return document.querySelector(selector).innerHTML = textInput
    }
    var getHTML = function(selector) {
        return document.querySelector(selector).innerHTML
    }

    window.modom = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML
    }
}())
