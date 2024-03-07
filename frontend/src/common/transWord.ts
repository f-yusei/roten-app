export const translateWords = (words: string) => {
    let word = '';
    switch (words) {
      case 'sauce':
        word = 'ソース';
        break;
      case 'katsuo':
        word = 'かつおぶし';
        break;
      case 'aosa':
        word = 'あおさ';
        break;
      case 'mayo':
        word = 'マヨネーズ';
        break;
      case 'mentaiMayo':
        word = 'めんたいマヨ';
        break;
      case 'cheese':
        word = 'チーズ';
        break;
      default:
        word = '?';
        break;
    }
    return word;
  };