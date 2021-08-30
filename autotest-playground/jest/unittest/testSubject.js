const getTranslations = require('./translationsService');
const moduleWeAreTesting = (language, bool = true) => {
    const trans = getTranslations();
    const getString = stringKey => {
        return trans['strings'][language][stringKey];
    };
    const res = bool ? getString('agree') : getString('disagree');
    return `They say: ${res}`
};
module.exports = moduleWeAreTesting;
