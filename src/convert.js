import numberToWording from './numberToWording'
import typeNumber from './typeNumber'

const CURRENCY = 'dollars';

const arrangeWord = (arrObj, isCents) => {
  let result = '';

  for (const item of arrObj) {
    result += `${item.terbilang} ${item.type} `;
  }

  if (result.trim()) {
    result += ` ${!isCents ? CURRENCY : 'cents'}`;
  }

  return result;
}

const generateWording = (inputValue, isCents) => {
  try {
    let formattedValue = Intl.NumberFormat('id-ID').format(inputValue);
    const arrFormattedValue = formattedValue.split('.');

    let arrObj = [];

    for (const item of arrFormattedValue) {
      const value = parseInt(item, 10);
      const rts = Math.floor(value / 100) * 100;
      const plh = Math.floor(value / 10) * 10;
      const stn = item - plh;

      const obj = {
        ratusan: rts,
        puluhan: plh - rts,
        satuan: stn,
        terbilang: '',
        type: ''
      }

      arrObj.push(obj);
    }

    let loopType = 1;

    for (const item of arrObj) {
      if (item.ratusan > 0) {
        const r1 = parseInt(item.ratusan.toString().split('')[0], 10);
        const r2 = numberToWording(r1);
        item.terbilang += `${r2} Hundred`;
      }

      if (item.puluhan > 0) {
        if (item.ratusan > 0) {
          item.terbilang += ' and ';
        }

        if (item.puluhan > 10) {
          const p1 = numberToWording(item.puluhan);
          item.terbilang += ` ${p1}`;
          item.terbilang += item.satuan > 0 ? '-' : '';
        } else {
          const p2 = numberToWording(item.puluhan + item.satuan);
          item.terbilang += ` ${p2}`;
        }
      }

      if (item.satuan > 0) {
        if (item.puluhan > 10) {
          item.terbilang += item.ratusan > 0 && item.puluhan === 0 ? ' ' : '';

          const s1 = numberToWording(item.satuan);
          item.terbilang += s1;
        } else if (item.puluhan === 0) {
          const s2 = numberToWording(item.satuan);
          item.terbilang += ` ${s2}`;
        }

      }

      if (item.ratusan > 0 || item.puluhan > 0 || item.satuan > 0) {
        item.type = typeNumber((arrObj.length - loopType) * 3);
      }

      loopType++;
    }

    return arrangeWord(arrObj, isCents);
  } catch (error) {
    alert(error);
    return error;
  }
}

const convert = (inputValue) => {
  let result = '';

  const arrInput = inputValue.split('.');
  const nonCents = arrInput[0] ?? '';
  const cents = arrInput[1] ?? '';

  result += generateWording(nonCents, false);

  if (cents && result.trim()) {
    result += ' and ';
  }

  if (cents) {
    result += generateWording(cents, true);
  }

  return result.toUpperCase();
}

export default convert;
