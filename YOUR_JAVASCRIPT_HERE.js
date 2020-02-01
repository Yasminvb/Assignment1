// Write your JS here
const hero = {
  name: "",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "", damage: 2 }
};

function rest(person = hero) {
  person.health = 10;
  {
    if (person.health == 10) alert("Person health is 10");
  }
  return person;
}

function pickUpItem(person = hero, weapon = hero.weapon) {
  person.inventory[person.inventory.length] = weapon;
}
function equipWeapon(person = hero) {
  if (person.inventory.length == 0);
  return (hero.weapon = person.inventory[0]);
}

// - Allow people to change the name of their hero, you can use window.prompt or use an input element. Be careful using a form because using a form might refresh the page.
let name = prompt("Give you hero a name");
