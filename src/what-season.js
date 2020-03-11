module.exports = function getSeason(dt) {
  console.log(dt);
  if(dt === undefined){
    return 'Unable to determine the time of year!'
  }else if(!dt.getTime()){
    throw new Error("Error");
  } else if(dt.getMonth() >= 2 && dt.getMonth() <=4){
    return 'spring';
  }else if(dt.getMonth() >= 5 && dt.getMonth() <=7){
    return 'summer';
  }else if(dt.getMonth() >= 8 && dt.getMonth() <=10){
    return 'autumn';
  }else if((dt.getMonth() >= 0 && dt.getMonth() <=1)  || dt.getMonth() == 11){
    return 'winter';
  }
};