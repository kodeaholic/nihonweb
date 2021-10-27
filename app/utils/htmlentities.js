/* eslint-disable no-plusplus */
/* eslint-disable func-names */
function htmlEntityEncode(str) {
  if (!str || !str.length) return '';
  const buf = [];

  for (let i = str.length - 1; i >= 0; i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }

  return buf.join('');
}

function htmlEntityDecode(str) {
  if (!str || !str.length) return '';
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

export { htmlEntityDecode, htmlEntityEncode };
