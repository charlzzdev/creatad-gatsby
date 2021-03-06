module.exports = {
  withoutSpecialChars(str) {
    return str.replace(/ /g, '_')
      .replace(/á/gi, 'a')
      .replace(/é/gi, 'e')
      .replace(/ő|ö|ó/gi, 'o')
      .replace(/ű|ü|ú/gi, 'u')
      .replace(/í/gi, 'i')
      .toLowerCase();
  }
};
