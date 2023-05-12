/**
 * @type {Buffer}
 */
const buff = Buffer.alloc(8)

buff.write('hello', "utf-8")

console.log(buff.toJSON())
/**
{
    type: 'Buffer',
        data: [
            104, => h
            101, => e
            108, => l
            108, => l
            111, => 0
            0, => empty
            0, => empty
            0  => empty
        ]
}
 */

