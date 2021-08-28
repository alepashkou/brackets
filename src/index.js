module.exports = function check(str, bracketsConfig) {
	let configs = bracketsConfig.map((j) => j.join(''))
	
	for (let i = 0; i < configs.length; i++) {
	
	  if (str.includes(configs[i])) {
	  
	  str = str.replace(configs[i], '');
	  
	  i = -2;
	  
	  } else {continue}
	  
	}
  
	return (str.length === 0) ? true : false;
  }