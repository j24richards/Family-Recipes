// Bread bowls and fillings for them, added Nov 2026. The Cookbook Shelf.
(function(){
var BB = "Good in a bread bowl. See the Homemade Bread Bowls recipe on The Cookbook Shelf.";
var R = [
  { slug:"homemade-bread-bowls", title:"Homemade Bread Bowls", category:"Breads", serves:"6 bowls",
    summary:"Crusty, chewy yeast rolls baked big enough to hollow out and fill with chowder, chili or a thick soup.",
    ingredients:[{items:["2 cups warm water (about 110°F)","1 packet (2¼ tsp) active dry yeast","1 tbsp sugar","2 tbsp olive oil","2 tsp salt","5½ to 6 cups bread flour (all-purpose works, but the bowls are a little softer)","1 egg, beaten with 1 tbsp water, for brushing"]}],
    steps:["Stir the yeast and sugar into the warm water. Let it sit about 5 minutes, until foamy.","Add the oil, salt and 3 cups of the flour and mix. Add more flour a little at a time until the dough is soft and doesn’t stick to your hands.","Knead 8 to 10 minutes, until smooth. Put the dough in an oiled bowl, cover and let it rise until doubled, about 1 to 1½ hours.","Punch the dough down and cut it into 6 equal pieces. Shape each into a tight ball and set them on a parchment-lined sheet pan. Cover and let rise 30 to 40 minutes.","Heat the oven to 400°F. Brush the balls with the egg wash and cut a shallow X on top of each.","Bake 20 to 25 minutes, until deep golden and they sound hollow when tapped on the bottom. Cool completely.","Cut off the tops and scoop out the middle, leaving a wall about ½ inch thick. Put the bowls and lids back in a 350°F oven for 5 minutes to toast the inside, so the soup doesn’t soak through as fast."],
    notes:["Thick fillings work best: chowders, chili and stews. Thin broth soups soak through quickly.","Shortcut: buy small round sourdough or Italian loaves from the bakery and start at the last step.","Baked bowls freeze well. Thaw, then toast them as in the last step.","Save the scooped-out bread for croutons or for dipping.","Fillings on the site that work well: Broccoli Cheddar Soup, New England Clam Chowder, Loaded Baked Potato Soup, Beef and Bean Chili, Game Day Creamy Chicken, Ham & Bacon Chowder, and Aztec Chili."] },

  { slug:"broccoli-cheddar-soup", title:"Broccoli Cheddar Soup", category:"Soups", serves:"6",
    summary:"Thick, cheesy broccoli soup, a classic for bread bowls.",
    ingredients:[{items:["4 tbsp butter","1 onion, diced","2 garlic cloves, minced","¼ cup flour","3 cups chicken broth","2 cups half-and-half","4 cups broccoli florets, chopped small","1 carrot, grated","½ tsp salt","¼ tsp pepper","Pinch of nutmeg","3 cups (12 oz) sharp cheddar, shredded from a block"]}],
    steps:["Melt the butter in a large pot and cook the onion 5 minutes. Add the garlic for 30 seconds.","Stir in the flour and cook 1 minute. Slowly whisk in the broth, then the half-and-half.","Add the broccoli, carrot, salt, pepper and nutmeg. Simmer about 20 minutes, until the broccoli is tender.","Turn the heat to low and stir in the cheese a handful at a time until melted. Don’t let it boil after the cheese goes in.","For a thicker soup, blend about a third of it and stir it back in."],
    notes:[BB,"Shred the cheese yourself. Bagged shredded cheese has coatings that keep it from melting smoothly.","Freezes well. Thaw overnight and reheat gently on the stove, stirring, without boiling."] },

  { slug:"new-england-clam-chowder", title:"New England Clam Chowder", category:"Soups", serves:"6",
    summary:"Creamy chowder with bacon, potatoes and plenty of clams.",
    ingredients:[{items:["4 slices bacon, chopped","1 onion, diced","2 celery ribs, diced","2 garlic cloves, minced","¼ cup flour","2 bottles (8 oz each) clam juice","3 cans (6.5 oz each) chopped clams, juice drained and saved","1½ lb Yukon Gold potatoes, diced","1 bay leaf","½ tsp dried thyme","1½ cups heavy cream","Salt and pepper, to taste"]}],
    steps:["Crisp the bacon in a large pot. Remove it and set it aside, leaving the fat in the pot.","Cook the onion and celery in the bacon fat 5 minutes. Add the garlic and flour and stir 1 minute.","Whisk in the bottled clam juice and the juice from the cans. Add the potatoes, bay leaf and thyme. Simmer 12 to 15 minutes, until the potatoes are tender.","Stir in the clams and cream and heat 5 minutes without boiling. Remove the bay leaf, season with salt and pepper, and top with the bacon."],
    notes:[BB,"Best eaten within a few days. Cream-and-potato chowders can turn grainy or watery after freezing."] },

  { slug:"loaded-baked-potato-soup", title:"Loaded Baked Potato Soup", category:"Soups", serves:"6",
    summary:"Thick potato soup with bacon, cheddar, sour cream and green onions.",
    ingredients:[{items:["6 slices bacon, chopped","1 onion, diced","3 tbsp butter","⅓ cup flour","4 cups chicken broth","2 cups milk","2½ lb russet potatoes, peeled and diced","1 cup sour cream","2 cups shredded cheddar, divided","Salt and pepper, to taste","Sliced green onions, to top"]}],
    steps:["Crisp the bacon in a large pot. Remove it and set it aside.","Cook the onion in the butter and a spoonful of the bacon fat 5 minutes. Stir in the flour, then whisk in the broth and milk.","Add the potatoes and simmer 15 to 20 minutes, until soft. Mash about half of them right in the pot.","Take the pot off the heat and stir in the sour cream and 1 cup of the cheese. Season with salt and pepper.","Top each bowl with the rest of the cheese, the bacon and green onions."],
    notes:[BB,"Best eaten within a few days. Potato soups with dairy can turn grainy after freezing."] },

  { slug:"beef-and-bean-chili", title:"Beef and Bean Chili", category:"Soups", serves:"6 to 8",
    summary:"A thick, simmered beef chili with two cans of beans. Great in a bread bowl.",
    ingredients:[{items:["2 lb ground beef","1 onion, diced","1 bell pepper, diced","4 garlic cloves, minced","3 tbsp chili powder","1 tbsp ground cumin","1 tsp dried oregano","1 tsp smoked paprika","1 tsp salt","1 can (28 oz) crushed tomatoes","1 can (15 oz) tomato sauce","2 cans (15 oz each) kidney or pinto beans, drained","1 cup beef broth","Shredded cheddar and sour cream, to top"]}],
    steps:["Brown the beef in a large pot and drain the fat.","Add the onion and pepper and cook 5 minutes. Add the garlic and spices and stir 1 minute.","Stir in the tomatoes, tomato sauce, beans and broth.","Simmer uncovered 45 minutes to 1 hour, stirring now and then, until thick. Top with cheddar and sour cream."],
    notes:[BB,"Freezes very well in single portions. Reheat on the stove."] },

  { slug:"hot-spinach-artichoke-dip-bread-bowl", title:"Hot Spinach Artichoke Dip in a Bread Bowl", category:"Appetizers", serves:"10 to 12",
    summary:"Cheesy hot spinach and artichoke dip baked right inside a big round loaf, with toasted bread cubes for dipping.",
    ingredients:[{items:["8 oz cream cheese, softened","½ cup sour cream","¼ cup mayonnaise","1 cup grated Parmesan","1 cup shredded mozzarella","2 garlic cloves, minced","10 oz frozen chopped spinach, thawed and squeezed very dry","1 can (14 oz) artichoke hearts, drained and chopped","Pinch of red pepper flakes","1 large round loaf (about 1½ lb)"]}],
    steps:["Heat the oven to 350°F. Mix everything except the bread.","Cut the top off the loaf and hollow it out, leaving a wall about 1 inch thick. Cut the scooped-out bread and the lid into cubes.","Fill the loaf with the dip. Wrap the sides of the loaf in foil, leaving the top open, and set it on a sheet pan.","Bake 25 to 30 minutes, until hot and bubbly. Toast the bread cubes on another sheet pan for the last 10 minutes and serve them alongside for dipping."],
    notes:["Squeeze the spinach in a clean towel until no more water comes out, or the dip will be runny.","You can also bake the dip in a small baking dish for 20 minutes and spoon it into the hollowed loaf."] }
];
R.forEach(function(r){ r.section = "found"; r.subtitle = ""; r.credit = ""; r.tags = ["bread bowl"]; });
window.RECIPES = (window.RECIPES || []).concat(R);
})();
