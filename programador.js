const programador = {
    nome: "Dgeison Serrão Peixoto",
    idade: 45,
    tecnologias: [
      { nome: "C++", especialidade: "Desktop" },
      { nome: "Python", especialidade: "Data Science" },
      { nome: "JavaScript", especialidade: "Web/Mobile" },
    ],
  }

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia 
${programador.tecnologias[2].nome} com especialidade em ${programador.tecnologias[2].especialidade}`)
