// More recipe-box cards (drinks and appetizers), added Nov 2026. Credits kept as written on the cards.
// Anything missing or hard to read is listed in "gaps" and never invented. No photos of the cards.
(function(){
var R = [
  // ---------- Beverages ----------
  { slug:"rich-hot-chocolate", title:"Rich Hot Chocolate", section:"family", category:"Beverages", credit:"", serves:"8",
    summary:"Hot chocolate made with real chopped chocolate, blended until foamy. From Bon Appétit, 12/94.",
    ingredients:[{items:["7½ cups milk","10 oz semisweet chocolate, finely chopped","4 tsp sugar","1 tsp vanilla extract","Whipped cream"]}],
    steps:["Bring the milk to a simmer in a large heavy saucepan over medium heat.","Pour half of the hot milk into a blender. Add half of the chocolate, 2 tsp sugar and ½ tsp vanilla.","Cover and blend on low until the chocolate melts and the mixture is foamy. Pour into mugs.","Repeat with the remaining milk, chocolate, sugar and vanilla.","Top each mug with a dollop of whipped cream and serve."],
    cardNotes:["Source written on the card: Bon Appétit, 12/94."] },

  { slug:"hot-mulled-cider", title:"Hot Mulled Cider", section:"family", category:"Beverages", credit:"", serves:"8 (¾-cup servings)",
    summary:"Apple cider warmed with cinnamon and cloves, topped with a little butter. From Good Housekeeping.",
    ingredients:[{items:["6 cups apple cider","2 short cinnamon sticks","½ tsp whole cloves","Chilled butter or margarine, 1 tsp per mug"]}],
    steps:["Just before serving, heat the cider, cinnamon sticks and cloves in a 2-qt saucepan over medium heat.","Pour into mugs and top each with 1 tsp chilled butter or margarine."],
    cardNotes:["Source written on the card: Good Housekeeping.","Makes 6 cups, 8 (¾-cup) servings."] },

  { slug:"hot-mulled-cider-rum", title:"Hot Mulled Cider with Rum", section:"family", category:"Beverages", credit:"Joan Young", serves:"",
    summary:"Spiced cider with honey, lemon and light rum. From the kitchen of Joan Young.",
    ingredients:[{items:["6 cups apple cider","3 tbsp honey or light brown sugar","16 whole cloves","8 cinnamon sticks","8 lemon slices","1 cup light rum"]}],
    steps:["Combine the cider and honey in a medium saucepan.","Push 2 cloves into the rind of each lemon slice.","Add the clove-studded lemon slices, cinnamon sticks and rum to the cider. Bring to a boil.","Cover, reduce the heat and simmer 5 minutes.","Remove the sticks and lemon slices and set aside for garnish. Serve immediately."],
    cardNotes:["The recipe continues on the back of the card."] },

  { slug:"maple-hot-chocolate", title:"Maple Hot Chocolate", section:"family", category:"Beverages", credit:"Darlene Miller, Linn, Missouri", serves:"4",
    summary:"Stovetop hot chocolate with maple flavoring and marshmallows melted in. From the kitchen of Darlene Miller, Linn, Missouri.",
    ingredients:[{items:["¼ cup sugar","1 tbsp baking cocoa","⅛ tsp salt","¼ cup hot water","1 tbsp butter or margarine","4 cups milk","1 tsp maple flavoring","1 tsp vanilla extract","12 large marshmallows"]}],
    steps:["In a large saucepan, combine the sugar, cocoa and salt. Stir in the hot water and butter and bring to a boil.","Add the milk, maple flavoring, vanilla and 8 marshmallows. Heat through, stirring occasionally, until the marshmallows melt.","Pour into mugs and top each with a marshmallow."],
    cardNotes:["Clipping pasted on the card."] },

  { slug:"barbs-punch", title:"Barb's Punch", section:"family", category:"Beverages", credit:"Barb", serves:"",
    summary:"A fizzy cranberry-orange punch with ice cream floating on top. From the kitchen of Barb.",
    ingredients:[{items:["1 qt orange tonic (hard to read)","1 qt cranberry juice","1 qt ginger ale","1 pt vanilla ice cream"]}],
    steps:["Mix the first three ingredients.","Make it 15 minutes before adding the ice cream, so it floats on top."],
    gaps:["The first ingredient looks like \"orange tonic\" (possibly orange soda).","No serving size on the card."] },

  { slug:"hooch", title:"Hooch", section:"family", category:"Beverages", credit:"Mary Ellen V", serves:"", cardNote:"great",
    summary:"A creamy whiskey drink in the style of eggnog. From the kitchen of Mary Ellen V. Card says: “Great.”",
    ingredients:[{items:["1¼ cups whiskey","1 to 2½ cups half-and-half (writer likes 2⅓, hard to read)","1 can condensed milk","1 tsp vanilla","2 tsp decaf coffee (prepared)","4 eggs, beaten (1 cup)","2 tbsp chocolate syrup"]}],
    steps:["Blend well."],
    notes:["Made with raw eggs."] },

  { slug:"citrus-cranberry-punch", title:"Citrus Cranberry Punch", section:"family", category:"Beverages", credit:"Art Smith (Oprah's chef), from a Christmas music CD flyer", serves:"", cardNote:"good",
    summary:"A citrusy cranberry punch with fresh mint and sparkling cider. Credited to Art Smith. Card says: “Good.”",
    ingredients:[{items:["1 cup orange juice","½ cup lemon juice","1 cup cranberry juice","4 limes, thinly sliced","¼ cup sugar","1 cup fresh mint leaves","1 bottle sparkling apple cider"]}],
    steps:[],
    cardNotes:["Made for the first school cookie swap, 2004."],
    gaps:["The card lists ingredients only, with no instructions or serving size."] },

  { slug:"sunshine-fizz", title:"Sunshine Fizz", section:"family", category:"Beverages", credit:"", serves:"3",
    summary:"Orange and pineapple juice blended with sherbet and topped with club soda. From Southern Living.",
    ingredients:[{items:["1 cup chilled orange juice","1 cup chilled pineapple juice","1 cup orange sherbet","½ cup chilled club soda","3 extra scoops orange sherbet, to serve"]}],
    steps:["Combine the orange juice, pineapple juice and 1 cup orange sherbet in an electric blender. Process until smooth.","Stir in the club soda.","Pour into 3 tall soda glasses and add a scoop of orange sherbet to each."],
    cardNotes:["Source written on the card: Southern Living."] },

  { slug:"citrus-punch-ronda", title:"Citrus Punch", section:"family", category:"Beverages", credit:"Ronda", serves:"9–12",
    summary:"Lemon tea sweetened with honey and mixed with citrus juices and lemon-lime soda. From the kitchen of Ronda.",
    ingredients:[{items:["8 Lemon Zinger tea bags","1 cup boiling water","¼ cup honey","½ cup cold water","2 cups ice cubes","2 cups orange juice","1½ cups grapefruit juice","3 cups lemon-lime soda"]}],
    steps:[],
    gaps:["The card lists ingredients only, with no instructions."] },

  // ---------- Appetizers ----------
  { slug:"old-farmhouse-chutney-cheese-ball", title:"Old Farmhouse Chutney Cheese Ball", section:"family", category:"Appetizers", credit:"", serves:"10–12", cardNote:"great",
    summary:"A cream cheese ball with chutney, Colby and Monterey Jack, rolled in pecans. Card says: “Great,” 2007.",
    ingredients:[{items:["16 oz cream cheese, softened","½ cup Stonewall Kitchen Old Farmhouse Chutney","¼ cup scallion, diced","1 clove garlic, minced","Salt and pepper, to taste","½ cup Colby cheese, shredded","½ cup Monterey Jack cheese, shredded","½ cup pecans, chopped"]}],
    steps:["Mix together the cream cheese, chutney, scallions, garlic, salt and pepper.","Fold in the Colby and Monterey Jack cheeses.","Form the mixture into a ball and roll it in the chopped pecans."],
    notes:["Garnish with sliced apples and serve with crackers."],
    cardNotes:["Printed card from Stonewall Kitchen, dated 2007."] },

  { slug:"spicy-goat-cheese-tomato-appetizer", title:"Spicy Goat Cheese & Tomato Appetizer", section:"family", category:"Appetizers", credit:"", serves:"",
    summary:"A baked dip of spicy tomatoes topped with goat cheese.",
    ingredients:[{items:["½ cup onion, chopped","1 tbsp butter or margarine","1 (10-oz) can Ro-Tel-style diced tomatoes and green chilies (card says Chi-Chi's)","1 (14½-oz) can whole tomatoes, cut up","1 tsp sugar","½ tsp salt","¼ tsp dried thyme leaves","6–7 oz goat cheese (or 2 [4.2-oz] garlic and herb soft spreadable cheese, dropped by tablespoons to make about 8 dollops)","Coarsely ground pepper","Fresh cilantro, chopped","Toasted French bread, crackers or tortilla chips, to serve"]}],
    cardNotes:["Source written on the card: New Healthy Brand Name Cookbook."],
    steps:["Heat the oven to 350°.","Sauté the onion in the butter until golden. Stir in the tomatoes and chilies, the cut-up whole tomatoes, sugar, salt and thyme.","Bring to a boil, then boil over medium-high heat for 10 to 15 minutes, stirring occasionally, until thickened and the liquid is greatly reduced.","Spoon the tomato mixture into a 9\" glass pie plate or other 1-quart ovenproof serving dish.","Cut the goat cheese into ¼\" slices and arrange on top. Sprinkle with pepper.","Bake 12 to 18 minutes, until the cheese is heated through.","Sprinkle with cilantro if desired and serve with toasted French bread, crackers or tortilla chips."] }
];
R.forEach(function(r){
  r.fromBox = true;
  r.box = "A";
  r.boxSection = r.category === "Beverages" ? "Gift Ideas" : "Appetizers & Dips";
  r.subtitle = "";
  r.tags = ["recipe box", "mom's recipe box", "box A"];
  if (!r.serves) r.serves = "";
  r.tags.push(r.boxSection.toLowerCase());
});
window.RECIPES = (window.RECIPES || []).concat(R);
})();
