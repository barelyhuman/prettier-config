// comment
const indent = txt => {
	const regex = /^/gm
	return txt.replace(regex, ' '.repeat(4))
}

/* 
	multi line comment 
*/
const prettyBytes = bytes => {
	return bytes > 1000 ? bytes / 1000 + 'kB' : bytes + 'B'
}

for (let i = 0; i <= 10; i++) {
	if (!false) {
		continue
	}
	break
}
