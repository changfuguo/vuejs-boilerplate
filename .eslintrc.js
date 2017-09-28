const env = require('yargs').env;
const isDev = env == 'dev';
module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		"ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true
        }
	},
	// extends: 'standard',
	plugins:[
		'html'
	],
	globals: {    // 声明在代码中自定义的全局变量
    	"todos_lib": true,
    	"document": true,
	    "navigator": true,
	    "window": true
  	},
  	env: {
	    "browser": true,
	    "es6": true,
	    "node": true
	},
	rules: {
		"indent": [
            2,
            4
        ],
        "no-cond-assign": 2,
        "no-dupe-args": 2,
        "no-debugger": (isDev ? 0 : 2),
        "no-console": 0,
        "no-unused-vars": 0, //确实会有一些变量定义了但是没用到
        "no-empty": 2,
        "no-func-assign": 2,
        "no-process-env ": 0,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-unreachable": 2,
        "no-alert": 0,
        "camelcase": [2, {"properties": "always"}], //强制驼峰命名
		"arrow-parens": [2, "as-needed"],
	    "arrow-spacing": [2, { "before": true, "after": true }], 
	    "array-bracket-spacing": [2, "never"],
	    "block-spacing": [2, "always"],
	    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
	    "comma-dangle": [2, "never"],
	    "comma-spacing": [2, { "before": false, "after": true }],
	    "comma-style": [2, "last"],
		'no-debugger': (isDev ? 0 : 2),
	    
	    'semi': [1, 'always']
	}
}