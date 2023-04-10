/* Task 3 */
function mirrorOfWords(stroke) {
  const newStroke = [];
  for (let i = stroke.length - 1; i >= 0; i--) {
    newStroke[stroke.length - i] = stroke[i];
  }
  return newStroke.join("");
}

let result = console.log(mirrorOfWords("Привет мир"));
