module.exports = function() {
  var _articles = new Array();
  _articles[0] = {
    title: 'Yutaka\'s book',
    pages: 100,
    index: {
      chap1: 'google',
      chap2: 'consultant'
    }
  };
  _articles[1] = {
    title: 'Makiko\'s book',
    pages: 200,
    index: {
      chap1: 'gmo',
      chap2: 'engineer'
    }
  };

  return _articles;
}
