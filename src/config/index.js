import base from './base';

const env = process.env.BUILD_ENV || 'dev';

export default Object.assign(base , require(`./${env}.env`));