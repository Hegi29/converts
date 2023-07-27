const numberToWording = (number) => {
  switch (number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    case 11:
      return 'Eleven';
    case 12:
      return 'Twelve';
    case 13:
      return 'Thirteen';
    case 14:
      return 'Fourteen';
    case 15:
      return 'Fiveteen';
    case 16:
      return 'SixTeen';
    case 17:
      return 'Seventeen';
    case 18:
      return 'Eighteen';
    case 19:
      return 'Nineteen';
    case 10:
      return 'Ten';
    case 20:
      return 'Twenty';
    case 30:
      return 'Thirty';
    case 40:
      return 'Forty';
    case 50:
      return 'Fivety';
    case 60:
      return 'Sixty';
    case 70:
      return 'Seventy';
    case 80:
      return 'Eighty';
    case 90:
      return 'Ninety';
    default:
      return '';
  }
}

export default numberToWording;
