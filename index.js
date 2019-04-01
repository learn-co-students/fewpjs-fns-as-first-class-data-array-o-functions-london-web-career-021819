function wakeDog(dogName, dogBreed) {
  const str = `Wake ${dogName} the ${dogBreed}`
  console.log(str);
  return str;
}
function leashDog(a, b) {

  console.log(`Leash ${a} the ${b}`);
  return `Leash ${a} the ${b}`;
}
function walkToPark(a, b) {

  return `Walk to the park with ${a} the ${b}`;
   
}
function throwFrisbee(a, b) {
  return `Throw the frisbee for ${a} the ${b}`;
  
   
}
function walkHome(a, b) {

  return `Walk home with ${a} the ${b}`;
   
}
function unleashDog(a, b) {

  return `Unleash ${a} the ${b}`;
   
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed) {
  let final = [];
  for (let i = 0; i < routine.length; i++) {

   final.push(routine[i](name,breed));
    
  }
  return final;
}