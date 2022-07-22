# Trinks Challenge

### Sobre o projeto

O trinks-challenge tem como objetivo conferir se um determinado número é feliz e/ou sortudo, para fazer essa verificação o aplicativo segue a seguinte lógica:

#### Números Felizes:
```sh
Um número é considerado feliz, se em algum ponto a soma de seus dígitos ao quadrado equivale a 1.

Ex: 7 é um número feliz? 
7² = 49 
4² + 9² = 97 
9² + 7² = 130 
1² + 3² + 0² = 10 
1² + 0² = 1 

Logo, 7 é um número feliz. 
Importante dize que o trinks-challenge considera um máximo de 100 iterações.
```

#### Números Sortudos:
```sh
Nós começamos com uma lista de inteiros começando em 1: 
(Usaremos o número 7 como exemplo novamente)

1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15...

Então removemos todos os números com posição múltipla de 2 (todos números pares), 
deixando todos os inteiros ímpares: 

1, 3, 5, 7, 9, 11, 13, 15...

O segundo termo desta sequência é 3. 
Nós removemos então todos os números com posição múltipla de 3 que sobraram na lista: 

1, 3, 7, 9, 13, 15...

O terceiro termo desta sequência é 7. 
Nós removemos então todos os números com posição múltipla de 7 que sobraram na lista: 
1, 3, 7, 9, 13, 15...

Se nós repetirmos este procedimento indefinidamente, os sobreviventes são os números sortudos:

1, 3, 7, 9, 13, 15...


Logo, 7 é um número sortudo.
```

### Tecnologias utilizadas

**Front-end:** ```React```, ```Materia-UI```, ```Styled-Components``` 

### Instalação

1. Clone o projeto usando ```git clone``` e uma das chaves disponíveis no repositório.
  ```sh
  Ex: git clone https://github.com/GuilhermeArrudda/trinks-challenge.git
  ```
2. Instale o projeto usando o comando ```npm i -f```.
```sh 
PS: O projeto está com um conflito em um dos pacotes, por isso estamos forçando a instalação, 
mas ele está perfeito! 
Caso prefira existe um link para testar a aplicação na web. https://trinks-challenge.vercel.app/
```
3. Agora que o projeto foi instalado, pode usar o comando ```npm start``` para rodá-lo.

### Utilizando a aplicação

A aplicação é bem simples mas está muito divertida, ao lado esquerdo da tela existem algumas informações sobre as regras e funcionamento do game, rolando para baixo dentro deste quadrado é possível ler todas está informações.<br/>
Já do lado direito existe uma roleta, um campo para adicionar o número de sua preferência e um botão, ao inserir o número e apertar o botão a roleta irá rodar e dizer se o número escolhido é feliz e/ou sortudo.<br/>
Por fim, aproveite a experiência e se surpreenda 🎊!
