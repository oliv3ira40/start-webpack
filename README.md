
# Projeto Front-end com Webpack

Este projeto tem como objetivo minificar e concatenar arquivos JavaScript e SCSS, gerando arquivos otimizados para ambientes de produção e permitindo um processo de desenvolvimento contínuo com a opção de minificação durante o watch.

## Objetivo

O projeto automatiza a compilação e minificação de arquivos front-end, utilizando Webpack para processar arquivos JavaScript e SCSS. Ele é flexível, permitindo que você escolha se deseja ou não minificar os arquivos durante o desenvolvimento (`watch`) ou apenas em produção (`build`).

## Instalação e como utilizar

### Antes de começar:

Este projeto foi criado para ser integrado em qualquer projeto front-end, automatizando a compilação e minificação de arquivos JavaScript e SCSS. Siga os passos abaixo para integrá-lo ao seu projeto com facilidade.

### Requisitos

- Node.js (v12 ou superior)
- NPM (ou Yarn)

---

1. **Baixe o projeto:**
    - Clone ou baixe o repositório deste projeto Webpack para o seu ambiente de desenvolvimento, **em uma pasta separada do seu projeto atual**. Isso evita que arquivos sejam substituídos no seu projeto durante a integração.

2. **Exclua os arquivos `.gitignore` e `README.md`:**
    - **Motivo:** Para evitar conflitos com o repositório do seu próprio projeto, exclua os arquivos `.gitignore` e `README.md` deste projeto Webpack, ou adapte-os conforme necessário.
    - **Ação:** Delete ou modifique esses arquivos como preferir.

3. **Se você já possui um `package.json` no seu projeto atual:**
    - **Passo 1:** Abra o arquivo `package.json` do projeto Webpack que você baixou.
    - **Passo 2:** Copie as seções `devDependencies` e `scripts` deste arquivo para o `package.json` do seu projeto existente. **Atenção para não sobrescrever outras partes do seu `package.json`!**
    
    - **Motivo:** As dependências e scripts adicionados permitem que seu projeto use as funcionalidades do Webpack para compilar e minificar os arquivos JavaScript e SCSS.
    
    **Exemplo de fusão das seções `scripts` e `devDependencies`:**
    ```json
    {
      "name": "seu-projeto",
      "version": "1.0.0",
      "scripts": {
        "build": "webpack --mode production",
        "watch": "webpack --mode development --watch"
      },
      "devDependencies": {
        "webpack": "^5.0.0",
        "webpack-cli": "^4.0.0",
        "sass-loader": "^12.0.0",
        "css-loader": "^6.0.0",
        "mini-css-extract-plugin": "^2.0.0",
        "terser-webpack-plugin": "^5.0.0",
        "css-minimizer-webpack-plugin": "^3.0.0"
      }
    }
    ```

4. **Se o seu projeto atual não tiver um `package.json`:**
    - **Ação:** Simplesmente utilize o `package.json` deste projeto Webpack. **Copie-o para a raiz do seu projeto**.

5. **Copie os arquivos restantes do projeto Webpack para o seu projeto:**
    - **Motivo:** O projeto Webpack inclui a configuração necessária (pasta `assets` e arquivo `webpack.config.js`).
    - **Ação:** Copie a pasta `assets`, o arquivo `webpack.config.js` e o `package.json` para a raiz do seu projeto.
    - **Atenção:** Se você já possui uma pasta `assets` no seu projeto, **copie apenas o conteúdo da pasta `assets` deste projeto Webpack** para a sua pasta `assets`.

6. **Instale as dependências do Webpack dentro do seu projeto original:**
    - **Motivo:** As dependências listadas no `package.json` são necessárias para que o Webpack e suas funcionalidades funcionem corretamente.
    - **Ação:** No diretório raiz do seu projeto (onde está o `package.json`), rode:
    ```bash
    npm install
    ```

7. **Rodar o build para produção (minificação incluída):**
   - **Motivo:** Este comando processa e minifica seus arquivos JavaScript e SCSS, gerando versões otimizadas para uso em produção.
   - **Ação:** Para gerar o build final, execute:
    ```bash
    npm run build
    ```

8. **Rodar o watch para desenvolvimento (com ou sem minificação, pode ser configurado no arquivo `webpack.config.js`):**
   - **Motivo:** O comando `watch` monitora alterações nos arquivos e recompila automaticamente durante o desenvolvimento, economizando tempo.
   - **Ação:** Para rodar o `watch`, execute:
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
