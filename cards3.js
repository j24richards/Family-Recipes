// Third batch of Mom's recipe-box cards (drinks, dips, appetizers), added Nov 2026.
// All Family Recipe Box. Printed or magazine sources are kept as a card note, not as a credit.
// Anything missing or hard to read is listed in "gaps" and never invented. No photos of the cards.
(function(){
var R = [
  // ---------- Beverages ----------
  { slug:"pineapple-thick-shake", title:"Pineapple Thick Shake", category:"Drinks", credit:"", serves:"1", cardNote:"good",
    summary:"A one-serving milk and pineapple shake. Card says: “Good.”",
    ingredients:[{items:["1 cup cold skim milk","½ cup canned crushed pineapple, chilled","½ tsp coconut, vanilla or rum extract","Artificial sweetener, to taste"]}],
    steps:["Combine in a blender until smooth.","May also add 2 to 3 ice cubes, one at a time."],
    cardNotes:["Source written on the card: Weight Watchers.","Good with strawberries, too."] },

  { slug:"grammy-mahoneys-hot-cocoa", title:"Grammy Mahoney's Hot Cocoa", category:"Drinks", credit:"Grammy Mahoney", serves:"",
    summary:"A dry hot cocoa mix to keep on hand. Mix a batch, then stir 3 tbsp into a mug of boiling water. From the kitchen of Grammy Mahoney.",
    ingredients:[{items:["1½ cups unsweetened cocoa","2½ cups XXX (powdered) sugar","1¾ cups sugar","½ tsp salt","6 cups nonfat dry milk","1½ cups Cremora (powdered creamer)","1 cup milk chocolate bits"]}],
    steps:["Mix all ingredients until well blended.","To serve, place 3 tbsp in a mug of boiling water and top with marshmallows."],
    cardNotes:["The card says the amounts were revised, and the original amounts are in parentheses. The cocoa, XXX sugar and sugar each show \"(1)\" as the original.","The chocolate bits weren't part of the original recipe."],
    gaps:["The original amounts \"(1)\" on the card have no unit written."] },

  { slug:"peach-of-a-tea", title:"A Peach of a Tea", category:"Drinks", credit:"", serves:"12",
    summary:"Iced English breakfast and peach herb tea with fresh mint, served with peach wedges. From a newspaper clipping.",
    ingredients:[{items:["8 cups water","¼ cup sugar","3 regular-size English breakfast tea bags","5 regular-size peach herb tea bags","15 fresh mint sprigs","8 cups ice cubes, plus more for serving","1 to 2 large ripe peaches, cleaned but unpeeled"]}],
    steps:["Combine the water and sugar in a 4-quart or larger nonaluminum saucepan. Bring to a simmer over high heat, then lower the heat and simmer, stirring often, until the sugar dissolves, 3 to 4 minutes.","Remove from the heat. Add the tea bags and 3 mint sprigs and steep 25 minutes.","Remove the tea bags and squeeze them over the pan. Discard the 3 mint sprigs.","Add 8 cups ice cubes to dilute. Cover and refrigerate to chill.","To serve, fill 12 tall glasses with more ice and pour the tea over it. Cut 12 (½-inch) wedges from the peaches and garnish each glass with 1 peach slice and 1 mint sprig."],
    cardNotes:["Newspaper clipping. The clipping refers to a Note on the recipe, which is on the back of the card (\"over\")."],
    gaps:["The back of the card wasn't photographed."] },

  { slug:"susies-hot-cider", title:"Susie's Hot Cider", category:"Drinks", credit:"Susie", serves:"",
    summary:"A big pot of spiced hot cider with brown sugar, orange and lemon. From the “Susie's in the Kitchen” clipping.",
    ingredients:[{items:["1 gallon apple cider","1 cup brown sugar","1 tsp whole cloves","2 to 3 cinnamon sticks","1 tsp whole allspice","1 orange, sliced","1 lemon, sliced"]}],
    steps:["Combine the ingredients. Heat and serve."],
    cardNotes:["Clipping headed “Susie's in the Kitchen.”"] },

  { slug:"orange-ratafia-liqueur", title:"Orange Ratafia Liqueur", category:"Drinks", credit:"", serves:"",
    summary:"A homemade orange and Armagnac after-dinner drink that takes about 2 months. Makes about 1½ quarts.",
    ingredients:[{items:["2 cups freshly squeezed orange juice, strained (about 6 large oranges)","1 cup sugar","1 liter (about 1 qt) Armagnac","⅓ cup 2\" strips orange peel","4 cinnamon sticks"]}],
    steps:["Combine the orange juice and sugar in a medium nonaluminum saucepan and bring to a boil, stirring to dissolve the sugar. Let stand until completely cool.","Transfer to a porcelain crock, pitcher or glass jar. Stir in the Armagnac, orange peel and cinnamon sticks and stir again.","Cover and let stand at room temperature for one month.","Strain through coffee filter papers into bottles. Cover tightly and let stand at least 1 month longer before serving."],
    cardNotes:["Source written on the card: Bon Appétit.","Written at the top: prepare 2 months in advance.","Original said to let it stand overnight, which was crossed out."] },

  { slug:"lemon-spice-tea-punch", title:"Lemon-Spice Tea Punch", category:"Drinks", credit:"", serves:"30 (½-cup servings)",
    summary:"Lemon-spice tea mixed with pineapple juice and club soda, with orange sherbet floating on top. Makes about 15 cups.",
    ingredients:[{items:["8 cups water","⅔ cup sugar","6 lemon-and-spice tea bags","2 (18-oz) cans pineapple juice, chilled","1 (28-oz) bottle club soda, chilled","1 pt orange sherbet","1 lemon, thinly sliced, for garnish"]}],
    steps:["About 1¼ hours before serving, or early in the day: heat the water and sugar to boiling in a 3-qt saucepan over high heat, stirring occasionally, until the sugar dissolves.","Remove from the heat, add the tea bags and let stand 5 minutes. Discard the tea bags and refrigerate until cool, about 1 hour.","To serve, stir the tea, pineapple juice and club soda in a punch bowl until well blended. Spoon the sherbet into the punch and garnish with lemon slices."],
    cardNotes:["Source written on the card: Good Housekeeping."] },

  { slug:"hot-maple-cider", title:"Hot Maple Cider", category:"Drinks", credit:"", serves:"4",
    summary:"Apple cider simmered with maple syrup, vanilla bean and whole spices.",
    ingredients:[{items:["4 cups apple cider","2 tbsp maple syrup","½ vanilla bean, split","1 cinnamon stick","8 whole allspice berries","Apple slices and a cinnamon stick, to garnish"]}],
    steps:["Pour the cider into a nonaluminum saucepan and stir in the maple syrup with a wooden spoon.","Add the vanilla bean, cinnamon stick and allspice berries. Cover and simmer for 20 to 30 minutes.","Strain the mixture and discard the solids. Ladle into mugs and garnish with apple slices and a cinnamon stick."],
    cardNotes:["Source written on the card: Family Fun magazine."] },

  { slug:"party-punch-kathy", title:"Punch", category:"Drinks", credit:"Kathy", serves:"", cardNote:"good",
    summary:"A fruit-juice and tea punch with ginger ale and sherbet, with a note for adding liquor. From the kitchen of Kathy. Card says: “Good!”",
    ingredients:[{items:["6-oz cans frozen orange juice","6-oz cans frozen pineapple (or pineapple-grapefruit) juice","6-oz cans frozen pink lemonade","6 cans strong tea (4 cans if liquor is added)","1 pkg frozen fruit or melon balls","1 qt ginger ale, added at serving time","1 pt orange or lime sherbet"]}],
    steps:["Mix the frozen juices and add the tea.","Add the frozen fruit or melon balls. Add the ginger ale and sherbet at serving time.","A ring of ice cubes can be made in a Jell-O mold pan, colored by adding a can of frozen juice."],
    gaps:["The card doesn't say how many cans of each frozen juice, or the serving size."] },

  { slug:"perfect-lemonade", title:"Perfect Lemonade", category:"Drinks", credit:"", serves:"1½ qts", cardNote:"good",
    summary:"Lemonade sweetened with a boiled lemon-rind syrup. Makes 1½ quarts. Card says: “Good.”",
    ingredients:[{items:["5 cups water, divided","1 cup lemon juice","3 lemons","1 cup sugar"]}],
    steps:["Chill the lemon juice and 4 cups of the water for 30 minutes.","Peel the lemons, leaving the pith on the fruit. Reserve the lemons for other uses.","Cut the rind into strips and combine with the sugar and the remaining 1 cup water. Cook over medium-low heat, stirring constantly, until the sugar dissolves.","Bring to a boil and boil 7 minutes. Let cool.","Add to the juice mixture and stir. Chill 2 hours before serving."],
    cardNotes:["Source written on the card: America's Best, '91 (hard to read)."] },

  { slug:"spiced-chocolate-drink", title:"Spiced Chocolate Drink", category:"Drinks", credit:"", serves:"6",
    summary:"Hot chocolate made with melted chocolate pieces, cream, cinnamon and nutmeg, beaten until foamy. Serve warm or cold.",
    ingredients:[{items:["1 pkg (6 oz) semisweet chocolate pieces","¼ cup sugar","Dash salt","1 cup water","2 cups milk","1 cup light cream","¼ tsp cinnamon","⅛ tsp nutmeg","1 tsp vanilla extract"]}],
    steps:["In a heavy 3-quart saucepan, bring 1 cup water to boiling. Add the chocolate pieces, sugar and salt and stir constantly over medium heat just until the chocolate is melted and the mixture is smooth.","Add the milk, cream, cinnamon and nutmeg. Bring just to boiling, stirring. Remove from the heat and add the vanilla.","Just before serving, beat with a rotary beater until foamy. Serve warm, or refrigerate to serve cold."],
    cardNotes:["Clipping pasted on a recipe card."] },

  // ---------- Appetizers & dips ----------
  { slug:"marinated-mushrooms", title:"Marinated Mushrooms", category:"Appetizers & Dips", credit:"", serves:"", cardNote:"great",
    summary:"Small mushrooms simmered in olive oil, wine, lemon and herbs, and chilled. Card says: “Great!”",
    ingredients:[{items:["2 lbs small fresh mushrooms","1 cup olive oil","½ cup dry white wine","Juice of 1 lemon","2 tbsp minced onion","3 garlic cloves, peeled and minced","1 tsp dried oregano, crushed","1 tbsp kosher salt","¼ tsp freshly ground pepper"]}],
    steps:["Wipe the mushrooms clean with a damp paper towel and place them in a saucepan.","Add all the remaining ingredients to the pan and simmer 20 minutes, stirring occasionally.","Cool and refrigerate up to 2 days. The longer, the better."],
    cardNotes:["Source written on the card: Globe.","Use the leftover marinade as a salad dressing."] },

  { slug:"bean-dip", title:"Bean Dip", category:"Appetizers & Dips", credit:"Cathy Milligan", serves:"",
    summary:"A quick kidney bean dip with pickle relish and horseradish. From the kitchen of Cathy Milligan.",
    ingredients:[{items:["1 can kidney beans, drained well","½ jar pickle relish, drained","1 tsp horseradish","Sprinkle of dry mustard","Sprinkle of onion flakes","Mayo, to consistency (up to 1 cup, start small)"]}],
    steps:["Mix everything together, adding the mayo a little at a time until it reaches the right consistency.","Let sit."] },

  { slug:"hot-artichoke-dip", title:"Hot Artichoke Dip", category:"Appetizers & Dips", credit:"Miriam B. Loo", serves:"20",
    summary:"A baked artichoke, green chile and cheese dip. Can be made ahead. Makes about 5 cups. From the kitchen of Miriam B. Loo.",
    ingredients:[{items:["1 jar (4 oz) diced pimiento","1 can (14 oz) artichoke hearts, drained and coarsely chopped","1½ cups mayonnaise","2 cans (4 oz each) diced green chilies, drained","4 ounces Monterey Jack cheese, shredded","½ cup grated Parmesan cheese, plus more for the top","Corn chips or tortilla chips, to serve"]}],
    steps:["Drain the pimiento and reserve 2 teaspoons of it.","In a medium bowl, mix the pimiento, artichokes, mayonnaise, green chilies, Monterey Jack and ½ cup Parmesan.","Spoon into a shallow 1½-quart baking dish. Sprinkle with additional Parmesan and the reserved pimiento.","If making ahead, cover and refrigerate (at least 1 hour or up to 1 day before serving).","Bake uncovered in a preheated 325° oven for 30 minutes, or until bubbly. Serve with chips."],
    cardNotes:["The back of the card is a holiday note from Miriam B. Loo."],
    gaps:[] },

  { slug:"creamy-tarragon-dip", title:"Creamy Tarragon Dip", category:"Appetizers & Dips", credit:"", serves:"",
    summary:"A cold yogurt and mayo dip with tarragon, parsley and lemon, served with veggies.",
    ingredients:[{items:["1 cup plain lowfat yogurt","1 cup mayo or salad dressing","1 tbsp green onion, chopped","1 tbsp fresh parsley, snipped","2 tsp lemon juice","½ tsp dried tarragon, crushed","Dash freshly ground pepper","Assorted veggie dippers"]}],
    steps:["Combine the yogurt, mayo, onion, parsley, lemon juice, tarragon and pepper and mix well.","Cover and chill up to 24 hours before serving."],
    cardNotes:["Source written on the card: New & Healthy Brand Name Cookbook."] },

  { slug:"chili-con-queso-dip", title:"Chili Con Queso (Dip)", category:"Appetizers & Dips", credit:"Dick Syatt show", serves:"",
    summary:"A melted Velveeta, tomato and green chili dip. Card has an alternate version. From the Dick Syatt show.",
    ingredients:[{items:["1 lb Velveeta, chopped up","1 (16-oz) can whole peeled tomatoes, chopped small","1 (3½-oz) can El Paso green chilies, chopped very fine","½ medium onion, chopped fine","McCormick Texas-style chili powder, to taste","Bland chips, such as Tostitos original flavor, to serve"]}],
    steps:["Melt everything together in a double boiler. Add chili powder to taste.","Serve with a bland chip like Tostitos original flavor."],
    cardNotes:["Alternate version: melt together 1 lb Velveeta with 2 (8-oz) jars piquant sauce (mild or medium)."] },

  { slug:"veg-dip-mary-wills", title:"Veggie Dip", category:"Appetizers & Dips", credit:"Mary Wills", serves:"",
    summary:"A make-ahead sour cream and mayo dip with dill and Beau Monde seasoning. From the kitchen of Mary Wills.",
    ingredients:[{items:["1 cup mayo","1 cup sour cream","2 tbsp parsley","2 tbsp onion flakes","1 tsp dill weed","1 tsp Beau Monde seasoning"]}],
    steps:["Mix together and store in the fridge overnight. Serve with veggies."] },

  { slug:"chicken-bites", title:"Chicken Bites", category:"Appetizers & Dips", credit:"", serves:"12",
    summary:"Bite-sized chicken marinated in red wine vinegar, then sautéed and served with wooden picks.",
    ingredients:[{items:["2 whole chicken breasts, boned and cut into bite-sized pieces","Paprika, salt and pepper, to taste","1 tsp Pompeian red wine vinegar","⅓ cup pure olive oil"]}],
    steps:["Sprinkle the chicken with paprika, salt and pepper to taste. Add the vinegar and stir well to coat the pieces. Marinate for 1 hour.","Heat the olive oil in a skillet to 320°. Add the chicken and sauté on both sides until golden brown.","Serve immediately with wooden picks."],
    cardNotes:["Source written on the card: New & Healthy Brand Name Cookbook."] },

  { slug:"farmstand-vegetable-dip", title:"Farmstand Vegetable Dip", category:"Appetizers & Dips", credit:"", serves:"",
    summary:"A small-batch mayo, tahini and dill dip. Also good as a sauce for poached or grilled fish. Makes about ⅓ cup.",
    ingredients:[{items:["¼ cup mayonnaise","1 tbsp tahini","1 tbsp lemon juice","2 tbsp chopped fresh dill","⅛ tsp cayenne pepper, or to taste"]}],
    steps:["Stir the mayonnaise to remove lumps, then whisk in the remaining ingredients."],
    cardNotes:["Clipping pasted on the card."] },

  { slug:"crab-or-shrimp-cheese-muffins", title:"Crab or Shrimp Cheese Muffins", category:"Appetizers & Dips", credit:"", serves:"",
    summary:"English muffins spread with a crab or shrimp and cheese mixture, frozen, cut and broiled.",
    ingredients:[{items:["7 oz crab or shrimp (drained)","½ tsp seasoning salt","1 jar Old English cheese spread","1½ tsp mayo","½ tsp garlic salt","1 stick butter (softened)","8 English muffins (whole)"]}],
    steps:["Mix the Old English cheese spread with the other ingredients, then add the crab or shrimp.","Spread over the muffins and put in the freezer for 6 to 8 minutes.","Take out and cut. Cook under the broiler."],
    cardNotes:["The back of the card says: \"freeze\" and \"cook under broiler.\""],
    gaps:["The front of the card stops at \"Take out & cut.\" The broiling time isn't given."] }
];
R.forEach(function(r){
  r.section = "family";
  r.fromBox = true;
  r.box = "A";
  r.boxSection = r.category === "Beverages" ? "Gift Ideas" : "Appetizers & Dips";
  r.subtitle = "";
  r.tags = ["recipe box", "mom's recipe box", "box A"];
  if (!r.serves) r.serves = "";
  if (r.credit === "") delete r.credit;
  r.tags.push(r.boxSection.toLowerCase());
});
window.RECIPES = (window.RECIPES || []).concat(R);
})();
