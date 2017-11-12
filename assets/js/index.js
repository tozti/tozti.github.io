const container = document.getElementById('words')
const words = [container.innerText, 'réunions', 'soirées', 'évènements', 'documents', 'discussions', 'décisions']

const interval = 5000

let current = 0
let length = words[current].length

function update() {
  container.innerText = words[current].substr(0, length)
}

function deleteWord() {
  if (length) {
    length -= 1
    update()
    window.setTimeout(deleteWord, 70)
  }
  else {
    current = (current + 1) % words.length
    writeWord()
  }
}

function writeWord() {
  if (length < words[current].length) {
    length += 1
    update()
    window.setTimeout(writeWord, 100 + Math.random() * 80)
  }
  else {
    window.setTimeout(deleteWord, interval)
  }
}

window.setTimeout(deleteWord, interval)
