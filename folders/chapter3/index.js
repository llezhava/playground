const { log } = require('../../helpers')

function formatter(fn) {
	return function(str) {
		return fn(str)
	}
}

let toLoverCase = formatter(s => s.toLowerCase())

let low = toLoverCase('STR')

log(low)