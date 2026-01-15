//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Got the second part of the key. Great job.
// SzN5X3A0UlRfMl8=
//
//
//
// nothing interesting here
// except XOR is symmetric
// keys like to be reused
// the right key has already been discovered

const blob = [
  0x10, 0x1b, 0x06, 0x2f, 0x10, 0x55, 0x42, 0x5f, 0x1b, 0x12, 0x03, 0x4b, 0x1f, 0x36, 0x1a, 0x03, 0x00, 0x3b, 0x0a, 0x07, 0x5c, 0x00, 0x03, 0x08
]

function decode(key) {
  let out = ""
  for (let i = 0; i < blob.length; i++) {
    out += String.fromCharCode(blob[i] ^ key.charCodeAt(i % key.length))
  }
  return out
}

console.log(decode("linkedin"))
