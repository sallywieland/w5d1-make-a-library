// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function () {
    'use strict' // adds extra error checking

    var one = function(selector) { 
    return document.querySelector(selector)
    }
    var all = function(selectors) {
        return document.querySelectorAll(selectors)
    }
    var remove = function(selector) {
        return one(selector).remove()
    }
    var addClass = function(selector, className) {
        return one(selector).classList.add(className)
    }
    var removeClass = function(selector, className) {
        return one(selector).classList.remove(className)
    }
    var hasClass = function(selector, className) {
        return one(selector).classList.contains(className)
    }
    var getAttr = function(selector, attribute) {
        return one(selector).getAttribute(attribute)
    }
    var setAttr = function(selector, attributeName, attributeValue) {
        return one(selector).setAttribute(attributeName, attributeValue)
    }
    var setHTML = function(selector, textInput) {
        return one(selector).innerHTML = textInput
    }
    var getHTML = function(selector) {
        return one(selector).innerHTML
    }

// adventurer mode

    var getProp = function(selector, property) {
        return one(selector)[property]
    }

    var ajax = function(url, success) {
        fetch(url)
        .then(response => response.json()) // boiler plate
        .then(success)
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
        getHTML: getHTML,
        getProp: getProp,
        ajax: ajax,
    }
}())
