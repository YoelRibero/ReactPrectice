/*

Clase - Inicializando proyecto

Iniciar un proyecto de Node.js:

$ npm init -y


Instalar React:
bash

$ npm install --save react react-dom

Clase - Agregando compatibilidad con todos los navegadores usando Babel

Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.
Instalación de Babel y otras herramientas para que funcione con React:

$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

Configuración de Babel (.babelrc):

{
  ""presets"": [
    ""@babel/preset-env"",
    ""@babel/preset-react""
  ],
}

Clase - Webpack: Empaquetando nuestros módulos

"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:

npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev

Configuración de Webpack (webpack.config.js):

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};

Script para ejecutar las tareas de Webpack (package.json):

{
  ""scripts"": {
    ""build"": ""webpack --mode production""
  },
}

Clase - Webpack Dev Server: Reporte de errores y Cambios en tiempo real

Instalación de Webpack Dev Server:

npm install --save-dev webpack-dev-server

Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

{
  ""scripts"": {
    ""build"": ""webpack --mode production"",
    ""start"": ""webpack-dev-server --open --mode development""
  },
}

Clase - Estilos con SASS

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:

npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

Configuración de Sass en Webpack (webpack.config.js):

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// ...

module: {
  rules: [
    {
      test: /\.(s*)css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader',
        'sass-loader',
      ],
    }, 
  ],
},

// ...

plugins: [
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
  }),
],`

Clase - Configuración final: ESLint y Git Ignore

El Git Ignore es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.

Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.
Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.
Instalación de ESLint:

npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

Podemos configurar las reglas de ESLint en el archivo .eslintrc.

*/