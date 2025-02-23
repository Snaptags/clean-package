const { resolve } = require('path');

module.exports = {
	sourcePath: resolve(process.cwd(), 'input.json'),
	backupPath: resolve(process.cwd(), './3-using-config-js.bak'),
	indent: 3,
	remove: ['3a'],
	replace: {
		'3b': 'abc'
	}
};
