//ARRAY DE LIVROS
let livros = []

//CLASSES
class Livro{
    titulo
    autor
    editora
    anoPublicacao
    disponibilidade
    constructor(titulo, autor, editora, anoPublicacao){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoPublicacao = anoPublicacao
        this.disponibilidade = true
    }
}

class Biblioteca{
    nome
    endereco
    telefone
    acervoLivros = []
    constructor(nome, endereco, telefone, acervo){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoLivros = acervo
    }

    //FUNÇÃO PARA BUSCAR UM LIVRO PELO TITULO
    BuscarLivro(titulo){
        this.acervoLivros.forEach(livro =>{
            if(titulo == livro.titulo){
                console.log(livro)
            }
        })
    }

    //FUNÇÃO PARA PEGAR UM LIVRO EMPRESTADO
    EmprestarLivro(titulo){
      let emprestado = false
      this.acervoLivros.forEach(livro =>{ //ITERA O ARRAY BUSCANDO PELO TITULO DO LIVRO
        if(livro.titulo == titulo){
            if(livro.disponibilidade === true){ //QUANDO ENCONTRADO ALTERA OS VALORES PARA CONFIRMAR O EMPRESTIMO DO LIVRO
                livro.disponibilidade = false
                emprestado = true
            }
        }
      })
      if(emprestado){ 
        alert('Livro emprestado com sucesso! Boa leitura.')
        return true
      } else {
        alert('O livro inserido está indisponível')
        return false
      }

    }

    //FUNÇÃO PARA DEVOLVER UM LIVRO
    DevolverLivro(titulo){
        this.acervoLivros.forEach(livro =>{ //ITERA O ARRAY BUSCANDO PELO TITULO DO LIVRO
            if(livro.titulo == titulo){ //QUANDO ENCONTRADO ALTERA O VALOR PARA CONFIRMAR A DEVOLUÇÃO DO LIVRO
                livro.disponibilidade = true
                alert('Livro devolvido com sucesso.')
            }
        })
    }
}

//OBJETOS CRIADOS PARA A DINAMICA PROPOSTA NO CODIGO
let bibliotecaCentral = new Biblioteca('Biblioteca Central','Rua Amélia, 154', '12974856431', livros)

livros[0] = new Livro('Terra Encantada', 'Carla dos Anjos', 'Mundial', 2002)
livros[1] = new Livro('Homem da Floresta', 'Pedro Dias', 'Saber', 2013)
livros[2] = new Livro('O Tubarão', 'Waldir Cestari', 'WC Editora', 2007)
livros[3] = new Livro('Gárgula Noturno', 'John Marston', 'Backwoods', 2017)


