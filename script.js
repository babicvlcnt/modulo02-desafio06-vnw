let aboutMe = {
    nome: "Bárbara",
    idade: 26,
    naturalidade: "Ceará"
}
console.log(aboutMe)

aboutMe.comidaFavorita = "Baião de dois"
console.log(aboutMe)

delete aboutMe.idade
console.log(aboutMe)

console.log(aboutMe)

let cadastro = [
    {
        nome: "Bárbara",
        idade: 26,
        telefone: 999999999,
        amigos: ["Larissa", "Andreina", "Bianca", "Ghislain"],
    }, 
    {
        nome: "Josefina",
        idade: 30,
        telefone: 888888888,
        amigos: ["Cristiano", "Lara", "Igor", "Raíssa"],
    }, 
    {
        nome: "Davi",
        idade: 20,
        telefone: 777777777,
        amigos: ["Renato", "Vivian", "Leonardo", "Ruan"],
    }, 
    {
        nome: "Tatiana",
        idade: 21,
        telefone: 666666666,
        amigos: ["Luan", "Pâmela", "Dan", "Marlon"],
    }, 
    {
        nome: "Leandro",
        idade: 15,
        telefone: 555555555,
        amigos: ["Vítor", "Léo", "Henrique", "Juliano"],
    }
]
console.log(cadastro)
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[1])