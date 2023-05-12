const fs = require('fs')

// It is a lot faster than sync or callback solution
// but
// Don't do this - It consumes a lot of memory
console.time('write-many')
const file = fs.createWriteStream('./big.txt')

for (let i = 0; i <= 1e6; i++) {
    const buff = Buffer.from(`This is line ${i}\n`)
    file.write(buff)
}

file.end()
console.timeEnd('write-many')