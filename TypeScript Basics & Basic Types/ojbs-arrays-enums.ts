/*const person: {
  name: string;
  age: number;
} = {*/

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/*enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}*/ /**
 * É possível definir valores customizados para o enum caso seja necessário para seu escopo
 * como no exemplo esses podem ser misturados entre os tipos de dados, mas é recomendável utilizar o padrão numérico que caso não seja definido
 * segue de 0 e incrementa.
 * Caso seja definido um valor 5 para o primeiro valor por exemplo, nos próximos ele incrementará um e seguirá a sequencia: 5, 6, 7, 8, ...
 */

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // -> Isso marca um Tuple -> Isso mostra ao TypeScript
  //Que você deseja um array com exatos 2 valores, onde o primeiro é um número
  // e o 2º é uma string
} = {
  name: "Jose",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//person.role.push("admin"); -> push é uma exceção onde o TypeScript não consegue
//--Reiterar o uso do tamanho fixo do array.
//person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
