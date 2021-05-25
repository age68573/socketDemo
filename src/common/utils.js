module.exports = {
  setNowTimes: function() {
    let myDate = new Date();
    // console.log(myDate)
    let wk = myDate.getDay();
    let yy = String(myDate.getFullYear());
    let mm = myDate.getMonth() + 1;
    let dd = String(
      myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
    );
    let hou = String(
      myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
    );
    let min = String(
      myDate.getMinutes() < 10
        ? "0" + myDate.getMinutes()
        : myDate.getMinutes()
    );
    let sec = String(
      myDate.getSeconds() < 10
        ? "0" + myDate.getSeconds()
        : myDate.getSeconds()
    );
    let weeks = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    let week = weeks[wk];
    // this.nowDate = yy + "年" + mm + "月" + dd + "日"
    // this.nowTime = hou + ":" + min + ":" + sec;
    // this.nowWeek = week;
    return yy + "年" + mm + "月" + dd + "日" + hou + ":" + min;
  }
}