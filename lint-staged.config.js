export default {
  '*': () => 'tsc -b --noEmit',
  '*.{js,ts,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,css,scss}': ['prettier --write'],
};
