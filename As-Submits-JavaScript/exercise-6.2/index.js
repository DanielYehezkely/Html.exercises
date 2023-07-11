const people = ["Greg", "Mary", "Devon", "James"];
/*1. Using a loop, iterate through this array and console.log all
of the people.*/
for (person of people) {
  console.log(person);
}

/* 2. Write the command to remove "Greg" from the array.*/

people.shift();

/*3. Write the command to remove "James" from the array.*/

people.pop();

/*4. Write the command to add "Matt" to the front of the array.*/

people.unshift("Matt");

/*5. Write the command to add your name to the end of the
array.*/

people.push("Daniel");

/* 6. Using a loop, iterate through this array, and after
console.log "Mary", exit from the loop.
 */

for (person of people) {
  if (person === "Mary") {
    break;
  }
}

/* 7. Write the command to make a copy of the array using a
slice. The copy should NOT include "Mary" or "Matt". */

const peopleCopy = people.slice(2, 4);

/* 8.  Write the command that gives the indexOf where "Mary"
is located. */

const maryLocation = people.indexOf("Mary");

/* 9. Write the command that gives the indexOf where "Foo" is
located (this should return -1).
 */

const indexOfFoo = people.indexOf("Foo");

/* 10.  Redefine the people variable with the value you started
with. Using the splice command, remove "Devon" from
the array and add "Elizabeth"
and "Artie". Your array should look like this when you are
done ["Greg", "Mary", "Elizabeth", "Artie",
"James"].
 */
console.log(people);
people.splice(0, 1, "Greg");
people.splice(2, 1, "Elizabeth", "Artie");
people.splice(4, 1, "devon", "james" );

console.log(people);

/* 11.  Create a new variable called withBob and set it equal
to the people array concatenated with the string of "Bob". */

const withBob = people.concat("Bob");
console.log(withBob);
