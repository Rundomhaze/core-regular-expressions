// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.

// 234-600-142 22

function hasSNILS(string) {
  return /\d{3}-\d{3}-\d{3}\s\d{2}/.test(string)
}


// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
  const SNILS = string.match(/\d{3}-\d{3}-\d{3}\s\d{2}/).join('');
  return SNILS;
};


// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
  const allSNILS = string.match(/\d{3}-\d{3}-\d{3}\s\d{2}/g);
  return allSNILS;  
};


// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
  const reg = /\d{3}-\d{3}-\d{3}\s/g;
  const hiddenSNILS = string.replace(reg, 'XXX-XXX-XXX ');
  return hiddenSNILS;
}


// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.

function formatSNILS(string) {
const reg = /(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})/gm
const formattedSNILS = string.replace(reg, '$1-$2-$3 $4')
return formattedSNILS;
}

module.exports = {
  hasSNILS,
  grabSNILS,
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS
};
