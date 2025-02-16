const decryptionDict = {
  // Lowercase letters
  '4': 'a', '!3': 'b', '©': 'c', '!)': 'd', '3': 'e', '!=': 'f', '(_-': 'g', '!-!': 'h', '1': 'i',
  '_!': 'j', '!<': 'k', '!_': 'l', '^^': 'm', '!\!': 'n', '0': 'o', '!°': 'p', '0-': 'q', '!°\\': 'r',
  '5': 's', '7': 't', '!_!': 'u', '\\/': 'v', '!\!/': 'w', '><': 'x', ' `/': 'y', '_/_': 'z',

  // Uppercase letters with //U suffix
  '4//U': 'A', '!3//U': 'B', '©//U': 'C', '!)//U': 'D', '3//U': 'E', '!=//U': 'F', '(_-//U': 'G', '!-!//U': 'H', '1//U': 'I',
  '_!//U': 'J', '!<//U': 'K', '!_//U': 'L', '^^//U': 'M', '!\\!//U': 'N', '0//U': 'O', '!°//U': 'P', '0-//U': 'Q', '!°\\//U': 'R',
  '5//U': 'S', '7//U': 'T', '!_!//U': 'U', '\\//U': 'V', '!\!//U': 'W', '><//U': 'X', ' `////U': 'Y', '_//_/U': 'Z',

  // Numbers
  '!': '1', '°/_': '2', '°.)': '3', '/-!': '4', '-!.': '5', '(': '6', '-/': '7', '°°': '8', '°)': '9', '()': '0',

  // Special characters
  '_': '-', '-': '_',

  // Sequences for space and word separation
  '///': ' ', '\\\\': ' '
};

function decryptText() {
  const inputText = document.getElementById('inputText').value;

  // Replace '///' for spaces and '\\' for word breaks before decryption
  let cleanedInput = inputText.replace(/\/{3}/g, ' ').replace(/\\\\/g, ' ').trim();

  let decryptedText = '';
  
  // Split the cleaned input by spaces (word separator) and decrypt each part
  const parts = cleanedInput.split(' ');

  parts.forEach((part, index) => {
    const decryptedPart = decryptionDict[part] ? decryptionDict[part] : part;
    decryptedText += decryptedPart;

    // If it's not the last part, add a space to separate words
    if (index < parts.length - 1) {
      decryptedText += ' ';
    }
  });
  
  // Output the decrypted text to the page
  document.getElementById('outputText').innerText = decryptedText;
}
