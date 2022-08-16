import { Injectable } from "@angular/core";
import { Ingredient } from "./ingredient.model";

@Injectable({providedIn: 'root'})
export class FoodMenuService{
    getAll(){
        return [
            {
                id : 0,
                price : 40,
                name : 'Mango Rice',
                description : 'Vegetable rice a simple and easy to make rice variety. This rice has a balance of nutrients along with rice and vegetables making it more delicious and healthy. Unlike our conventional veg fried rice or veg pulao, this vegetable rice is unique because of the freshly ground spice mix added to this rice. The spice powder adds a distinct flavor to this rice.',
                imagePath : 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-rice-recipe.jpg',
                ingredient : [
                    new Ingredient('basmati rice', '1'),
                    new Ingredient('ghee', '2'),
                    new Ingredient('Oil', '1 tsp'),
                    new Ingredient('Peppercorns', '1 tsp'),
                    new Ingredient('Mustard seeds', '1 tsp'),
                    new Ingredient('Red Chili', '3'),
                ],
                star :  5
            },
            {
                id : 1,
                price : 60,
                name : 'Indian Chicken Curry ',
                description : 'This is a really good recipe for spicy Indian chicken curry. It is pretty easy to make and tastes really good!',
                imagePath : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg',
                ingredient : [
                    new Ingredient('boneless chicken', '2 pounds'),
                    new Ingredient('onion', '1 cup'),
                    new Ingredient('cooking oil', '1 cup'),
                    new Ingredient('minced garlic', '1 tablespoon'),
                    new Ingredient(' salt', '1 teaspoon'),
                    new Ingredient('crushed tomatoes', '1 can'),
                ],
                star :  5
            },
            {
                id : 2,
                price : 50,
                name : 'Melting Potatoes',
                description : 'The name for these spuds hints at their creamy interior. Roasting these melting potatoes at high heat ensures they get crunchy on the outside. Then, adding a little broth at the end allows the potatoes to absorb the liquid, making the insides extra moist',
                imagePath : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg',
                ingredient : [
                    new Ingredient('butter, melted', '2 tablespoons'),
                    new Ingredient('Yukon Gold potatoes', '1 pounds'),
                    new Ingredient('extra-virgin olive oil', '2 tablespoons'),
                    new Ingredient('fresh thyme', '2 teaspoons chopped'),
                    new Ingredient('garlic, peeled and smashed', '5 cloves'),
                    new Ingredient('chopped fresh rosemary', '1 teaspoon'),
                ],
                star :  5
            },
            {
                id : 3,
                price : 70,
                name : 'Easy Meatloaf',
                description : "This is a very easy and no fail recipe for meatloaf. It won't take long to make at all, and it's quite good!",
                imagePath : 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F31%2F16354-easy-meatloaf-mfs-74-1x1-1.jpg',
                ingredient : [
                    new Ingredient(' ground beef', '1 pounds'),
                    new Ingredient('egg', '1'),
                    new Ingredient('chopped onion', '1'),
                    new Ingredient('milk', '1 cup'),
                    new Ingredient('dried bread crumbs', '1 cup'),
                    new Ingredient('prepared mustard', '2 tablespoons'),
                ],
                star :  4
            },
            {
                id : 4,
                price : 50,
                name : 'Chicken pasta bake',
                description : "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad",
                imagePath : 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg?resize=960,872?quality=90&webp=true&resize=375,341',
                ingredient : [
                    new Ingredient('olive oil', '4 tbsp'),
                    new Ingredient('skinless chicken breasts', '4'),
                    new Ingredient('penne', '300g'),
                    new Ingredient('mature cheddar', '70g'),
                    new Ingredient('grated mozzarella', '50g'),
                    new Ingredient('caster sugar', '1 tsp'),
                ],
                star :  5
            },
            {
                id : 5,
                price : 50,
                name : 'Bruschetta',
                description : "Bruschetta with tomato and basil! Chopped fresh tomatoes with garlic, basil, olive oil, and vinegar, served on toasted slices of French or Italian bread.",
                imagePath : 'https://www.giallozafferano.com/images/229-22900/tomato-bruschetta_1200x800.jpg',
                ingredient : [
                    new Ingredient('tomatoes', '6 to 7 ripe'),
                    new Ingredient('cloves garlic', '4'),
                    new Ingredient('extra virgin olive oil', '1 tablespoon'),
                    new Ingredient('balsamic vinegar', '1 teaspoon'),
                    new Ingredient('baguette', '1'),
                    new Ingredient('fresh basil leaves', '6'),
                ],
                star :  3
            },
            {
                id : 6,
                price : 40,
                name : 'Butter Chicken',
                description : "The hearty butter chicken tops the chart of Indian chicken curries. The popularity of the dish nationally and globally makes it sound exquisite. However, did you know that this butter-rich recipe can be made at home with simple ingredients from your kitchen? No more too sweet, too tangy or too runny gravy",
                imagePath : 'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg',
                ingredient : [
                    new Ingredient('thick chicken breasts', '2'),
                    new Ingredient('Yoghurt', '1.5 cup'),
                    new Ingredient('extra virgin olive oil', '1 tablespoon'),
                    new Ingredient('coriander powder', '1 tsp'),
                    new Ingredient('ginger', '1 tsp'),
                    new Ingredient('Tomatoes', '4 cups'),
                ],
                star :  5
            },
            {
                id : 7,
                price : 100,
                name : 'Homemade Pizza & Pizza Dough',
                description : "Make perfect pizza at home with this classic homemade pizza recipe, including a pizza dough recipe, topping suggestions, and step-by-step instructions with photos.",
                imagePath : 'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
                ingredient : [
                    new Ingredient('warm water', '355 ml'),
                    new Ingredient('active dry yeast', '1 package'),
                    new Ingredient(' bread flour', '490g'),
                    new Ingredient('extra virgin olive oil', '2 tablespoons'),
                    new Ingredient('kosher salt', '2 teaspoons'),
                    new Ingredient('sugar', '1 teaspoon'),
                ],
                star :  4
            },
            {
                id :8,
                price : 70,
                name : 'Thai fried prawn & pineapple rice',
                description : "This quick, low calorie supper is perfect for a busy weeknight. Cook your rice in advance to get ahead - run it under cold water to chill quickly, then freeze in a food bag for up to one month",
                imagePath : 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/thai-aea8468.jpg?resize=960,872?quality=90&webp=true&resize=375,341',
                ingredient : [
                    new Ingredient('sunflower oil', '2 tsp'),
                    new Ingredient('green pepper', '1'),
                    new Ingredient('pineapple', '140g'),
                    new Ingredient('Thai green curry paste', '3 tbsp'),
                    new Ingredient('light soy sauce', '4 tsp'),
                    new Ingredient('cooked basmati rice', '300g'),
                ],
                star :  5
            },
            {
                id :9,
                price : 75,
                name : 'Cold Spiced Chicken',
                description : "Drumsticks are the perfect portable food for a picnic in the park or a party in your backyard.",
                imagePath : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cold-spiced-chicken-recipe-1557951578.jpg?crop=1xw:1xh;center,top&resize=480:*',
                ingredient : [
                    new Ingredient('light brown sugar', '2 tbsp'),
                    new Ingredient('sweet paprika', '1 tbsp'),
                    new Ingredient('ground coriander', '2 tsp'),
                    new Ingredient('chili powder', '1 tsp'),
                    new Ingredient('garlic powder', '1 tsp'),
                    new Ingredient('small chicken drumsticks', '16'),
                ],
                star :  5
            },
            {
                id :10,
                price : 85,
                name : 'Garlic Butter Chicken',
                description : "Tender, juicy chicken bathed in a rich garlic butter sauce with a splash of wine for extra flavor!! This EASY stovetop chicken recipe is ready in 15 minutes and will become a family FAVORITE!!",
                imagePath : 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg',
                ingredient : [
                    new Ingredient('Olive oil', '2'),
                    new Ingredient('Boneless skinless chicken breasts', '10'),
                    new Ingredient('Pepper', '2 tsp'),
                    new Ingredient('Salt', '1 tsp'),
                    new Ingredient('Butter', '1 tsp'),
                    new Ingredient('Fresh parsley', '1 tsp'),
                ],
                star :  4
            },
            {
                id :11,
                price : 35,
                name : 'Cucumber Sandwich',
                description : "This creamy, crunchy cucumber sandwich recipe strikes a lovely balance between decadent and light. The cream cheese-yogurt spread complements the crisp refreshing cucumber while the hearty flavor and texture of the whole-wheat bread holds everything together",
                imagePath : 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
                ingredient : [
                    new Ingredient('cream cheese', '2 ounces'),
                    new Ingredient('low-fat plain Greek yogurt', '1 tablespoon'),
                    new Ingredient('sliced fresh chives', '1 tablespoon'),
                    new Ingredient('chopped fresh dill', '1 tablespoon'),
                    new Ingredient('whole-wheat sandwich bread', '2 slices'),
                    new Ingredient('thinly sliced English cucumber', '1 cup'),
                ],
                star :  4
            },
            {
                id :12,
                price : 55,
                name : 'Crisp Apple & Kohlrabi Salad',
                description : "Kohlrabi comes in green or purple, but the flesh is white either way. Its dense insides remind me of a broccoli stalk. It smells kind of radish and tastes ambiguously cruciferous.",
                imagePath : 'https://cookieandkate.com/images/2018/08/crisp-apple-kohlrabi-salad-recipe-1.jpg',
                ingredient : [
                    new Ingredient('small kohlrabi', '2'),
                    new Ingredient('large Honeycrisp apple', '1'),
                    new Ingredient('toasted sunflower seeds', '3 tablespoons'),
                    new Ingredient('olive oil', '2 tablespoons'),
                    new Ingredient('Flaky sea salt', '2 tsp'),
                    new Ingredient('fresh tarragon leaves', '1 cup'),
                ],
                star :  4
            }
        ];
    }
}