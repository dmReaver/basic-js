module.exports = function createDreamTeam(arr) {
  let dm = [];
  if (Array.isArray(arr)){
    arr.forEach(e => {
      if(typeof e == 'string'){
        e = e.trim();
        if(/^[A-Za-z]{1}/.test(e[0])){
          dm.push(e[0].toUpperCase());
        } 
      }
    });

  } else {
    return false;
  }
  return dm.sort().join('');

};

// console.log(createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']));

