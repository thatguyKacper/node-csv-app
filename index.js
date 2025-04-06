import { appendFileSync } from 'fs'
import { createInterface } from 'readline'

const content = 'Test content'

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const readLineAsync = (message) =>
  new Promise((resolve) => readline.question(message, resolve))

class Person {
  constructor(name = '', number = '', email = '') {
    this.name = name
    this.number = number
    this.email = email
  }

  saveToCSV() {
    const content = `${this.name},${this.number},${this.email}\n`
    try {
      appendFileSync('./contacts.csv', content)
      console.log(`${this.name} Saved!`)
    } catch (err) {
      console.error(err)
    }
  }
}
