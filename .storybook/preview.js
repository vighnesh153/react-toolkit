
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	options: {
    storySort: {
      order: ['Welcome', 'Components', 'Example'],
      locales: 'en-US',
    },
  },
}
