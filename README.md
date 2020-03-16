### Lerna + StoryBook Vue.js
https://dev.to/pixari/multiple-vuejs-apps-in-a-lerna-monorepo-sharing-a-storybook-component-library-1f7k
https://medium.com/js-dojo/sharing-reusable-vue-js-components-with-lerna-storybook-and-npm-7dc33b38b011

```sh
mkdir lerna-vue-qpitlove && cd $_
npx lerna init --independent
npx -p @storybook/cli sb init --type vue

npm install vue --save
npm install vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue --save-dev
```

cat .gitignore
```
node_modules
storybook-static
npm-debug.log*
lerna-debug.log*
```

```sh
#npm install -g @vue/cli
npm install --save-dev @vue/cli-service
```

```
# lerna add @qpitlove-vue/j-table-row --scope=@qpitlove-vue/j-table
./node_modules/.bin/learn bootstrap
```