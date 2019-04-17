'use strict';

module.exports = function(Status) {

  [
    'upsertWithWhere',
    'replaceOrCreate',
    'patchOrCreate',
    'create',
    'deleteById',
    'createChangeStream',
    'prototype.patchAttributes',
    'findById',
    'find',
    'updateAll',
    'findOne',
    'replaceById',
    'exists',
    'count',
  ].forEach(method => Status.disableRemoteMethodByName(method));

  Status.remoteMethod('getStatus', {
    description: 'shown response status code should be 201',
    http: {verb: 'post', path: '/status', status: 201},
  });
};
