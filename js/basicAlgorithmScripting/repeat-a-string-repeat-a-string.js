function repeatStringNumTimes(str, num) {
  let result = '';
  if (num < 1) {
    return ''
  } else {
    for(let i = 0; i < num; i++) {
      result+=str;
    }
    return result
  }
}

repeatStringNumTimes("abc", 3);