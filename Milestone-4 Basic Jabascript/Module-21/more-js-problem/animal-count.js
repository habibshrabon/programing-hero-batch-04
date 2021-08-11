function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensitySecond10Miles = 50;
  const animalDensityRestMiles = 100;
  if (miles <= 10) {
    const count = miles * 10;
    return count;
  } else if (miles <= 20) {
    const firstDensityAnimals = 10 * animalDensityFirst10Miles;
    const restMiles = miles - 10;
    const secondDensityAnimals = restMiles * animalDensitySecond10Miles;
    const totalAnimals = firstDensityAnimals + secondDensityAnimals;
    return totalAnimals;
  } else {
    const firstDensityAnimals = 10 * animalDensityFirst10Miles;
    const secondDensityAnimals = 10 * animalDensitySecond10Miles;
    const restMiles = miles - 20;
    const restDensityAnimal = restMiles * animalDensityRestMiles;
    const totalAnimals =
      firstDensityAnimals + secondDensityAnimals + restDensityAnimal;
    return totalAnimals;
  }
}

const animals = animalCount(12);
console.log(animals);
