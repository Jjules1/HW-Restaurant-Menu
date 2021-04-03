let menuItem = {
    name: 'Kale Caesar Salad',
    nickName: 'All Hail Kale',
    referenceID: 'SLD001',
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    // update calories to numbers 
    totalCalories: 560,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons'],
    //  adding year created for bestfriend
    year: 2017,
    // times for ceasar salad
    timesFrame: ['lunch', 'dinner'],


    




    numIngredients: function() {
      return this.ingredients.length;
    }
    }
    //removed nickname 
    delete menuItem.nickName;
    // add properties
    // let newIngredients = menuItem.push[(Lemon juice)];
    // let newNew = ['Lemon juice'];
    // let newIngredients = newNew.concat[ingredients];
    ingredients.unshift("Lemon juice"),

  console.log("\n\n******menuItem Object******");
  Object.entries(menuItem).forEach(([key, value]) => {
    if (key != 'numIngredients')
      console.log(`${key}: ${value}`)
    });
  console.log(`Number of ingredients = ${menuItem.numIngredients()}`);
  