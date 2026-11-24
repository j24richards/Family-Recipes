// Fourth batch of Mom's recipe-box cards (appetizers, dips and spreads), added Nov 2026.
// All Family Recipe Box. Printed or magazine sources are kept as a card note, not as a credit.
// Anything missing or hard to read is listed in "gaps" and never invented. No photos of the cards.
(function(){
var R = [
  { slug:"holiday-cheese-ball", title:"Holiday Cheese Ball", category:"Appetizers & Dips", credit:"Shirley Pelletier", serves:"",
    summary:"A big-batch blue cheese and cheddar cheese ball, rolled in parsley, paprika or pecans. Makes 6 balls and freezes well. From the kitchen of Shirley Pelletier.",
    ingredients:[{items:["4 large pkgs cream cheese","2 glasses Roka blue cheese (Kraft)","1 (10-oz) pkg cheddar (Wispride)","2 tbsp chopped onion","2 tsp Worcestershire","4 drops Tabasco","1½ tsp garlic (¾ tsp if powder or salt)","Chopped parsley, paprika or chopped pecans, for rolling"]}],
    steps:["Mix everything together.","Take about 1 cup of the cheese mixture and drop it onto wax paper that has chopped parsley, paprika or chopped pecans on it.","If you want, form it into a Christmas tree or heart shape and dot with pimento."],
    cardNotes:["Makes 6 balls. This freezes well."] },

  { slug:"spinach-balls", title:"Spinach Balls", category:"Appetizers & Dips", credit:"", serves:"",
    summary:"Bite-sized baked spinach and stuffing balls. Makes about 70, and they can be frozen before baking.",
    ingredients:[{items:["2 pkgs frozen chopped spinach","2 cups herb bread stuffing mix","2 onions, chopped fine","6 eggs, beaten","¾ cup melted butter","½ cup Parmesan cheese","1 tbsp garlic salt","⅔ tsp thyme","½ tbsp black pepper"]}],
    steps:["Cook and drain the spinach. Mix in the other ingredients.","Shape into marble-size balls. The mixture makes about 70.","Bake 20 minutes at 350°."],
    cardNotes:["Source written on the card: Lowell Sun.","If frozen before baking, thaw the spinach balls for about 1 hour."] },

  { slug:"devil-dip", title:"Devil Dip", category:"Appetizers & Dips", credit:"Mom", serves:"", cardNote:"good!!",
    summary:"A make-ahead deviled ham and pimento cream cheese dip. From the kitchen of Mom. Card says: “Good!!”",
    ingredients:[{items:["1 jar pimento cream cheese","1 small can deviled ham","½ cup mayonnaise","1 tbsp onion, chopped","Dash of Tabasco sauce","Dash of Accent"]}],
    steps:["Thoroughly mix and refrigerate.","Best made the day before serving."] },

  { slug:"hot-dog-appetizers", title:"Hot Dog Appetizers", category:"Appetizers & Dips", credit:"Sue Bach", serves:"",
    summary:"Little franks wrapped in crescent roll strips and baked. From the kitchen of Sue Bach.",
    ingredients:[{items:["1 pkg small franks, or large franks cut into 4 pieces each","1 pkg (large) crescent rolls"]}],
    steps:["Cut the crescent rolls into strips.","Wrap them around the hot dog pieces.","Bake (temperature on the package) until the rolls are done."] },

  { slug:"herbed-mushrooms", title:"Herbed Mushrooms", category:"Appetizers & Dips", credit:"", serves:"12 (as an accompaniment)",
    summary:"Mushrooms marinated overnight in a cider vinegar and fines herbes dressing with pimientos. Can be made up to 3 days ahead.",
    ingredients:[{items:["1 lb small mushrooms","⅓ cup cider vinegar","2 tbsp salad oil","1½ tsp fines herbes","1½ tsp sugar","1 tsp salt","1 (4-oz) jar diced pimientos, drained"]}],
    steps:["Trim the tough ends off the mushroom stems. Rinse them with cold running water and pat dry.","In a large bowl, gently mix the mushrooms with the remaining ingredients using a rubber spatula.","Cover and refrigerate overnight, stirring occasionally."],
    cardNotes:["Source written on the card: Good Housekeeping.","Make a day ahead, or up to 3 days ahead."] },

  { slug:"dill-dip-mary", title:"Dill Dip", category:"Appetizers & Dips", credit:"Mary", serves:"",
    summary:"A make-ahead mayo and sour cream dip with dill and Beau Monde seasoning, served with raw vegetables. From the kitchen of Mary.",
    ingredients:[{items:["1 cup mayonnaise (Hellmann's)","1 cup sour cream","1 tbsp onion flakes","1 tbsp parsley flakes","1 tsp dill weed","1 tsp Beau Monde seasoning"]}],
    steps:["Mix and refrigerate overnight.","Serve with vegetables, such as cauliflower, carrots and celery."],
    cardNotes:["The serving suggestion is on the back of the card."] },

  { slug:"knorr-vegetable-dip", title:"Knorr Vegetable Dip", category:"Appetizers & Dips", credit:"Cathy Milligan", serves:"", cardNote:"good",
    summary:"A three-ingredient dip made with a package of Knorr vegetable soup mix. From the kitchen of Cathy Milligan. Card says: “Good.”",
    ingredients:[{items:["1 pkg Knorr vegetable soup mix","½ cup yogurt","16 oz sour cream"]}],
    steps:[],
    gaps:["The card lists ingredients only, with no instructions."] },

  { slug:"bean-relish-mom-k", title:"Bean Relish", category:"Jams, Pickles & Relishes", credit:"Mom K.", serves:"12", cardNote:"good",
    summary:"A creamy kidney bean relish with pickle relish and steak sauce. Best made a day ahead and keeps about a week. From the kitchen of Mom K. Card says: “Good.”",
    ingredients:[{items:["1 can water-packed red kidney beans","1 tsp garlic flakes or powder","1 small onion, finely chopped","½ tsp A-1 steak sauce","½ tsp Tabasco sauce","½ tsp Worcestershire sauce","½ cup sweet green relish, drained well","½ cup Miracle Whip salad dressing","½ cup mayonnaise"]}],
    steps:["Drain the relish well.","Combine all the ingredients except the beans into a mixture of the Miracle Whip and mayonnaise.","Then add the beans and mix. Cover."],
    cardNotes:["Recommend making this a day ahead. It will last in the refrigerator about one week.","The last lines are on the back of the card."] },

  { slug:"marinated-mushrooms-clipping", title:"Marinated Mushrooms (Vermouth)", category:"Appetizers & Dips", credit:"", serves:"",
    summary:"Mushrooms simmered in olive oil, white wine or vermouth, lemon and oregano, then chilled. A second version of the marinated mushrooms, from a newspaper clipping.",
    ingredients:[{items:["2 pounds small fresh mushrooms","1 cup olive oil","½ cup dry white wine or dry vermouth","Juice of 1 lemon","2 tbsp minced onion","3 garlic cloves, peeled and minced","1 tsp dried oregano, crushed","1 tbsp kosher salt","¼ tsp freshly ground black pepper"]}],
    steps:["Wipe the mushrooms clean with damp paper toweling and place them in a saucepan.","Add all the remaining ingredients to the pan and simmer 20 minutes, stirring occasionally.","Cool and refrigerate up to 2 days. The longer the mushrooms marinate, the better they will taste.","Serve with toothpicks. Once the mushrooms have all been eaten, use the marinade as a salad dressing."],
    cardNotes:["Newspaper clipping with a handwritten note beside the title."] },

  { slug:"hot-crabmeat-spread", title:"Hot Crabmeat Spread", category:"Appetizers & Dips", credit:"Ann Peabody", serves:"",
    summary:"Crab and cheddar spread baked on English muffins. Can be cut in wedges and frozen before cooking. From the kitchen of Ann Peabody.",
    ingredients:[{items:["1 can (7 oz) crabmeat","1½ tbsp mayo","1 stick butter","1 jar Old English cheddar cheese spread","1 tbsp seasoning salt","English muffins, to spread on"]}],
    steps:["Mix and spread on English muffins.","Bake 20 to 30 minutes (until golden brown) at 375°, or broil about 15 minutes.","Cut in wedges and freeze before cooking if desired."],
    cardNotes:["Pencil note: use food processor.","Shrimp version written at the bottom: 7 oz shrimp, drained; ½ tsp seasoning salt; 1 jar Old English; 1½ tsp mayo; ½ tsp garlic salt; 1 stick butter, softened."] },

  { slug:"beef-and-pecan-spread", title:"Beef & Pecan Spread", category:"Appetizers & Dips", credit:"", serves:"", cardNote:"good — did it in microwave",
    summary:"A baked cream cheese and dried beef spread with a pecan topping, perfect with crackers. Card says: “Good, did it in microwave.”",
    ingredients:[{items:["½ cup chopped unsalted pecans","½ tsp butter","8 oz softened cream cheese","2 tbsp milk","8 oz chipped beef (card says: used 2 oz Buddig's beef)","¼ cup chopped green peppers","2 tbsp onion flakes","½ tsp garlic salt","½ cup sour cream"]}],
    steps:["Cut the chipped beef into small pieces with scissors.","Sauté the pecans in the butter until warm. Set aside.","Blend the remaining ingredients and the beef with a mixer. Put in a glass pie pan and sprinkle with the pecan topping.","Bake at 350° until bubbly, about 20 minutes."],
    cardNotes:["Source written on the card: Confidential Chat (hard to read).","Microwave: cook on medium for about 5 to 6 minutes, uncovered."] }
];
R.forEach(function(r){
  r.section = "family";
  r.fromBox = true;
  r.box = "A";
  r.boxSection = "Appetizers & Dips";
  r.subtitle = "";
  r.tags = ["recipe box", "mom's recipe box", "box A"];
  if (!r.serves) r.serves = "";
  if (r.credit === "") delete r.credit;
  r.tags.push(r.boxSection.toLowerCase());
});
window.RECIPES = (window.RECIPES || []).concat(R);
})();
