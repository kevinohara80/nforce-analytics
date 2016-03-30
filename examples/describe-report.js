var nforce   = require('nforce');
var _        = require('lodash');
var util     = require('util');

require('../')(nforce);

var org = nforce.createConnection({
  clientId: '3MVG9rFJvQRVOvk5nd6A4swCyck.4BFLnjFuASqNZmmxzpQSFWSTe6lWQxtF3L5soyVLfjV3yBKkjcePAsPzi',
  clientSecret: '9154137956044345875',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  mode: 'single',
  username: process.env.SFUSER,
  password: process.env.SFPASS,
  plugins: ['analytics'],
  debug: true
});

org.authenticate().then(function(){
  return org.query({ query: 'SELECT Id FROM Report LIMIT 1', raw: true });
}).then(function(res) {
  var reportId = res.records[0].Id;
  return org.analytics.describeReport({ reportId: reportId });
}).then(function(report) {
  console.log(report);
}).catch(function(err) {
  console.error(err);
});
