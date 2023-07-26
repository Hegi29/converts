const typeNumber = (lengthNonCents) => {
  if (lengthNonCents > 30) {
    throw Error('Maximal is Nonillion (10^30)');
  }

  switch (lengthNonCents) {
    case 2:
      return 'Hundred';
    case 3:
      return 'Thousand';
    case 6:
      return 'Million';
    case 9:
      return 'Billion';
    case 12:
      return 'Trillion';
    case 15:
      return 'Quadrillion';
    case 18:
      return 'Quintillion';
    case 21:
      return 'Sextillion';
    case 24:
      return 'Septillion';
    case 27:
      return 'Octillion';
    case 30:
      return 'Nonillion';
    default:
      return '';
  }
}

export default typeNumber;
