/*const person: {
  name: string;
  age: number;
} = {*/
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
