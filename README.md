
# Projeto Front-end com Webpack

Este projeto tem como objetivo minificar e concatenar arquivos JavaScript e SCSS, gerando arquivos otimizados para ambientes de produção e permitindo um processo de desenvolvimento contínuo com a opção de minificação durante o watch.

## Objetivo

O projeto automatiza a compilação e minificação de arquivos front-end, utilizando Webpack para processar arquivos JavaScript e SCSS. Ele é flexível, permitindo que você escolha se deseja ou não minificar os arquivos durante o desenvolvimento (`watch`) ou apenas em produção (`build`).

## Instalação

### Requisitos

- Node.js (v12 ou superior)
- NPM (ou Yarn)

## Instalação e como utilizar

1. **Instale as dependências:**
    ```bash
    npm install
    ```

2. **Rodar o build para produção (minificação incluída):**
    ```bash
    npm run build
    ```

3. **Rodar o watch para desenvolvimento (com ou sem minificação, pode ser configurado no arquivo `webpack.config.js`):**
    ```bash
    npm run watch
    ```

### Estrutura de pastas para os arquivos originais (não processados):

- Os arquivos originais, como JavaScript e SCSS, devem ser colocados nas seguintes pastas:

    ```
    ├── assets/
    │   ├── admin/
    │   │   ├── src/
    │   │   │   ├── js/
    │   │   │   │   └── (coloque seus arquivos JS nessa pasta e os importe no arquivo _main.js)
    │   │   │   ├── scss/
    │   │   │   │   └── (coloque seus arquivos SCSS nessa pasta e os importe no arquivo _main.scss)
    │   ├── public/
    │   │   ├── src/
    │   │   │   ├── js/
    │   │   │   │   └── (coloque seus arquivos JS nessa pasta e os importe no arquivo _main.js)
    │   │   │   ├── scss/
    │   │   │   │   └── (coloque seus arquivos SCSS nessa pasta e os importe no arquivo _main.scss)
    ```

- **JavaScript:** Coloque seus arquivos JavaScript na pasta `assets/admin/src/js/` ou `assets/public/src/js/`.
- **SCSS:** Coloque seus arquivos SCSS na pasta `assets/admin/src/scss/` ou `assets/public/src/scss/`.

Somente os arquivos importados no arquivo `_main.js` (JavaScript) ou `_main.scss` (SCSS) serão processados e minificados.

### Configurando a Minificação no Watch

Para controlar se os arquivos JavaScript e SCSS serão minificados durante o watch, edite o arquivo `webpack.config.js`:

```javascript
const shouldMinifyInWatch = true;  // Altere para false se não quiser minificação no watch
```

- **`shouldMinifyInWatch = true`:** Minifica os arquivos no modo de desenvolvimento (`watch`).
- **`shouldMinifyInWatch = false`:** Não minifica os arquivos no modo de desenvolvimento.

## Tecnologias Utilizadas

- **Webpack**: Para processar e minificar os arquivos JavaScript e SCSS.
- **Babel**: Para transpilar JavaScript moderno.
- **Sass**: Para processar os arquivos SCSS e gerar CSS.
- **Terser Plugin**: Para minificação de JavaScript.
- **CSS Minimizer Plugin**: Para minificação de CSS.

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato.
