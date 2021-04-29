/** If the string contains a phrase, prefix it. This is useful for making ordering sections */
const prefix = (phrase, prefix) => (/** @type {string} */ value) => {
  const index = value.indexOf(phrase);
  return index > -1 ? value.substr(0, index) + prefix + value.substr(index) : value;
};
const pipe = (...fns) => value => fns.reduce((result, fn) => fn(result), value);

function storySort(a, b) {
  const prefixFn = pipe(
    prefix('welcome-', '0'),
    prefix('getting-started', 'a'),
    prefix('components-', '2'),
    prefix('readme', 'aa0'),
    prefix('primary', 'aa1'),
    prefix('secondary', 'bbb'),
    prefix('link', 'bb'),
    prefix('success', 'cc'),
    prefix('info', 'dd'),
    prefix('warning', 'ee'),
    prefix('error', 'ff'),
  );

  const left = prefixFn(a[0]);
  const right = prefixFn(b[0]);

  // if (a[0].startsWith('component') && b[0].startsWith('component')) {
  //   console.log('**************');
  //   console.log(left);
  //   console.log(right);
  //   console.log(left === right ? 0 : left.localeCompare(right));
  // }

  return left === right ? 0 : left.localeCompare(right);
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	options: {
    // storySort: {
    //   order: ['Welcome', 'Components', 'Example'],
    //   locales: 'en-US',
    // },
    storySort,
  },
}
