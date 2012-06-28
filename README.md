# flatten

A tiny utility to flatten arrays of arrays (of arrays, etc., recursively) into a single array of non-arrays.

## example:

> var flatten = require('flatten');
undefined
> flatten([1, [2, 3], [4, 5, 6], [7, [8, 9]], 10])
[ 1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10 ]

## install:

    npm install flatten

## license:

MIT/X11.