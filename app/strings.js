// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
stringCharacter = str.charAt(position)
return stringCharacter;
}

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
    combinedString = str1.concat(seperator, str2)
    return combinedString;
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
    char = str.charAt(position);
    captlChar = char.toUpperCase();
    return captlChar;
    console.log(captlChar);
}