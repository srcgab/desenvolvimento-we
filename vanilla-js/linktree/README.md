# Linktree Dinâmico com Vanilla JS

Site simples em JS Vanilla para centralizar diferentes links. A ideia é praticar conceitos de JavaScript, como: selecionar elementos, manipular o DOM, ouvir eventos e separar dados, tornando a inserção e exibição de dados dinâmica. 


![Exemplo de como a página pode ficar](.\..\imgs\tela-ex-lt2.png)
![Exemplo de como a página pode ficar](.\..\imgs\tela-ex-lt1.png)

## Funcionalidades a serem implementadas

- [ x ] - **Gerenciamento de links centralizado:** Todos os links são gerenciados em um único lugar no arquivo JavaScript, sem a necessidade de editar o HTML.
- [ x ] - **Renderização dinâmica de conteúdo:** O JavaScript lê os dados e "desenha" a lista de links na tela automaticamente.
- [  ] - **Efeito de clique para feedback visual:** Uma animação sutil para indicar que um link foi pressionado.
- [  ] - **Implementação de um seletor de tema:** Um botão para alternar entre modo claro e escuro (Light/Dark Mode).

## O Tutorial

### Passo 1: Conectando o JavaScript

O primeiro passo é conectar o arquivo `script.js` ao `index.html`. Adicionar a linha abaixo bem no final do HTML, antes do fechamento da tag `</body>`.

```html
<script src="script.js" defer></script>
</body>
</html>
```

> **Por que `defer` e no final?** Isso garante que o navegador carregue todo o HTML da página antes de tentar executar o JavaScript, evitando erros.

### Passo 2: Preparando o HTML

Atualmente a página tem links "fixos", e o objetivo aqui é deixar o JS criá-los. Para isso, é preciso limpar o `index.html`, deixando apenas os "esqueletos" que o JavaScript irá preencher.

- Dê um ID para a imagem de perfil e para o título do usuário.
- Esvazie a `div` que envolve os links.

Seu `<body>` ficará parecido com isto:

```html
<body>
    <img class="bg-img" src="IMAGEM_DE_FUNDO" alt="bg"/>
    <section>
        <div id="container">
            <img id="user-image" src="SUA_FOTO" alt="dp"/>
            <h2 id="user-name">Nome</h2>
            
            <div class="wrap-links"></div>

        </div>
    </section>

    <script src="script.js" defer></script>
</body>
```

### Passo 3: Lógica com `script.js`

#### 3.1 - A Estrutura de Dados

Primeiro, criamos um objeto para guardar todas as nossas informações. Isso separa os **dados** da **apresentação**.

```javascript
// 1. DADOS DO USUÁRIO E LINKS
// Se precisar mudar um link ou nome, mude apenas aqui!
const userData = {
    name: "Seu Nome",
    imageUrl: "SUA_FOTO",
    links: [
        {
            name: "Linkedin",
            url: "[https://www.linkedin.com/in/](https://www.linkedin.com/in/)",
            icon: "fa-brands fa-linkedin"
        },
        {
            name: "Instagram",
            url: "[https://www.instagram.com/](https://www.instagram.com/)",
            icon: "fa-brands fa-square-instagram"
        },
        {
            name: "GitHub",
            url: "[https://github.com/](https://github.com/)",
            icon: "fa-brands fa-github"
        }
    ]
};
```

#### 3.2 - Renderizando os Dados na Tela

Agora, a lógica que pega esses dados e os transforma em HTML:

```javascript
// 2. SELECIONANDO OS ELEMENTOS DO HTML
const userNameElement = document.querySelector('#user-name');
const userImageElement = document.querySelector('#user-image');
const linksContainer = document.querySelector('.wrap-links');

// 3. ATUALIZANDO AS INFORMAÇÕES DO USUÁRIO
userNameElement.textContent = userData.name;
userImageElement.src = userData.imageUrl;

// 4. FUNÇÃO PARA GERAR E INSERIR OS LINKS NA PÁGINA
function renderLinks() {
    // Limpa o container para garantir que não tenha links duplicados
    linksContainer.innerHTML = ''; 

    // Itera sobre cada item no array de links
    userData.links.forEach(link => {
        // Para cada link, cria o HTML correspondente
        const linkHTML = `
            <a class="link-social" href="${link.url}" target="_blank">
                <i class="${link.icon}"></i>
                <h3>${link.name}</h3>
            </a>
        `;
        // Após cada iteração adiciona o HTML do link criado dentro do container
        linksContainer.innerHTML += linkHTML;
    });
}

// 5. CHAMANDO A FUNÇÃO PARA EXECUTAR TUDO
renderLinks();
````

## Funcionalidades Extras
- Implementar depois
```
