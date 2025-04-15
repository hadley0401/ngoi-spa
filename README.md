# ngoispa-website

## Project setup
```
yarn install
```

npm install vue-i18n@9npm install vue-i18n@9### Required Dependencies
The project now uses Vue I18n for internationalization. Please install it with:
```
yarn add vue-i18n@9
```
or
```
npm install vue-i18n@9
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Internationalization
The website now supports both Vietnamese and English languages. The language can be changed using the language selector in the header. All text content is managed through translation files located in `src/i18n/locales/`.

To add new translations:
1. Add your text keys to both `en.js` and `vi.js` files
2. Use the `$t('your.text.key')` syntax in your Vue templates

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
