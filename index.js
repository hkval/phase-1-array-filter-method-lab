// Code your solution here
function findMatching(array, string){
    return array.filter(function(name){
        return name.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string){
    return array.filter(function(name){
        const len = string.length
        return name.slice(0,len) === string
    })

}

function matchName(array, string){
    return array.filter(function(element){
        return element.name === string
})
}
