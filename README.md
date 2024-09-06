# health-center-client-desktop

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### Changing the PrimeReact Theme

To change the prime react theme just modify theme import in `theme.css` located in public `theme/light` and `theme/dark` with the theme you want to use in your application.

**Default Theme configuration**

- Theme ID : `theme-css`
- Theme name : `light`

**Note:** Remove the unnecessary theme folders from the public theme folder to run the application in much more efficient way.
