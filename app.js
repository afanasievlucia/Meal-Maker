const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(newAppetizer) {
        this.appetizers = newAppetizer;
    },
    get mains() {
        return this.mains;
    },
    set mains(newMain) {
        this.mains = newMain;
    },
    get desserts() {
        return this.desserts;
    },
    set desserts(newDessert) {
        this.desserts = newDessert;
    },
    get courses() {
        return {
           appetizers: this.appetizers,
           mains: this.mains, 
           desserts: this.desserts
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName, 
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIdex = Math.floor(Math.random()* dishes.length);
        return dishes[randomIdex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your choise for today is to have for apperitize - ${appetizer.name}, for main - ${main.name}, and for dessert - ${dessert.name}. The total price of the meal is: ${totalPrice}. Bon appetit!`
    }
}

menu.addDishToCourse("appetizer", "Greec salad", "3$");
menu.addDishToCourse("appetizer", "Cesar salad", "4$");
menu.addDishToCourse("appetizer", "Olivie salad", "5$");

menu.addDishToCourse("main", "Steak with potatoes", "12$");
menu.addDishToCourse("main", "Lasagne", "12$");
menu.addDishToCourse("main", "Pizza", "10$");

menu.addDishToCourse("dessert", "Tiramisu", "4.5$");
menu.addDishToCourse("dessert", "Ice-cream", "3$");
menu.addDishToCourse("dessert", "Fruits salad", "4$");

const meal = menu.generateRandomMeal();
console.log(meal);