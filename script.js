// Decryption dictionary for the encrypted characters
const decryptionDict = {
  '!-!': 'h', '1': 'i', '!3': 'b', '0': 'o', '!°': 'p', '°/_': '2', '°.)': '3', '/-!': '4', '-!.': '5',
  '(': '6', '-/': '7', '°°': '8', '°)': '9', '()': '0', '©': 'c', '!)': 'd', '3': 'e', '!=': 'f',
  '(_-': 'g', '!_': 'l', '^^': 'm', '!\!': 'n', '\\/': 'v', '!\!/': 'w', '><': 'x', ' `': 'y', '_/_': 'z',
  '4': 'a', '5': 's', '7': 't', '!_!': 'u', '!°\\': 'r', '0-': 'q', '°\\': 'r',
  '4//U': 'A', '!3//U': 'B', '©//U': 'C', '!)//U': 'D', '3//U': 'E', '!=//U': 'F', '(_-//U': 'G', '!-!//U': 'H', '1//U': 'I',
  '_!//U': 'J', '!<//U': 'K', '!_//U': 'L', '^^//U': 'M', '!\\!//U': 'N', '0//U': 'O', '!°//U': 'P', '0-//U': 'Q', '!°\\//U': 'R',
  '5//U': 'S', '7//U': 'T', '!_!//U': 'U', '\\//U': 'V', '!\!//U': 'W', '><//U': 'X', ' `////U': 'Y', '_//_/U': 'Z',
  // Special character mappings
  '///': ' ', '\\\\': ' '
};

function decryptText() {
  const inputText = document.getElementById('inputText').value;

  // First, replace '///' with spaces and '\\\\' with word separators (spaces).
  let cleanedInput = inputText.replace(/\/{3}/g, ' ').replace(/\\\\/g, ' ').trim();

  let decryptedText = '';

  // Split the input into parts based on spaces (space is now treated as separator for letters/words)
  const parts = cleanedInput.split(' ');

  parts.forEach((part, index) => {
    // If the part is in the decryption dictionary, replace it, else keep it as it is.
    const decryptedPart = decryptionDict[part] ? decryptionDict[part] : part;

    // Add the decrypted character or word to the final text
    decryptedText += decryptedPart;

    // If it's not the last part, add a space to separate words
    if (index < parts.length - 1) {
      decryptedText += ' ';
    }
  });

  // Output the decrypted text to the page
  document.getElementById('outputText').innerText = decryptedText;
}
