const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const buildConf = require('./build/config');
const getWebpackConfig = require(path.join(buildConf.BUILD_PATH, 'compile', 'webpack.compile'));

const argv = require('yargs').argv;
const ENV = argv.env;
module.exports = {
	compile(env) {
		return getWebpackConfig(env)
		    .then((logicConfig) => {
		        let startTime  = + new Date();
		        console.log('> Start build logic code!');


		        return new Promise((resolve, reject) => {
		            let compiler = webpack(logicConfig, (err, stats) => {
		                let endTime  = + new Date();
		                let wasteTime = Math.floor((endTime - startTime) / 1000);
		                if(err) {
		                    reject(err);
		                } else{
		                    resolve(compiler);
		                    console.log(`> Logic code build over! all ${wasteTime}s`)
		                }
		            })
		        });
		    }, (err) => {
		        console.log(err)
		    })
	}
};

if (ENV !== 'dev') {
	module.exports.compile(ENV);
}