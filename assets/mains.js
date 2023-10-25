function intro1() {
  console.log("Hello function");
}
intro1();

const intro2 = () => console.log("Hello Function");
intro2();

//Aufgabe 2

function sayHi() {
  console.log("hallo");
}
sayHi();

const addArrow = (x = 2, y = 3) => {
  return x + y;
};
console.log(addArrow(2, 3));
const addNumbers = (x, y) => console.log(x + y);

addNumbers(2, 3);
function multiplyAndAlert(x, y) {
  alert(x * y);
}

function showType(element) {
  console.log(typeof element);
}

const i = true;
const j = "hi";
const k = 1;
const l = { name: "John" };
const a = [0, 1];

showType(i);
showType(j);
showType(k);
showType(l);
showType(a);

//Aufgabe 3

function hero(heroName, heroPower, heroEnemy) {
  const name = `Meine Lieblingsheldin ist: ${heroName}`;
  const power = `Er/Sie hat die Fähigkeit: ${heroPower}`;
  const enemy = `Sein/ihr größter Gegner ist: ${heroEnemy}`;

  console.log(name + "\n" + power + "\n" + enemy);
}

hero("Spider-Man", "Spinnenkräfte", "Green Goblin");

hero("Wonder Woman", "Superstärke", "Ares");
