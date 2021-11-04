module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  babel: async options => {
    options.plugins.push('babel-plugin-inline-react-svg')
    return options
  },
}
