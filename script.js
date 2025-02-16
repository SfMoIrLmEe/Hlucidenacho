const decryptionDict = {
  'a': '4', 'b': '!3', 'c': '©', 'd': '!)', 'e': '3', 'f': '!=', 'g': '(_-', 'h': '!-!', 'i': '1',
  'j': '_!', 'k': '!<', 'l': '!_', 'm': '^^', 'n': '!\!', 'o': '0', 'p': '!°', 'q': '0-', 'r': '!°\\',
  's': '5', 't': '7', 'u': '!_!', 'v': '\\/', 'w': '!\!/', 'x': '><', 'y': ' `/', 'z': '_/_',
  
  // Uppercase letters
  'A': '4//U', 'B': '!3//U', 'C': '©//U', 'D': '!)//U', 'E': '3//U', 'F': '!=//U', 'G': '(_-//U', 'H': '!-!//U', 'I': '1//U',
  'J': '_!//U', 'K': '!<//U', 'L': '!_//U', 'M': '^^//U', 'N': '!\\!//U', 'O': '0//U', 'P': '!°//U', 'Q': '0-//U', 'R': '!°\\//U',
  'S': '5//U', 'T': '7//U', 'U': '!_!//U', 'V': '\\//U', 'W': '!\//!//U', 'X': '><//U', 'Y': ' `///U', 'Z': '_//_/U',

  // Numbers
  '1': '!', '2': '°/_', '3': '°.)', '4': '/-!', '5': '-!.', '6': '(', '7': '-/', '8': '°°', '9': '°)', '0': '()',
  
  // Special characters
  '-': '_', '_': '-',

  // Special sequences
  '///': ' ', '\\\\': ' '
};

function decryptText() {
  const inputText = document.getElementById('inputText').value;
  
  // Split input into chunks (next word, next letter, etc.)
  const chunks = inputText.split('///').map(chunk => chunk.split(' \\\\').map(subChunk => subChunk.trim()));
  
  // Function to handle individual chunks
  const decryptChunk = (chunk) => {
    return chunk.map(symbol => {
      // If symbol exists in dictionary, return its value, else return as is
      return decryptionDict[symbol] || symbol;
    }).join('');
  };
  
  // Decrypt each chunk and join the result
  const decryptedText = chunks.map(decryptChunk).join(' ');
  
  // Output the decrypted text to the page
  document.getElementById('outputText').innerText = decryptedText;
}
