<img src="/assets/image01.png" />


## Start backend:

```
cd server

npm install

npm start

```


## Start frontend app:

<p style="background-color: yellow;">Please! Install Live Server Extension in Extensions:Marketplace on VScode</p>

then open ``index.html``

``click in right mouse button and select "open with live server".``

### Perguntas Mais Importantes Sobre XHR (XMLHttpRequest)

O que é XMLHttpRequest (XHR) e para que ele é usado?

```
XHR é uma API utilizada para realizar requisições HTTP assíncronas ou síncronas a servidores web. 
Ele permite a atualização de páginas da web sem recarregá-las.
```

Como criar e configurar um objeto XHR?

```
Um objeto XHR pode ser criado com new XMLHttpRequest() e configurado com métodos como open(method, url), 
setRequestHeader(header, value), entre outros.
```

Qual a diferença entre uma requisição síncrona e assíncrona em XHR?
```
Em uma requisição síncrona, o código JavaScript é bloqueado até que a resposta do servidor seja recebida. 
Em uma requisição assíncrona, o código continua a ser executado enquanto a solicitação está em andamento.
```
Como enviar dados em uma requisição XHR?
```
Dados podem ser enviados usando o método send(), que pode aceitar parâmetros 
como um objeto FormData, um blob, uma string, etc.
```

Quais são os métodos principais do objeto XHR?
```
Os métodos principais incluem open(), send(), abort(), 
setRequestHeader(), getAllResponseHeaders(), e getResponseHeader().
```

Como lidar com diferentes estados de uma requisição XHR?

```
O objeto XHR tem uma propriedade readyState que pode assumir valores de 0 a 4, 
representando os diferentes estágios da requisição 
(não inicializada, conexão estabelecida, requisição recebida, processamento e completa).
```

Como tratar respostas e erros em XHR?

```
A resposta pode ser tratada utilizando a propriedade responseText ou responseXML, 
e erros podem ser tratados monitorando a propriedade status e os eventos onerror, 
ontimeout e onreadystatechange.
```

Como enviar requisições com diferentes métodos HTTP usando XHR?

```
XHR suporta vários métodos HTTP como GET, POST, PUT, DELETE, configurando o método no open().
```

Quais são as limitações e desafios do uso de XHR?
```
Algumas limitações incluem a complexidade do código para operações comuns, 
dificuldades de tratamento de erro, e o problema de 
segurança CORS (Cross-Origin Resource Sharing).
```

Como XHR lida com cookies e autenticação?
```
XHR pode lidar com cookies automaticamente se as credenciais forem 
configuradas com withCredentials = true e as configurações de CORS permitirem.
```

### Insights Mais Valiosos Sobre XHR e FETCH

Simplicidade e Modernidade do Fetch:
```
Fetch API é mais moderna e oferece uma sintaxe mais limpa e simples 
comparada ao XHR, facilitando a leitura e manutenção do código.
```

Promise-Based:
```
A Fetch API retorna Promises, o que permite um tratamento de erros mais 
intuitivo com catch e encadeamento de operações assíncronas com then.
```

Maior Flexibilidade de Configuração:
```
Fetch oferece mais opções de configuração por meio de objetos init, 
que permitem personalizar métodos, cabeçalhos, modos, credenciais, etc.
```

Suporte a Stream:
<p style="background-color: yellow;">
Fetch suporta a manipulação de streams, permitindo processar a resposta em pedaços à medida <br> que é recebida, útil para grandes volumes de dados.
</p>

Simplificação do Tratamento de Erros:
```
Com Fetch, o tratamento de erros é mais direto, já que qualquer resposta HTTP considerada 
como erro (status 400-599) rejeita a Promise, permitindo uso direto de catch.
```

Controle de Cors e Credenciais:
```
Fetch tem um controle mais intuitivo sobre as credenciais e as políticas de 
CORS através de suas opções de inicialização (credentials, mode, cache, etc.).
```

Disponibilidade de Métodos HTTP:
```
Ambos XHR e Fetch suportam todos os métodos HTTP (GET, POST, PUT, DELETE, etc.), 
mas Fetch o faz de uma maneira mais direta e menos verbosa.
```

Compatibilidade e Suporte:
```
Embora Fetch seja amplamente suportado nos navegadores modernos, 
XHR é suportado por praticamente todos os navegadores, incluindo aqueles mais antigos.
```
Abortar Requisições:
```
A Fetch API ganhou recentemente suporte ao abortamento de requisições com a introdução do AbortController, 
que oferece um controle de cancelamento mais elegante que o XHR.
```

Manuseio de Headers:
```
Manipular cabeçalhos HTTP é mais direto e intuitivo com Fetch, 
utilizando a interface Headers para definir e acessar cabeçalhos de maneira mais estruturada.
```
<p style="background-color: yellow;">
Esses insights destacam as vantagens e melhorias que Fetch traz sobre XHR, <br>bem como as situações onde XHR ainda pode ser relevante devido à sua compatibilidade universal.
</p>