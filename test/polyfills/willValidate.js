'use strict';

import test from 'ava';
import willValidate from '../../src/polyfills/willValidate';

test('willValidate', t => {
  var input = document.createElement('input');
  input.type = 'hidden';
  t.false(willValidate.call(input));
  input.type = 'text';
  t.true(willValidate.call(input));
  var select = document.createElement('select');
  t.true(willValidate.call(select));
});
