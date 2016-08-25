/**
 * Created by ms.kim2 on 2016-08-25.
 */

'use strict';

import Realm from 'realm';
import Schema from './schema';

function getCurrent() {
  var schema = new Schema();
  var current = schema.current();

  return new Realm(current);
}

module.exports = {
  current: getCurrent
}