// This code defines three functions that return promises for walking, feeding, and playing with a dog.
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walked = true;
    if(walked) {
      resolve('Dog has been walked 🐕');
    }
    else {
      reject('Dog has not been walked');
    }
  }, 1500)});
}
function feedDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fed = true;
      if(fed) {
        resolve('Dog has been fed 🍴');
      }
      else {
        reject('Dog has not been fed');
      }
    }, 1500);
  });
}
function playWithDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const played = true;
    if(played) {
      resolve('Dog has been played with 🎾');
    }
    else {
      reject('Dog has not been played with');
    }
  }, 1500);
})}
;


async function takeCareOfDog() {
  try {
    const walkResult = await walkDog();
    console.log(walkResult);
    
    const feedResult = await feedDog();
    console.log(feedResult);
    
    const playResult = await playWithDog();
    console.log(playResult);
    
  } catch (error) {
    console.error(error);
  }
}
takeCareOfDog();


import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(`Value of PI: ${PI}`);
console.log(`Circumference of circle with radius 5: ${getCircumference(5)}`);
console.log(`Area of circle with radius 5: ${getArea(5)}`);   
console.log(`Volume of sphere with radius 5: ${getVolume(5)}`);


