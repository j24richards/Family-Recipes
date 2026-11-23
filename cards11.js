// Mom's Recipe Box 2, Egg & Cheese section (photos 1000014011-1000014037). NOT on the site yet.
(function(){
var R = [
  { slug:"baked-custard-redbook", title:"Baked Custard", category:"Desserts", credit:"", serves:"6",
    summary:"A light baked egg custard made with skim milk, baked in cups in a water bath and topped with nutmeg.",
    ingredients:[{items:["2 large eggs","3 tbsp granulated sugar","¼ tsp salt","½ tsp vanilla","2 cups skim milk","Ground nutmeg"]}],
    steps:["Beat the eggs, sugar, salt and vanilla in a small bowl until well blended. Stir in the milk.","Divide among six 6-oz custard cups. Set the cups in a 2-inch-deep baking dish and add water to the dish to a depth of ½ inch.","Bake at 350° about 40 minutes, until a knife inserted in the custard comes out clean.","Chill thoroughly. Sprinkle with nutmeg before serving. Keeps 3 or 4 days in the refrigerator.","Stovetop option: pour ½ inch of water into a large pan, add the filled cups, cover and cook over low heat about 1 hour, until a knife comes out clean."],
    notes:["Handwritten: “Good – real easy.”"],
    cardNotes:["Source written on the card: Redbook","The method continues on the back of the card."],
    gaps:[] },

  { slug:"citrus-vanilla-creme-brulee-stonewall-kitchen", title:"Citrus Vanilla Crème Brûlée", category:"Desserts", credit:"", serves:"About 8",
    summary:"Vanilla bean custard with lemon or key lime curd whisked in, baked in ramekins in a water bath.",
    ingredients:[{items:["7 egg yolks","¾ cup sugar, divided","3 cups heavy cream","½ vanilla bean, split","6 tbsp lemon curd or key lime curd"]}],
    steps:["Heat the oven to 350°.","Mix the egg yolks and ¼ cup of the sugar in a mixing bowl.","In a saucepan, combine the cream with ½ cup sugar and the vanilla bean and dissolve over medium-low heat. Keep heating until steaming hot. Remove the vanilla bean.","Slowly add the cream to the yolks, stirring constantly. Gently whisk in the curd.","Pour into ramekins and bake in a hot water bath for 35 to 40 minutes."],
    notes:["The card suggests adding coffee syrup or espresso powder to the cream for extra flavor."],
    cardNotes:["Source: Stonewall Kitchen recipe card"],
    gaps:["The card doesn’t say how to finish the sugar top; usually you sprinkle sugar on the chilled custards and caramelize it with a torch or under the broiler."] },

  { slug:"egg-brunch-casserole-kathy-beaulieu", title:"Egg Brunch Casserole", category:"Breakfast", credit:"", serves:"10 to 12",
    summary:"Croutons and cheddar soaked in a seasoned egg custard, topped with bacon and baked.",
    ingredients:[{items:["4 cups plain (or lightly seasoned) croutons","8 oz shredded cheddar","8 eggs, slightly beaten","4 cups milk","1 tsp salt","1 tsp prepared mustard","¼ tsp onion powder","⅛ tsp pepper","8 slices cooked bacon, crumbled"]}],
    steps:["Combine the croutons and cheese in the bottom of a greased 9x13 pan.","Mix the eggs, milk, salt, mustard, onion powder and pepper. Pour over the croutons.","Crumble the bacon on top.","Bake at 325° for 55 to 60 minutes."],
    notes:["The clipping suggests adding broccoli, mushrooms, pepper, onion or spinach."],
    cardNotes:["Source: newspaper clipping, recipe from Kathy Beaulieu, Salem"],
    gaps:[] },

  { slug:"custard-mom-goucher", title:"Custard", category:"Desserts", credit:"Mom Goucher", serves:"",
    summary:"Simple baked custard with scalded milk, lightly sweetened and topped with nutmeg.",
    ingredients:[{items:["3 eggs, lightly beaten","2 cups milk, scalded","¼ tsp salt","⅓ cup sugar (skimp)","Nutmeg, for the top"]}],
    steps:["Add the hot milk very slowly to the eggs, then add the sugar and salt.","Pour into a baking dish and sprinkle nutmeg on top.","Set in a pan of warm water and bake 1 hour at 325°."],
    notes:["Handwritten: “Good.”"],
    cardNotes:[],
    gaps:[] },

  { slug:"yogurt-quiche", title:"Yogurt Quiche", category:"Breakfast", credit:"", serves:"6",
    summary:"A quiche made with yogurt and half-and-half, with bacon, ham or shrimp and Gruyère or Swiss.",
    ingredients:[{items:["9-inch unbaked pastry shell","½ tbsp butter","¼ cup finely chopped onion","4 eggs, slightly beaten","1 cup (8 oz) plain yogurt","1 cup half-and-half","1 tsp salt","Dash of pepper","Dash of cayenne","½ lb bacon, cooked and crumbled, OR 1 cup cooked chopped ham, OR 1½ cups cooked diced shrimp","¼ lb Gruyère or natural Swiss cheese, shredded"]}],
    steps:["Sauté the onion in the butter and let cool.","Combine the eggs, yogurt, half-and-half, salt, pepper, cayenne and onion.","Sprinkle the meat and cheese in the pastry shell and pour in the egg mixture.","Bake at 350° for 35 to 40 minutes, until the top puffs and browns lightly and the custard is set."],
    notes:["Handwritten: “good – easy.”"],
    cardNotes:[],
    gaps:[] },

  { slug:"quiche-gail", title:"Quiche (Gail)", category:"Breakfast", credit:"Gail", serves:"",
    summary:"A basic cheese quiche in a baked crust. Add scallions, ham, onion, spinach or whatever you like.",
    ingredients:[{items:["1 baked pie crust","1½ cups milk, scalded","1 cup grated cheese","3 eggs, beaten","Salt and pepper","Optional: scallions, ham, onion, spinach"]}],
    steps:["Scald the milk, add the cheese and let it melt. Add the eggs, salt and pepper.","Pour into the baked pie crust, adding any extras you like.","Bake at 350° until firm, about 20 minutes."],
    notes:["Handwritten: “good.”"],
    cardNotes:["The baking time is written as “20 min (?)” on the card."],
    gaps:["The card itself isn’t sure of the time; check that it’s set in the center."] },

  { slug:"ham-and-bacon-quiche", title:"Ham and Bacon Quiche", category:"Breakfast", credit:"", serves:"",
    summary:"A deep 10-inch quiche layered with cheddar, ham, bacon, Parmesan, onion and Swiss in a pre-baked, egg-white-sealed crust.",
    ingredients:[
      {items:["One 10-inch pie shell (homemade or frozen)","1 egg white, lightly beaten"]},
      {name:"Filling", items:["1 cup grated cheddar cheese","1 cup cubed baked ham","¼ cup cooked bacon, drained and crumbled","¼ cup grated Parmesan cheese","¼ cup minced raw onion","½ tsp ground white pepper","1 cup grated Swiss cheese","5 whole eggs","1 cup milk"]}],
    steps:["Don’t prick the pie dough. Bake the shell at 400° just until it starts to color, not brown. Take it out and cool 3 minutes.","Brush the inside of the crust with the egg white, including the edges. Bake again until golden brown and completely baked. Cool before continuing.","Layer the cheddar, ham, bacon, Parmesan, onion, white pepper and Swiss in the shell, in that order.","Beat the eggs until frothy, then blend in the milk. Pour evenly over the filling. Gently lift and stir with a fork to distribute everything.","Set the quiche on a cookie sheet and bake at 350° for about 1 hour, until firm and golden brown.","Let stand at room temperature 15 minutes before cutting."],
    cardNotes:["Printed recipe sheet; no source name on it."],
    gaps:[] },

  { slug:"egg-and-sausage-breakfast-dish-juliet-west", title:"Egg & Sausage Breakfast Dish", category:"Breakfast", credit:"Juliet West", serves:"6",
    summary:"An overnight strata of sausage, eggs, bread crumbs and cheddar. Great for a Sunday brunch.",
    ingredients:[{items:["1 lb sausage, cooked and drained","6 eggs, slightly beaten","2 cups milk","1 tsp salt","1 tsp dry mustard","2 slices day-old bread, crushed","1 cup grated cheddar cheese","3 tbsp chopped onion","Mushrooms (optional)"]}],
    steps:["Mix everything together in an 11x7x1½-inch Pyrex dish and let it sit in the refrigerator overnight.","Bake at 350° for 45 minutes."],
    notes:["Handwritten: “Good.” The card says it’s great for a Sunday brunch and you can add mushrooms."],
    cardNotes:["Printed “Here’s what’s cookin’” card, “Recipe from the kitchen of Juliet West.”"],
    gaps:[] },

  { slug:"sunny-ham-and-eggs-mom-r", title:"Sunny Ham & Eggs", category:"Breakfast", credit:"Mom R", creditNote:"Barbara Richards", serves:"",
    summary:"A hash brown crust baked crisp, then layered with Swiss, ham, Jack cheese and mushrooms and baked in an egg custard.",
    ingredients:[{items:["1 package (15 oz) hash brown potatoes, thawed","⅓ cup butter, melted","1½ cups shredded Swiss cheese","1½ cups diced cooked ham","1½ cups Monterey Jack cheese","1 can (4 oz) mushrooms, drained","½ cup milk","3 eggs","½ tsp seasoned salt","¼ tsp paprika","1 tbsp chopped parsley"]}],
    steps:["Press the potatoes firmly into a greased 9-inch deep-dish pie plate to make a crust. Brush with the butter.","Bake at 425° for 25 minutes. Take it out and lower the oven to 350°.","Layer the Swiss cheese, ham, Jack cheese and mushrooms on the crust.","Whisk the eggs, milk and seasoned salt and slowly pour over the pie. Sprinkle with paprika and parsley.","Bake 30 to 40 minutes, until the center is set. Let stand 10 minutes before cutting."],
    cardNotes:["Source written on the card: Reader’s Digest","The method continues on the back of the card."],
    gaps:[] },

  { slug:"baked-ham-and-cheese-brunch-herald-american", title:"Baked Ham & Cheese Brunch", category:"Breakfast", credit:"", serves:"4 to 5",
    summary:"An overnight strata of bread cubes, broccoli, ham and cheddar in a seasoned egg custard, baked in the morning.",
    ingredients:[{items:["6 slices bread, trimmed and cubed","½ large bunch broccoli, cooked, drained and chopped","1 cup diced ham","1 cup shredded cheddar cheese","3 eggs, lightly beaten","1½ cups milk","2 tsp finely chopped fresh onion","¼ tsp salt","Pinch of nutmeg","⅛ tsp dry mustard"]}],
    steps:["Cover the bottom of a buttered 9-inch square pan with half the bread cubes. Layer in the broccoli, ham and cheese. Repeat the layers.","Combine the eggs, milk, onion and seasonings and blend well. Pour over everything.","Cover and refrigerate overnight or several hours.","In the morning, bake at 350° for 40 to 45 minutes, until a knife comes out clean. Let stand 10 minutes before cutting into squares."],
    cardNotes:["Source written on the card: Herald American","The method continues on the back of the card."],
    gaps:[] },

  { slug:"charlottes-stuffed-eggs-arrowhead-farm", title:"Charlotte’s Stuffed Eggs", category:"Appetizers", credit:"Charlotte", serves:"16 halves",
    summary:"Deviled eggs with a mustard-vinegar paste, plus your choice of bacon, celery or ham mixed into the filling.",
    ingredients:[
      {items:["8 hard-boiled eggs","1 tsp vinegar","1 tsp dry mustard","Mayonnaise, salt and pepper, to taste"]},
      {name:"Additions (pick one)", items:["1 medium stalk celery, finely chopped","3 slices crisp bacon, crumbled","⅓ cup finely chopped ham"]}],
    steps:["Slice the eggs in half lengthwise. Put the yolks in a bowl and crumble them with a fork.","Mix the dry mustard and vinegar into a paste. Add it to the yolks with mayonnaise, salt and pepper to taste.","Add the bacon, celery or ham and mix.","Mound the filling into the egg whites."],
    cardNotes:["Source written on the card: Arrowhead Farm, Newburyport"],
    gaps:[] },

  { slug:"deviled-eggs-pookys-mom", title:"Deviled Eggs", category:"Appetizers", credit:"Pooky’s Mom", serves:"24 halves",
    summary:"Smooth, fluffy deviled eggs with mustard, Worcestershire and a little grated cheddar.",
    ingredients:[{items:["12 eggs, hard-boiled","2 tbsp mayonnaise","1 tbsp vinegar","1 tsp dry mustard","1½ tsp Worcestershire sauce","¾ tsp salt","Dash each of pepper and paprika","¼ cup cheddar cheese, grated","Parsley sprigs, for garnish"]}],
    steps:["Shell the eggs and halve them lengthwise, being careful not to break the whites.","Press the yolks through a sieve and add the rest of the ingredients. Mix until smooth and fluffy.","Mound into the whites and garnish each with a parsley sprig."],
    cardNotes:["“Pooky’s mom” is written at the bottom of the card."],
    gaps:[] },

  { slug:"onion-quiche-chatterline", title:"Onion Quiche", category:"Breakfast", credit:"", serves:"6",
    summary:"An easy quiche of Swiss, ham and light cream flavored with dry onion soup mix.",
    ingredients:[{items:["9-inch pie shell, unbaked","½ cup grated Swiss cheese","4 thin slices cooked ham, diced","4 eggs, beaten","2 cups light cream","1 package (1⅜ oz) onion soup mix"]}],
    steps:["Sprinkle the cheese and ham into the pie shell.","Beat the eggs with the cream and dry onion soup mix and pour over the ham and cheese.","Bake at 350° for 45 to 50 minutes, until well set and lightly browned on top.","Cool 5 minutes and serve."],
    cardNotes:["Source written on the card: Chatterline"],
    gaps:["The soup mix size is overwritten on the card; it looks like 1⅜ oz."] },

  { slug:"breakfast-custard-parents-magazine", title:"Breakfast Custard", category:"Breakfast", credit:"", serves:"4",
    summary:"A baked breakfast custard made with skim milk, maple syrup and shredded wheat.",
    ingredients:[{items:["3 cups skim milk","¼ cup maple syrup","2 large shredded wheat biscuits","3 eggs"]}],
    steps:["Heat the oven to 350°.","Combine the milk, syrup and shredded wheat in a medium saucepan and heat just to simmering. Take off the heat and stir to break up the cereal.","Beat the eggs in a medium bowl. Slowly stir in the hot milk mixture.","Pour into four 10-oz custard cups. Set them in a pan with 1 inch of water.","Bake 1 hour. Cool, then chill."],
    cardNotes:["Source written on the card: Parents Magazine"],
    gaps:[] },

  { slug:"mushrooms-and-eggs-au-gratin-lowell-sun", title:"Mushrooms & Eggs au Gratin", category:"Casseroles", credit:"", serves:"6",
    summary:"Deviled egg halves baked under sautéed mushrooms and a cheddar cheese sauce with buttered crumbs.",
    ingredients:[{items:["12 oz fresh mushrooms","6 hard-boiled eggs","¼ cup mayonnaise","1 tsp lemon juice","¼ tsp powdered mustard","¼ tsp salt","Pinch of black pepper","6 tbsp butter or margarine, divided","3 tbsp flour","1½ cups milk","1 cup shredded cheddar cheese","2 tbsp dry bread crumbs"]}],
    steps:["Heat the oven to 350°. Rinse, pat dry and slice the mushrooms (about 4 cups). Set aside.","Halve the eggs lengthwise. Mash the yolks with the mayonnaise, lemon juice, mustard, salt and pepper until smooth. Spoon back into the whites and set them in a greased 2-quart baking pan.","Melt 2 tbsp butter in a large skillet and sauté the mushrooms until golden, about 5 minutes. Sprinkle half over the eggs.","Melt 3 tbsp butter in a saucepan, stir in the flour, then the milk. Cook and stir until thickened. Add the cheese and stir until melted. Pour over the eggs.","Top with the rest of the mushrooms. Melt the last 1 tbsp butter, mix with the crumbs and sprinkle over the top.","Bake uncovered until bubbling, about 15 minutes."],
    notes:["Handwritten: “good.”"],
    cardNotes:["Source written on the card: Lowell Sun","The method continues on the back of the card."],
    gaps:[] },

  { slug:"hash-brown-quiche", title:"Hash Brown Quiche", category:"Breakfast", credit:"", serves:"6",
    summary:"A crisp hash brown crust filled with ham, cheddar and green pepper in an egg custard.",
    ingredients:[{items:["3 cups frozen loose-pack shredded hash browns, thawed","⅓ cup butter or margarine, melted","1 cup diced fully cooked ham","1 cup (4 oz) shredded cheddar cheese","¼ cup diced green pepper","2 eggs","½ cup milk","½ tsp salt","¼ tsp pepper"]}],
    steps:["Press the hash browns between paper towels to remove extra moisture. Press into the bottom and up the sides of an ungreased 9-inch pie plate. Drizzle with the butter.","Bake at 425° for 25 minutes.","Mix the ham, cheese and green pepper and spoon over the crust. Beat the eggs, milk, salt and pepper and pour over all.","Lower the oven to 350° and bake 25 to 30 minutes, until a knife near the center comes out clean. Let stand 10 minutes before cutting."],
    cardNotes:["Magazine clipping; no source name on it."],
    gaps:[] },

  { slug:"breakfast-pudding-sausage", title:"Breakfast Pudding", category:"Breakfast", credit:"", serves:"6 to 8",
    summary:"A puffy oven pancake batter baked over melted butter with sliced sausages, served with warm maple syrup.",
    ingredients:[{items:["⅓ cup melted butter or margarine","3 eggs","1½ cups milk","1⅓ cups flour","½ tsp salt","1 package (8 oz) brown-and-serve sausages, cut into ¼-inch slices","Maple syrup, warmed, for serving"]}],
    steps:["Pour the melted butter into a 13x9x2-inch baking dish. Set aside.","Beat the eggs, milk, flour and salt at medium speed until well blended. Pour into the dish.","Arrange the sausage slices over the batter.","Bake at 400° for 30 to 35 minutes. Serve right away with warm syrup."],
    cardNotes:[],
    gaps:[] },

  { slug:"shirred-eggs-in-pastry-nancy-riley", title:"Shirred Eggs in Pastry", category:"Breakfast", credit:"Nancy Riley", creditUnsure:true, serves:"",
    summary:"Eggs baked in bread or crêpe cups with Münster, cream, butter, nutmeg and strips of ham.",
    ingredients:[{items:["Thin-sliced bread, crusts removed (or herb crêpes)","Large eggs (1 per cup)","Per egg: ¼ cup grated Münster cheese, 1 tbsp heavy cream, 2 tsp unsalted butter cut in bits, and ½ cup julienne strips of baked ham","Freshly grated nutmeg","Salt and pepper","Minced fresh parsley, for garnish"]}],
    steps:["Fit the bread or crêpes into muffin tins. They can stick up above the tin.","Break 1 egg into each shell. Sprinkle each egg with the Münster, cream, butter bits, nutmeg, salt and pepper.","Top each with ½ cup ham strips.","Bake on a baking sheet in the upper third of a 350° oven for 12 minutes, until the tops bubble and the yolks are just cooked.","Garnish with parsley."],
    notes:["Handwritten: “good.”"],
    cardNotes:[],
    gaps:["The last name could be “Riley” or “Ryley.”","½ cup of ham per egg is what the card says; that’s generous for a muffin cup."] },

  { slug:"quiche-lorraine-ann-peabody", title:"Quiche Lorraine", category:"Breakfast", credit:"Ann Peabody", serves:"2 quiches",
    summary:"Two bacon, onion, mushroom, Swiss and Parmesan quiches in a rich cream custard.",
    ingredients:[{items:["Pastry for two 9-inch pies","6 strips bacon","1 onion, thinly sliced","½ lb sliced mushrooms","1½ cups cubed Swiss cheese","¼ cup grated Parmesan cheese","6 eggs, slightly beaten","1½ cups heavy cream","1½ cups milk","¼ tsp nutmeg","¾ tsp salt","¼ tsp pepper"]}],
    steps:["Heat the oven to 450°. Line two 9-inch pie plates with pastry and bake 5 minutes.","Cook the bacon until crisp and remove from the skillet. Pour off all but 1 tbsp fat.","Cook the onion in the fat until it starts to soften, then add the mushrooms and cook until the onion is transparent.","Crumble the bacon. Divide the bacon, onion, mushrooms and cheeses between the two shells.","Combine the eggs, cream, milk, nutmeg, salt and pepper and strain over the cheese mixture.","Bake 15 minutes at 450°, then lower to 350° and bake until a knife 1 inch from the edge comes out clean, about 10 minutes more."],
    cardNotes:["The method continues on the back of the card."],
    gaps:[] },

  { slug:"zucchini-quiche-ann-peabody", title:"Zucchini Quiche", category:"Breakfast", credit:"Ann Peabody", serves:"",
    summary:"A crustless zucchini, onion and Münster quiche. Can be baked in a crust and with sausage or bacon added.",
    ingredients:[{items:["2 tsp melted oleo","4 cups grated zucchini, salted and pressed to remove water","4 eggs, beaten","½ cup chopped onion (use less)","½ cup parsley (use less)","½ cup flour","1 cup grated Münster cheese","2 tbsp oleo"]}],
    steps:["Spread the melted oleo on the bottom of a 9-inch pie pan.","Mix the zucchini, eggs, onion, parsley, flour and cheese. Pour into the pan.","Dot with the 2 tbsp oleo. Bake at 350° for 35 to 45 minutes."],
    notes:["The card says to use less onion and parsley than listed.","You can use a crust (bake it a little first) and add sausage or crumbled bacon."],
    cardNotes:[],
    gaps:[] },

  { slug:"cheese-and-spinach-pie", title:"Cheese & Spinach Pie", category:"Breakfast", credit:"", serves:"4 to 6",
    summary:"A quiche of Swiss, spinach, mushrooms and canned ham, chicken or turkey, topped with cheddar.",
    ingredients:[{items:["1 unbaked 9-inch pie shell","2 slices Swiss cheese (7x4 inches)","½ cup chopped spinach","½ cup sliced mushrooms","1 can flaked Tender Chunk ham, chicken or turkey","3 eggs, beaten","1 cup half-and-half","2 tsp flour","½ tsp salt","¼ cup shredded cheddar cheese"]}],
    steps:["Put the Swiss cheese on the bottom of the crust. Sprinkle with the spinach, mushrooms and meat.","Mix the eggs, half-and-half, flour and salt and pour into the shell.","Sprinkle with cheddar. Bake at 350° for 40 to 45 minutes."],
    notes:["Handwritten: “good. Cook crust first – don’t prick with fork.”"],
    cardNotes:[],
    gaps:[] },

  { slug:"four-seasons-frittata", title:"Four Seasons Frittata", category:"Breakfast", credit:"", serves:"4",
    summary:"An oven frittata with four vegetables (onion and mushrooms, red pepper, asparagus and potato) arranged in quarters, finished with Parmigiano and balsamic.",
    ingredients:[{items:["6 eggs, lightly beaten","1 tbsp minced fresh flat-leaf parsley","Salt and freshly ground pepper","3 tbsp olive oil","1 small onion, diced","5 oz mushrooms, sliced","1 red bell pepper, seeded and sliced ¼ inch thick","8 oz asparagus tips, blanched","1 potato, peeled, halved, cut in ¼-inch slices and blanched","¼ cup freshly grated Parmigiano-Reggiano","2 tsp aged balsamic vinegar"]}],
    steps:["Heat the oven to 425°. Beat the eggs with the parsley, salt and pepper. Set aside.","In a medium ovenproof skillet, heat the oil and sauté the onion until lightly browned, 4 to 5 minutes. Add the mushrooms and cook until softened and the liquid evaporates. Lift out with a slotted spoon.","Pour the eggs into the hot pan and cook over medium heat 3 to 4 minutes, until they just start to set.","Arrange each vegetable (onion-mushroom, pepper, asparagus, potato) in its own quarter on top. Sprinkle with the cheese.","Bake 10 to 15 minutes, until a knife in the center comes out clean. Drizzle with balsamic. Serve hot or at room temperature."],
    cardNotes:["Magazine clipping; no source name on it."],
    gaps:[] },

];
R.forEach(function(r){
  r.section = "family"; r.fromBox = true; r.box = "2"; r.subtitle = "";
  r.boxSection = "Egg & Cheese";
  r.tags = ["recipe box", "mom's recipe box", "box 2", "egg & cheese"];
  if (!r.serves) r.serves = ""; if (!r.notes) r.notes = []; if (!r.holidays) r.holidays = [];
  if (r.credit === "") delete r.credit;
});
window.RECIPES = (window.RECIPES || []).concat(R);
})();
