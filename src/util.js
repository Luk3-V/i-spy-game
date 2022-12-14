export const formatTime = (num) => {
    let dec_num = parseInt(num, 10); // don't forget the second param
    var seconds = Math.floor(dec_num / 10);
    var decimal = dec_num - (seconds * 10)

    if (seconds < 10) {seconds = "0"+seconds;}
    return seconds+'.'+decimal;
}

export const getPageWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }