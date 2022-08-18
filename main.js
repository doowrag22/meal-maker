let menu = {
  getRandomDishFromCourse(courseName) {
    let dishes = menu.courses[courseName]
    let x = Math.floor(Math.random()* dishes.length);
    return dishes[x]
    //console.log(dishes[x]);

  },
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  addDishToCourse: function (courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice,
    }
  if (courseName === 'appetizers') {
    menu.courses.appetizers.push(dish)
  }
  if (courseName === 'mains') {
    menu.courses.mains.push(dish)
  }
  if (courseName === 'desserts') {
    menu.courses.desserts.push(dish)
  }
   }, 
}

menu.addDishToCourse('mains', 'pizza', 10);
menu.addDishToCourse('mains', 'burger', 5)
menu.addDishToCourse('mains', 'pasta', 15)
menu.addDishToCourse('appetizers', 'chips', 5)
menu.addDishToCourse('appetizers', 'french fries', 5)
menu.addDishToCourse('appetizers', 'hummus', 5)
menu.addDishToCourse('desserts', 'pie', 5)
menu.addDishToCourse('desserts', 'cake', 5)
menu.addDishToCourse('desserts', 'ice cream', 5)

let generateRandomMeal = function () {
  let appetizer = menu.getRandomDishFromCourse('appetizers')
  let main = menu.getRandomDishFromCourse('mains')
  let dessert = menu.getRandomDishFromCourse('desserts')
  let totalPrice = main.price + appetizer.price + dessert.price 
  console.log(`Your meal today starts with ${appetizer.name}. Your main course will be ${main.name} and that will be followe by ${dessert.name} for dessert. The total cost will be $${totalPrice}`)
  //console.log(dessert)
}

let meal = generateRandomMeal();
