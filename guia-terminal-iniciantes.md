
# 🖥️ Guia de Comandos do Terminal para Iniciantes

Aprender a usar o terminal (ou "linha de comando") é uma das habilidades mais importantes pra quem está começando na programação. Ele parece assustador no começo, mas com o tempo você vai se acostumar e ver como ele pode ser bem prático!

---

## 📁 Criando e navegando por pastas

### `mkdir nome-da-pasta`
Cria uma nova pasta (diretório).
```bash
mkdir projeto-logica
```

### `cd nome-da-pasta`
Entra na pasta indicada.
```bash
cd projeto-logica
```

### `cd ..`
Volta uma pasta.
```bash
cd ..
```

### `ls` (ou `dir` no Windows)
Lista os arquivos e pastas dentro da pasta atual.
```bash
ls
```

---

## 📝 Criando arquivos e editando

### `touch nome-do-arquivo`
Cria um novo arquivo vazio.
```bash
touch index.html
```

### `code .`
Abre o VS Code na pasta atual (precisa ter o VS Code instalado e configurado no terminal).
```bash
code .
```

---

## 🔄 Git e controle de versão

### `git clone url-do-repositorio`
Copia um projeto Git da internet pra sua máquina.
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

### `git init`
Cria um novo repositório Git na pasta atual.
```bash
git init
```

### `git status`
Mostra os arquivos modificados e o que ainda precisa ser adicionado ou enviado pro Git.
```bash
git status
```

### `git add nome-do-arquivo`
Adiciona um arquivo específico pra ser versionado.
```bash
git add index.html
```

### `git add .`
Adiciona **todos** os arquivos modificados.
```bash
git add .
```

### `git commit -m "mensagem do commit"`
Salva um ponto da história do projeto com uma mensagem explicando a mudança.
```bash
git commit -m "cria estrutura inicial do projeto"
```

### `git push`
Envia as mudanças pro GitHub (precisa ter um repositório remoto configurado).

---

## 🛠️ Outros comandos úteis

### `clear`
Limpa o terminal (deixa ele "limpinho").

### `exit`
Fecha o terminal ou a sessão atual.

---

## 💡 Dicas finais
- O terminal é sensível a letras maiúsculas e minúsculas
- Você pode usar a tecla "Tab" pra completar nomes de pastas/arquivos
- Use as setas pra cima/baixo pra ver comandos que já usou antes

---

### ✨ Dica bônus
Se estiver perdida, digita:
```bash
pwd
```
Ele mostra exatamente onde você está na máquina.

---

Comece devagar. Você não precisa decorar tudo, só ir praticando no seu ritmo. Com o tempo, esses comandos viram parte da sua rotina de desenvolvimento 💜
