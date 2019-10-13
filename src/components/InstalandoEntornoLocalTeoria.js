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

Clase - Añadiendo imágenes con Webpack

Vamos a usar File Loader para acceder a las imágenes de nuestro proyecto desde el código.

Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero al momento de compilar, Webpack guardará las imágenes en una nueva carpeta junto al código para producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres y rutas de los archivos.

Instalación de File Loader:

$ npm install --save-dev file-loader

Configuración de File Loader en Webpack (webpack.config.js):

rules: [
  {
    test: /\.(png|gif|jpg)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'assets/[hash].[ext]' },
      }
    ],
  },
],

Uso de File Loader con React:

import React from 'react';
import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

const Component = () => (
  <img src={nombreDeLaImagen} />
);

export default Component;

Clase - Creando una Fake API

Vamos a usar JSON Server para crear una Fake API: una API ““falsa”” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

Instalación de JSON Server:

sudo npm install json-server -g
```

Recuerda que en Windows debes correr tu terminal de comandos en modo administrador.

Ejecutar el servidor de JSON Server:

```bash
json-server archivoParaTuAPI.json

Clase - React Hooks: useEffect y useState

En esta clase el profesor Oscar Barajas nos enseña qué es y cómo implementar React Hooks: una característica de React disponible a partir de la versión 16.8 que nos permite agregar estado y ciclo de vida a nuestros componentes creados como funciones.

React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: páginas web, aplicaciones móviles o de escritorio, experiencias de realidad virtual, entre otras.

Clase - Lectura React Hooks

Los React Hooks son una característica de React que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones.

El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).

import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  return <div>{name}div>;
}

El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.

import React, { useState, useEffect } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  useEffect(() => {
    document.title = name;
    return () => {
      document.title = 'el componente se desmontó';
    };
  }, [name]);

  return <div>{name}div>;
}

Clase - PropTypes

Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

Instalación de PropTypes:

$ npm install --save prop-types

Uso de PropTypes:

import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ name, lastName, age, list }) => {
  // ...
};

Component.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  list: PropTypes.array,
};

export default Component;

Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo isRequired.

Component.propTypes = {
  name: PropTypes.string.isRequired, // obligatorio
  lastName: PropTypes.string.isRequired, // obligatorio
  age: PropTypes.number, // opcional,
  list: PropTypes.array, // opcional
};

*/