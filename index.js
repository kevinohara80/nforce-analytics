

module.exports = function(nforce, name) {

  var plugin = nforce.plugin(name || 'analytics');

  plugin.fn('updateReport', function(args, callback) {

    var opts = this._getOpts(args, callback);

    opts.uri = opts.oauth.instance_url 
      + '/services/data/' + this.apiVersion
      + '/analytics/reports/' + opts.reportId;
    
    opts.method = 'PATCH';

    // TODO: implement body
    opts.body = {};

    return this._apiRequest(opts, opts.callback);

  });

  plugin.fn('copyReport', function(args, callback) {
    
    var opts = this._getOpts(args, callback);
    
    opts.uri = opts.oauth.instance_url 
      + '/services/data/' + this.apiVersion
      + '/analytics/reports?cloneId=' + opts.reportId;

    opts.method = 'POST';

    return this._apiRequest(opts, opts.callback);
  })

  plugin.fn('deleteReport', function(args, callback) {

    var opts = this._getOpts(args, callback);

    opts.uri = opts.oauth.instance_url 
      + '/services/data/' + this.apiVersion
      + '/analytics/reports/' + opts.reportId;
    
    opts.method = 'DELETE';

    return this._apiRequest(opts, opts.callback);

  });

  plugin.fn('describeReport', function(args, callback) {

    var opts = this._getOpts(args, callback);

    opts.uri = opts.oauth.instance_url 
      + '/services/data/' + this.apiVersion
      + '/analytics/reports/' + opts.reportId + '/describe';
    
    opts.method = 'GET';

    return this._apiRequest(opts, opts.callback);

  });

  plugin.fn('listReports', function(args, callback) {

    var opts = this._getOpts(args, callback);

    opts.uri = opts.oauth.instance_url 
      + '/services/data/' + this.apiVersion
      + '/analytics/reports';

    opts.method = 'GET';

    return this._apiRequest(opts, opts.callback);

  });

  plugin.fn('executeSync', function(args, callback) {

    var opts = this._getOpts(args, callback);

  });

  plugin.fn('executeAsync', function(args, callback) {

    var opts = this._getOpts(args, callback);

  });

  plugin.fn('listInstances', function(args, callback) {

    var opts = this._getOpts(args, callback);

  });

  plugin.fn('getInstanceResults', function(args, callback) {

    var opts = this._getOpts(args, callback);

  });

};