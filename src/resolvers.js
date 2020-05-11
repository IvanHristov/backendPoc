const mergeDeep = require('../src/utils');
const contactResolvers = require('../src/contact/contactResolvers')
const companyResolvers = require('../src/company/companyResolvers')

module.exports = mergeDeep(contactResolvers, companyResolvers)