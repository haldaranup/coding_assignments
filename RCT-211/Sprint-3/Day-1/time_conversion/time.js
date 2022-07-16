function timeConversion(time) {
  let sec = Math.floor(time / 1000);
  if (sec > 60) {
    let min = Math.floor(sec / 60);
    if (min > 60) {
      let hr = Math.floor(min / 60);
      min = min % 60;
      sec = sec % 60;
      return `${hr} hours ${min} minutes ${sec} seconds`;
    }
    sec = sec % 60;
    return `${min} minutes ${sec} seconds`;
  }
  return `${sec} seconds`;
}

module.exports = timeConversion;