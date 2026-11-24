// Grilled cheese sandwiches, with the sauces and sides that go with them. Methods written in our own words.
(function(){
const C = "";
const SC = "Sandwiches & Pizza";
const cook = (a,b,extra) => "Heat a large nonstick skillet over medium heat for 2 minutes. Add the sandwiches, cover, and cook "+a+" until the undersides are golden brown. Flip, pressing each one down with a spatula, cover, and cook "+b+" more until well browned. Flip once more, press again, and cook about 1 minute until the cheese is completely melted."+(extra?" "+extra:"")+" Let rest 5 minutes, then cut in half.";
const cookLow = "Heat a large nonstick skillet over medium-low heat for 2 minutes. Add the sandwiches, cover, and cook 5 to 6 minutes until the undersides start to brown. Flip, pressing each one very firmly a couple of times to compress the bread and filling, cover, and cook 4 to 5 minutes more until golden. Flip once more, press firmly again, and cook 1 to 2 minutes until the cheese is fully melted (peek inside one to check). Let rest 5 minutes, then cut in half.";
const std = cook("3 to 4 minutes","2 to 3 minutes");
const butterBuild = (what) => "Butter one side of each bread slice. Set 4 slices buttered side down on your work surface, add "+what+", and top with the remaining slices, buttered side up.";
const S = (slug,title,tags,summary,ing,steps,notes,serves,cat,gaps) => ({slug, section:"found", title, subtitle:"", category:cat||SC, tags:["grilled-cheese","sandwich"].concat(tags||[]), serves:serves||"4 sandwiches", credit:C, summary, ingredients:ing, steps, notes:notes||[], gaps:gaps||[]});
const R = [

S("gc-spinach-egg-manchego","Spinach, Egg, and Manchego Grilled Cheese",["eggs","spinach","breakfast"],
"A fried-egg grilled cheese: a ring of manchego and sautéed spinach around a runny yolk.",
[{items:["3 tbsp plus 1 tsp butter, divided","½ medium onion, finely chopped","8 oz baby spinach","Salt and pepper","8 sandwich-size slices sourdough (or pain au levain, Italian, or wheat)","8 oz manchego, coarsely grated (or young pecorino, Gouda, or Gruyère)","4 large eggs"]}],
["Melt 1 tbsp plus 1 tsp of the butter in a large skillet over medium heat. Cook the onion until soft, then add the spinach and cook until wilted. Season with salt and pepper and set aside.","Cut a ½-inch hole in the center of 4 bread slices. Butter one side of all the slices with the remaining butter.","Set the 4 whole slices buttered side down. Top each with some cheese and spinach. Place a holed slice on top, buttered side up, and fill the area around the hole with a ring of cheese and spinach.","Cook in a skillet over medium heat. Once the first side is golden, flip and carefully drop an egg yolk into each hole, pouring the white around it. Cover and cook until the egg is set to your liking. Let rest a couple of minutes and serve."],
["Cook the egg a little longer if you prefer a firm yolk."]),

S("gc-robiola-truffle-ciabatta","Robiola and Fontina on Ciabatta",["ciabatta","italian"],
"Creamy Robiola and fontina on ciabatta brushed with Dijon, with optional white truffle.",
[{items:["4 ciabatta rolls (or 1 loaf cut into 4 three-inch pieces)","2 tbsp butter","2 tbsp plus 2 tsp Dijon mustard","3 to 4 g fresh white truffle, shaved, or 1 tsp white truffle paste (optional)","8 oz Robiola Due Latte or Tre Latte, sliced ¼ inch thick (or Brie)","4 oz fontina, coarsely grated","Sweet Red Pepper Mostarda, for dipping (see recipe)"]}],
["Split the rolls and pinch out a little of the soft center to make a well. Butter the crust sides.","Turn the bottoms crust side down and spread each cut side with Dijon. Layer on truffle (if using), Robiola, and fontina. Close the sandwiches.","Cook over medium-low heat, covered, about 5 to 6 minutes per side, pressing firmly each time, then 1 to 2 minutes more until the cheese melts. Rest 5 minutes and serve with mostarda for dipping."],[]),

S("gc-burrata-roasted-pepper-arugula","Burrata, Roasted Pepper, and Arugula Grilled Cheese",["italian","vegetarian"],
"Creamy burrata with roasted red peppers and peppery arugula on Italian bread.",
[{items:["Olive oil","8 slices Italian bread (or sourdough or French)","8 oz burrata, quartered (or water-packed mozzarella)","4 oz jarred roasted red peppers","1½ cups lightly packed arugula","Salt","1 tbsp olive oil, for drizzling"]}],
["Brush one side of each bread slice with olive oil.","Set 4 slices oil side down. Layer on burrata and roasted peppers and season with a little salt. Top with the other slices, oil side up.","Cook in a skillet over medium heat until golden on both sides and melted inside. Open each sandwich, tuck in the arugula tossed with the olive oil drizzle and a pinch of salt, and serve."],
[],"4 sandwiches",SC,["**Burrata amount** — I couldn't read this clearly; 8 oz is a good guess. Suggestions welcome."]),

S("gc-prosciutto-broccoli-rabe-mozzarella","Prosciutto, Broccoli Rabe, and Mozzarella Grilled Cheese",["italian","prosciutto"],
"Garlicky greens and salty prosciutto with melty mozzarella.",
[{items:["8 thin slices prosciutto (about 4 oz)","¼ cup olive oil, divided","12 oz broccoli rabe (or Swiss chard or Tuscan kale), trimmed","1 tsp lemon juice","Pinch red pepper flakes","Pinch salt","8 slices Italian bread","8 oz mozzarella, grated or thinly sliced"]}],
["Crisp the prosciutto briefly in a skillet if you like, then set aside.","Blanch the broccoli rabe until tender, drain well, chop, and toss with a little of the oil, the lemon juice, pepper flakes, and salt.","Brush the bread with the remaining oil. Layer mozzarella, greens, and prosciutto between the slices, oiled sides out.",std],
[],"4 sandwiches",SC,["**Pepper flakes and salt amounts** — hard to read in the photo; the pinches here are a guess. Suggestions welcome."]),

S("gc-chorizo-cheddar-apple","Chorizo, Cheddar, and Apple Grilled Cheese",["chorizo","apple"],
"Spicy fresh chorizo with sharp cheddar, tart apple, and sweet dates on ciabatta.",
[{items:["8 oz fresh Mexican-style chorizo","8 dried dates, pitted and chopped","¼ cup chopped cocktail onions","4 large ciabatta rolls (or 1 loaf cut into 3-inch pieces)","2 tbsp olive oil","8 oz cheddar, grated","2 small tart-sweet apples, cut into 16 slices ¼ inch thick","Sweet-Tart Apple Chutney, for serving (optional)"]}],
["Brown the chorizo in a skillet, breaking it up, then drain. Stir in the dates and onions.","Split the rolls, pinch out a little of the center, and brush the crust sides with oil.","Layer cheddar, the chorizo mixture, and apple slices in the rolls.",cookLow],
[],"4 sandwiches",SC),

S("gc-camembert-ham-apple","Camembert, Black Forest Ham, and Apple Grilled Cheese",["ham","apple","french"],
"Creamy Camembert, thyme, ham, and thin tart apple on country bread.",
[{items:["2 tbsp butter, at room temperature","8 slices pain au levain","8 oz Camembert (rind on), sliced ¼ inch thick (or Brie)","1 tsp fresh thyme leaves","4 slices Black Forest ham (1 oz each)","1 large tart green apple, cut into 16 very thin slices"]}],
["Butter one side of each slice. Set 4 slices buttered side down.","Layer on the Camembert, thyme, ham, and apple. Top with the remaining slices, buttered side up.",std],[]),

S("gc-chicken-gouda-caraway-mustard","Chicken, Gouda, and Caraway Mustard Grilled Cheese",["chicken","gouda"],
"Seared chicken and onion with Gouda and a caraway-raisin mustard on ciabatta.",
[{name:"Caraway mustard",items:["2 tbsp Dijon mustard","4 tsp mayonnaise","1 tsp caraway seed","¼ cup golden raisins"]},{name:"Sandwiches",items:["2 chicken breasts (8 oz each), halved crosswise and pounded to ¼ inch","¼ cup plus 1 tbsp olive oil, divided","½ tsp salt","¼ tsp garlic powder","⅛ tsp pepper","1 medium onion, cut into ¼-inch strips","4 ciabatta rolls","8 oz Gouda, grated (or Havarti, Monterey Jack, or Swiss)"]}],
["Stir together the mustard, mayonnaise, caraway, and raisins.","Season the chicken with the salt, garlic powder, and pepper. Sear in a skillet with some of the oil until cooked through; set aside. Cook the onion in a little oil until soft.","Split the rolls, pinch out a little center, and brush the crust sides with oil. Spread mustard on the cut sides and layer on chicken, onion, and Gouda.",cookLow],
[],"4 sandwiches",SC),

S("gc-fennel-pancetta-gorgonzola","Fennel, Pancetta, and Gorgonzola Grilled Cheese",["pancetta","italian"],
"Quick-pickled fennel, crisp pancetta, orange zest, Gorgonzola, and fontina.",
[{items:["½ fennel bulb (about 8 oz), very thinly sliced","¼ cup water","3 tbsp white wine vinegar","4 slices pancetta (1½ oz each)","2 tbsp butter, at room temperature","2 tsp orange zest","8 slices Italian bread","6 oz creamy Gorgonzola (Dolce), crumbled","8 oz fontina, grated"]}],
["Let the fennel sit in the water and vinegar for at least 20 minutes, then drain well. Crisp the pancetta in a skillet and drain.","Mix the butter and orange zest and spread on one side of each bread slice.","Layer on fontina, Gorgonzola, fennel, and pancetta, then close the sandwiches buttered side out.",std],
[],"4 sandwiches",SC),

S("gc-kimchi-smoked-gouda-ham","Kimchi, Smoked Gouda, and Ham Grilled Cheese",["kimchi","ham","gouda"],
"Tangy kimchi and smoked Gouda with ham on mini baguettes.",
[{items:["4 mini baguettes or sub rolls","3 tbsp olive oil","½ cup chopped kimchi, drained","8 oz smoked Gouda, grated","4 slices Black Forest ham (1 oz each)"]}],
["Split the rolls, pinch out a little center, and brush the crust sides with oil.","Layer Gouda, ham, and kimchi in the rolls.",cookLow],
[],"4 sandwiches",SC),

S("gc-bacon-onion-potato-bread-comte","Bacon, Comté, and Cornichon Grilled Cheese",["bacon","french"],
"A tartiflette-style sandwich of bacon, onion, Comté, cornichons, and Reblochon on potato bread.",
[{items:["4 slices bacon","½ medium onion (about 4 oz), thinly sliced","Salt","8 oz Comté (or Gruyère, raclette, or Swiss), grated","8 cornichons (or 2 medium dill pickles), chopped","2 tbsp butter, at room temperature","8 slices potato bread","6 oz Reblochon (or Pont l'Évêque, Camembert, or Brie), sliced"]}],
["Cook the bacon until crisp, drain, and break in half. Cook the onion in a little of the bacon fat until soft; season with salt.","Toss the Comté with the cornichons.","Butter one side of each slice. Layer the Comté mixture, bacon, onion, and Reblochon between the bread, buttered sides out.",std],[]),

S("gc-fromage-blanc-cherry-gruyere","Cherry, Basil, and Gruyère Grilled Cheese",["fruit","vegetarian"],
"Lemony fromage blanc with basil and fresh cherries and Gruyère on olive bread.",
[{items:["¾ cup fromage blanc (or ricotta or fresh goat cheese)","¼ cup chopped basil","1 tsp lemon zest","1 cup pitted cherries, thinly sliced (or ¼ cup dried cherries, soaked 15 minutes)","2 tbsp butter, at room temperature","8 slices olive bread","8 oz Gruyère, coarsely grated"]}],
["Mix the fromage blanc, basil, and lemon zest in a small bowl.","Butter one side of each slice. Spread the cheese mixture on 4 slices, then add cherries and Gruyère. Close, buttered side out.",std],
[],"4 sandwiches",SC),

S("gc-bacon-guacamole-tortilla-chip","Bacon, Guacamole, and Tortilla Chip Grilled Cheese",["bacon","avocado"],
"Tortilla chips ground into the butter crust, with guacamole, bacon, Colby, Monterey Jack, and goat cheese.",
[{items:["4 slices bacon, cooked crisp and broken in half","8 large tortilla chips (about 2 oz)","4 tbsp butter, at room temperature","½ cup guacamole (see Simple Guacamole)","2 tbsp diced Roma tomato (skip if your guacamole already has it)","4 oz Colby, grated","4 oz Monterey Jack, grated","A little goat cheese, in small pieces","8 slices bread"]}],
["Grind the chips in a food processor to a fine sandy texture, then mix into the butter with a fork. Spread on one side of each bread slice.","Set 4 slices chip-butter side down. Spread each with 2 tbsp guacamole, scatter on the tomato, then add Colby, Monterey Jack, dots of goat cheese, and 2 bacon pieces. Top with the remaining slices, chip-butter side up.",cook("3 to 4 minutes","2 to 3 minutes","Watch carefully, because the chips in the butter can burn easily.")],
["Use a sandwich maker only if it has variable heat; otherwise the chips will burn before the cheese melts."],"4 sandwiches",SC,["**Bread type and goat cheese amount** — not in my photos; any sturdy sandwich bread works."]),

S("gc-crab-asparagus-swiss","Crab, Asparagus, and Swiss Grilled Cheese",["crab","asparagus"],
"An open-faced-style crab melt with asparagus, tarragon, chives, and Swiss.",
[{items:["½ lb asparagus, trimmed","Olive oil and salt for roasting","6 oz lump crabmeat","4 tbsp mayonnaise, divided","2 tbsp chopped fresh tarragon","2 tbsp chopped fresh chives","½ tsp lemon zest","Freshly ground black pepper","8 sandwich-size slices Italian bread (or French or sourdough)","6 oz Swiss or Emmentaler, coarsely grated"]}],
["Heat the oven to 350°F. Roast the asparagus with a little oil and salt about 7 minutes, until tender but firm. Cut off the tips and reserve; cut the stalks into ¼-inch pieces.","Mix the crab, 2 tbsp of the mayonnaise, the tarragon, chives, lemon zest, a little salt and pepper, and the chopped asparagus stalks.","Spread the remaining 2 tbsp mayonnaise on one side of each slice. Set 4 slices mayo side down, spread on the crab mixture, add the Swiss, and lay the asparagus tips on top. Close, mayo side out.",std],
["Don't use a heavy sandwich maker lid for this one; the filling will squeeze out."],"4 sandwiches",SC,["**Asparagus and crab amounts** — I couldn't read these; the amounts here are a best guess."]),

S("gc-brie-pear-blue-cheese","Brie, Pear, and Blue Cheese Butter Grilled Cheese",["pear","onion","brie"],
"Decadent: Brie and mozzarella with sautéed onion and pear on sourdough spread with blue cheese butter.",
[{items:["3 tbsp butter, divided","½ large yellow onion, halved and thinly sliced","1 medium firm pear (such as Bosc), peeled and cut into ¼-inch cubes","1 tbsp chopped fresh thyme","Salt and pepper","3 oz creamy blue cheese, at room temperature","8 sandwich-size slices sourdough","6 oz Brie, sliced ¼ inch thick","8 oz mozzarella, coarsely grated"]}],
["Cook the onion in 1 tbsp of the butter over medium heat until limp, about 5 minutes. Add the pear and thyme and cook 2 to 3 minutes. Season and set aside.","Mash the blue cheese with the remaining 2 tbsp butter and spread on one side of each bread slice.","Set 4 slices blue-butter side down. Layer on the Brie, onion-pear mixture, and mozzarella. Close, buttered side out.",cook("3 minutes","2 to 3 minutes")],
[]),

S("gc-croissant-brie-turkey","Brie, Swiss, and Smoked Turkey Croissant",["croissant","turkey"],
"Buttery croissants with rosemary aioli, sun-dried tomato, Brie, Swiss, and smoked turkey.",
[{name:"Rosemary aioli",items:["¼ cup mayonnaise","2 tbsp Dijon mustard","2 medium cloves garlic, minced","1 tsp chopped fresh rosemary","Salt"]},{name:"Sandwiches",items:["4 large croissants, halved lengthwise","¼ cup oil-packed sun-dried tomatoes, drained and chopped","6 oz Brie, rind removed, sliced","6 oz Swiss, coarsely grated","4 slices smoked turkey (1 oz each)"]}],
["Mix the aioli ingredients, with salt to taste. It keeps 30 minutes at room temperature or a day in the fridge.","Spread 2 tbsp aioli on each croissant half, then layer sun-dried tomato, Brie, Swiss, and turkey on the bottoms. Close.","Cook over medium-low heat, covered, 2 to 3 minutes per side, pressing gently, plus a final minute, until golden. Croissants burn easily, so watch closely. Rest 5 minutes and serve."],
["Regular-size croissants will make filling for more than 4 sandwiches.","The lid of a sandwich maker can be too heavy for delicate croissants."],"4 sandwiches",SC,["**Mayonnaise amount** — I couldn't read this one; ¼ cup is a guess."]),

S("gc-pizza-grilled-cheese","Pizza Grilled Cheese",["pizza","mushroom","pepperoni"],
"Mozzarella, mushrooms, pepperoni, olives, and tomato on ciabatta.",
[{items:["8 oz white or brown mushrooms, stems removed and sliced","4 tbsp olive oil, divided","Salt","4 ciabatta rolls (or 1 loaf cut into 4 three-inch pieces)","½ cup pizza sauce (not marinara; optional)","12 oz fresh mozzarella, thinly sliced (or grated if vacuum-packed)","¼ cup sliced black olives","4 oz pepperoni, sliced paper-thin","2 medium tomatoes (about 8 oz), sliced ¼ inch thick","Dried oregano","⅛ tsp red pepper flakes"]}],
["Cook the mushrooms in 2 tbsp of the oil until soft, 5 to 7 minutes, with a pinch of salt. Wipe out the pan.","Split the ciabatta, pinch out a little of the soft center, and brush the crust sides with the remaining oil.","Spread sauce on the bottoms, then add half the cheese, mushrooms, olives, and pepperoni, then the remaining cheese. Top with tomato, oregano, pepper flakes, and a pinch of salt. Spread sauce on the tops and close.",cookLow],
["With Italian bread instead of ciabatta, cook over medium heat for 3 to 4 minutes per side."]),

S("gc-hazelnut-gruyere-gorgonzola","Hazelnut, Gruyère, and Gorgonzola Grilled Cheese",["nuts","honey","italian"],
"A hazelnut spread under Gruyère and Gorgonzola, finished with honey.",
[{items:["½ cup hazelnuts, toasted (skinned if possible)","1¼ tsp vegetable oil","2 tbsp butter, at room temperature","8 sandwich-size slices Italian bread (or wheat or French)","6 oz Gruyère (or Comté, Emmentaler, or Swiss), grated","6 oz Gorgonzola Dolce","4 tsp honey (chestnut or acacia if you can)"]}],
["Process the hazelnuts in a food processor until coarsely chopped, then add the oil and process to a thick, chunky spread.","Butter one side of each slice. Set 4 slices buttered side down, spread on the hazelnut butter, then add the Gruyère, Gorgonzola, and a drizzle of honey. Close, buttered side out.",cook("2 to 3 minutes","2 to 3 minutes")],
[],"4 sandwiches",SC),

S("gc-shepherd-ham-tomato","Sheep's Milk Cheese, Ham, and Tomato Grilled Cheese",["ham","tomato"],
"Pecorino butter outside, sheep's milk cheeses, ham, and tomato inside.",
[{items:["2 oz aged pecorino, finely grated","3 tbsp butter, at room temperature","8 sandwich-size slices hearty Italian or French bread","4 oz manchego (not extra-aged), coarsely grated","4 oz Pyrenees-style sheep's milk cheese (Petit Basque, Ossau-Iraty, or Vermont Shepherd), coarsely grated","4 slices ham","8 center-cut tomato slices, ¼ inch thick","Salt"]}],
["Mash the pecorino into the butter and spread on one side of each bread slice.","Set 4 slices buttered side down. Add half of both cheeses, the ham, and tomatoes (lightly salted), then the rest of the cheese, pressing it down with your hands. Close, buttered side out.",cook("3 to 4 minutes","3 to 4 minutes","Watch closely, since pecorino butter can burn.")],
["If you can't find all the cheeses, one or two works just as well."]),

S("gc-artichoke-dip-focaccia","Artichoke Dip Grilled Cheese",["artichoke","focaccia","vegetarian"],
"All the flavors of artichoke dip, on focaccia with fontina.",
[{items:["2 jars (6 oz each) marinated artichokes, drained very well and coarsely chopped","¼ cup mayonnaise","1 tsp Worcestershire sauce","¼ tsp hot sauce, or to taste","¼ tsp garlic powder","4 scallions (white and tender green), finely chopped","2 oz Pecorino Romano, coarsely crumbled","4 four-inch-square pieces focaccia, split (or 8 slices sourdough or Italian)","8 oz fontina, coarsely grated (or Monterey Jack)"]}],
["Mix the artichokes, mayonnaise, Worcestershire, hot sauce, garlic powder, scallions, and Pecorino.","Split the focaccia and pinch out some of the center if it's thick. Spread the artichoke mixture on the bottoms, add fontina, and close.",cook("3 to 4 minutes","3 to 4 minutes","Watch the focaccia closely, because the olive oil makes it brown fast.")],
["Drain the artichokes thoroughly or the filling will be watery."],"4 sandwiches",SC),

S("gc-mushroom-camembert-comte-baguette","Mushroom, Camembert, and Comté on Baguette",["mushroom","french"],
"Shallot-thyme mushrooms with Camembert and Comté on crusty baguette.",
[{items:["4 tbsp butter, divided","1 small shallot, finely chopped (about 2 tbsp)","1 large clove garlic, minced","8 oz white or brown mushrooms, stemmed and sliced","1 tbsp sherry or red wine vinegar","2 tsp chopped fresh thyme","Salt and pepper","1 baguette, cut crosswise into 4 six-inch pieces","6 oz Camembert, sliced ¼ inch thick","8 oz Comté, coarsely grated (or Gruyère or Swiss)"]}],
["Melt 2 tbsp of the butter over medium-high heat. Cook the shallot about 5 minutes, add the garlic for 1 minute, then add the mushrooms and cook until soft, about 5 minutes. Turn the heat to high, add the vinegar, and cook until it nearly evaporates and the mushrooms start to caramelize. Stir in the thyme, season, and set aside.","Melt the remaining 2 tbsp butter. Split the baguette pieces, pinch out a little center, and brush the crust sides with butter.","Fill the bottoms with mushrooms, Camembert, and Comté and close.",cookLow],
[],"4 sandwiches",SC),

S("gc-havarti-balsamic-carrots","Havarti with Balsamic-Glazed Carrots",["carrot","vegetarian"],
"Sweet-tangy glazed carrots with creamy Havarti on rye.",
[{items:["1 tbsp olive oil","1 large carrot, cut into thin 2-inch-long matchsticks","2 tbsp balsamic vinegar","Salt and pepper","2 tbsp butter, at room temperature","8 slices rye bread (or whole-grain or Italian)","8 oz Havarti, coarsely grated"]}],
["Cook the carrots in the oil over medium-high heat, stirring, until caramelized at the edges, 5 to 7 minutes. Lower the heat, add the vinegar, salt, and pepper, cover, and cook about 5 minutes until soft. Set aside.","Butter one side of each slice. Set 4 slices buttered side down, add the carrots and Havarti, and close, buttered side out.",std],
["Leftover roast lamb or beef makes this heartier."],"4 sandwiches",SC),

S("gc-eggplant-parmesan-focaccia","Eggplant Parmesan Grilled Cheese",["eggplant","tomato jam","vegetarian"],
"Broiled eggplant with Parmesan, tomato jam, and fontina on focaccia.",
[{items:["1 globe eggplant (about 2 lb), peeled and cut crosswise into 8 slices ¼ inch thick","6 tbsp olive oil, divided","Salt and pepper","2 tsp chopped fresh oregano","2 oz Parmesan, finely grated","4 four-inch-square pieces focaccia (or Italian bread, sub rolls, or ciabatta)","6 tbsp Tomato Jam","8 oz fontina, coarsely grated"]}],
["Heat the broiler with a rack 6 inches from the element. Brush the eggplant with 2 tbsp oil, season, and broil 5 to 6 minutes. Flip, brush with 2 more tbsp oil, sprinkle with oregano and Parmesan, and broil 1 to 2 minutes more until golden. Watch closely.","Split the focaccia and brush the outsides with the remaining 2 tbsp oil. Spread jam on the insides of the bottoms, add eggplant (cut to fit), then fontina, and close.",cookLow],
[],"4 sandwiches",SC),

S("gc-pea-ricotta-pesto-fontina","Pea, Basil, and Fontina Grilled Cheese",["peas","vegetarian","spring"],
"A fresh pea and ricotta spread under fontina, with pecorino butter on the outside.",
[{name:"Pea spread",items:["½ cup fresh or frozen peas","½ cup packed fresh basil leaves","3 tbsp ricotta","3 tbsp pine nuts, lightly toasted","1 tbsp lemon juice","½ tsp salt, or more to taste","Freshly ground black pepper"]},{name:"Sandwiches",items:["1 oz pecorino, finely grated (or Parmesan)","3 tbsp butter, at room temperature","8 sandwich-size slices Italian or French bread","8 oz fontina, coarsely grated (or mozzarella)"]}],
["Boil the peas for 3 to 4 minutes until just tender, drain, and cool. Process with the basil, ricotta, pine nuts, lemon juice, salt, and pepper until smooth.","Mash the pecorino into the butter and spread on one side of each slice.","Set 4 slices buttered side down, spread each with about 2 tbsp pea mixture, add fontina, and close.",std],
["Double the pea spread and serve the extra on toasted baguette."],"4 sandwiches",SC),

S("gc-alpine-pickled-shallot-watercress","Alpine Grilled Cheese with Pickled Shallots and Watercress",["shallot","watercress","swiss"],
"Four Alpine-style melting cheeses with sharp pickled shallots and peppery watercress.",
[{name:"Pickled shallots",items:["¼ cup cider vinegar","¼ cup water","2 tbsp sugar","1 tsp salt","4 small shallots (about 6 oz), very thinly sliced"]},{name:"Sandwiches",items:["2 tbsp butter, at room temperature","8 sandwich-size slices pain au levain, sourdough, multigrain, or dark bread","1½ cups lightly packed watercress leaves (about 1 oz)","2 oz Emmentaler, coarsely grated","2 oz Gruyère, coarsely grated","2 oz Comté, coarsely grated","2 oz Pleasant Ridge Reserve, coarsely grated"]}],
["Stir the vinegar, water, sugar, and salt until dissolved. Add the shallots and let sit at least 1 hour (up to 2 days refrigerated).","Butter one side of each slice. Set 4 slices buttered side down. Drain and pat the shallots dry, scatter about 2 tbsp on each, then add watercress and the cheeses. Close, buttered side out.",std],
["If you can't find all the cheeses, use more of the ones you can find to make up the 8 oz total."]),

S("gc-welsh-rarebit-stout","Welsh Rarebit with Stout",["open-face","cheddar","beer"],
"Open-face toast under a thick cheddar-and-stout sauce, finished with bacon and tomato if you like.",
[{items:["4 slices pain au levain, toasted (or sourdough or Italian)","4 tbsp butter, divided","2 tbsp all-purpose flour","½ cup stout (such as Guinness)","1 tbsp Worcestershire sauce","1 tsp dry mustard","Pinch cayenne","8 oz cheddar, coarsely grated (orange for the full effect; or Gloucester or Cheshire)","8 slices cooked bacon (optional)","8 slices tomato, lightly salted (optional)"]}],
["Heat the broiler with a rack about 6 inches below. Toast the bread on one side, flip, butter with 2 tbsp of the butter, broil until browned, and let cool.","Melt the remaining 2 tbsp butter in a saucepan, whisk in the flour for 1 minute, then slowly whisk in the stout. When the foam subsides, whisk in the Worcestershire, mustard, and cayenne. Off the heat, stir in the cheese until smooth and creamy.","Set the toast on plates and spoon the sauce over, then top with bacon and tomato. Serve right away, or broil the open-face sandwiches 4 to 5 minutes until brown and bubbly."],
["This one isn't suited to a sandwich maker."],"4 open-face sandwiches",SC),

S("gc-serrano-ham-manchego-piquillo","Serrano Ham, Manchego, and Piquillo Pepper Grilled Cheese",["ham","spanish","paprika"],
"Smoked-paprika butter with serrano ham, Mahón and manchego, and piquillo peppers.",
[{items:["2 tbsp butter, at room temperature","¼ tsp pimentón de la Vera (smoked paprika; sweet, bittersweet, or hot)","8 slices sandwich-size Italian bread","8 thin slices serrano ham (about 3 oz; or prosciutto)","4 oz young Mahón (or fontina or Havarti), coarsely grated","4 oz manchego, coarsely grated","4 fresh piquillo chiles, stemmed, slit lengthwise, and opened (or jarred)"]}],
["Mix the butter and paprika and spread on one side of each slice.","Set 4 slices buttered side down. Lay on 2 slices ham each, then the cheeses, then the piquillos. Close, buttered side out.",std],
[],"4 sandwiches",SC),

S("gc-arepas-jack-plantain-black-bean","Arepas with Monterey Jack, Plantains, and Black Beans",["arepa","plantain","beans"],
"Cheesy corn-flour cakes split and filled with mashed black beans, sweet plantain, and Monterey Jack.",
[{name:"Arepas",items:["1 cup arepa flour (masarepa or precooked corn flour; not masa harina)","4 oz Monterey Jack, coarsely grated","¼ cup fresh or frozen corn, blanched 3 minutes","1 tsp sugar","½ tsp salt","1 cup lukewarm water","2 tsp vegetable oil"]},{name:"Filling",items:["1 ripe (almost black) plantain, sliced","1 tbsp butter","2 tsp vegetable oil","¼ cup finely chopped onion (about 2 oz)","½ cup canned black beans, drained","½ tsp ground cumin","½ tsp salt","½ tsp freshly ground black pepper","8 oz Monterey Jack, coarsely grated"]}],
["Mix the arepa flour, cheese, corn, sugar, and salt. Slowly stir in the water until the dough is moist and holds together. Cover and rest 15 minutes (add a few drops of water if dry). Divide into 4, roll into balls, and flatten into disks about 3 inches wide and ¾ inch thick.","Cook the arepas in the oil in a skillet over medium heat about 5 to 6 minutes per side, until deep golden and splotchy. Drain on paper towels.","Fry the plantain slices in the butter until caramelized and golden; drain.","Cook the onion in the vegetable oil until soft, about 5 minutes. Add the beans, cumin, salt, and pepper and cook about 5 minutes, then mash with a fork.","Split the arepas. Fill the bottoms with beans, plantain, and cheese, close, and cook in a skillet over medium-low heat, covered, until the bottoms are deep golden, then flip and cook 4 to 5 minutes until the cheese melts. Serve with a knife and fork."],
["Arepas also work with pulled pork, chicken, or just a cheese and cilantro filling.","If you can't find arepa flour, use English muffins."],"4 filled arepas",SC),

S("gc-cubano","Cubano",["pork","pressed","cuban"],
"Marinated roast pork, ham, Swiss, cornichons, and mustard, pressed hot.",
[{items:["8 oz Swiss, coarsely grated","8 cornichons, coarsely chopped","4 crusty sandwich rolls or sub rolls","4 tbsp butter, at room temperature","Yellow mustard","4 slices Cuban Pork (2 oz each; see Cuban Roast Pork)","4 slices ham, such as Black Forest (1 oz each)"]}],
["Mix the Swiss and cornichons.","Split the rolls and butter both the crust sides and insides. Layer the pork, ham, and cheese mixture on the bottoms, spread mustard on the cut sides of the tops, and close.","Cook in a skillet over medium heat, but instead of covering, weigh the sandwiches down with a heavy skillet (cast iron) or a skillet topped with a can. Cook 3 to 4 minutes, flip, weigh down again, and cook about 3 minutes until the bread is well browned. Flip once more and press again until the cheese melts."],
["The pressing is the key to a Cubano. Cuban rolls are hard to find, so sub rolls or sandwich rolls are fine."],"4 sandwiches",SC),

S("gc-cuban-roast-pork","Cuban Roast Pork",["pork","roast","marinade"],
"Citrus-garlic marinated pork shoulder for Cubanos; marinate a full day.",
[{items:["1¼ cups fresh orange juice","½ cup fresh lemon juice","½ cup fresh lime juice","½ cup olive oil","10 cloves garlic, minced","1 tbsp kosher salt","1 tbsp chopped fresh oregano","¼ tsp freshly ground black pepper","1 boneless pork shoulder (4 to 5 lb)"]}],
["Mash the garlic with the salt to a paste with a fork. Whisk together the juices, oil, oregano, and pepper.","Poke ½-inch slits all over the pork and rub with the garlic paste. Put the pork in a large plastic bag, pour in the juice mixture, and rock to coat. Set the bag in a larger bag or roasting pan to catch leaks and refrigerate 24 hours, turning occasionally.","Take the pork out of the fridge about 45 minutes before cooking and heat the oven. Place it in a roasting pan just large enough to hold it and discard the marinade. Roast about 2 hours, until an instant-read thermometer reads 155°F in the thickest part.","Rest until cool enough to slice for sandwiches, or if serving hot, cover loosely with foil and rest about 20 minutes before slicing."],
["Makes enough for about 24 sandwiches, or 6 to 8 main-dish servings."],"24 sandwiches or 6 to 8 servings","Beef, Pork & Ham",["**Citrus juice amounts and oven temperature** — hard to read; the amounts here are best guesses, and a moderate oven (around 350°F) is assumed. Suggestions welcome."]),

S("gc-spinach-feta-gouda-leek","Spinach, Feta, and Gouda Grilled Cheese",["spinach","leek","feta","vegetarian"],
"A spanakopita-style sandwich with leek, spinach, feta, and Gouda.",
[{items:["1 tbsp olive oil","1 large leek, white and light green parts only, sliced ¼ inch thick","2 small cloves garlic, minced","4 oz baby spinach (about 4 cups; or arugula)","2 oz feta, crumbled","Salt and pepper","2 tbsp butter, at room temperature","8 sandwich-size slices French bread (or sourdough or Italian)","8 oz Gouda, coarsely grated (or Havarti or Monterey Jack)"]}],
["Cook the leek in the oil over medium heat until soft and just browning, 6 to 8 minutes. Add the garlic for 1 minute, then the spinach until wilted but still bright green, about 3 minutes. Transfer to a bowl, cool slightly, and mix in the feta. Salt lightly (the feta is salty) and add pepper.","Butter one side of each slice. Set 4 slices buttered side down, add the spinach mixture and the Gouda, and close, buttered side out.",std],[]),

S("gc-monte-cristo","Monte Cristo",["french toast","ham","turkey"],
"Grilled cheese meets French toast: ham, turkey, and Swiss dipped in egg and pan-fried, with jam on the side.",
[{items:["3 large eggs","⅓ cup milk","¼ tsp salt","8 sandwich-size slices brioche, egg bread, challah, or white bread","2 tbsp yellow mustard","4 slices cooked turkey (1 oz each)","4 slices ham (1 oz each)","8 oz Emmentaler or Swiss, cut into 16 thin slices","2 tbsp butter","Confectioners' sugar, for dusting","¼ cup strawberry jam (or cherry or apricot)"]}],
["Whisk the eggs, milk, and salt in a shallow bowl large enough to hold a sandwich.","Spread mustard on one side of each slice. Layer cheese, turkey, cheese, and ham on 4 slices, finish with cheese, and close. (The cheese is sliced rather than grated so it doesn't wash into the egg. The bread is not buttered.)","Melt the butter in a large nonstick skillet over medium heat. Dip each sandwich in the egg, turning to coat both sides, then cook, covered, 3 to 4 minutes per side until golden. Watch closely, because the delicate bread burns easily. Flip once more for 1 to 2 minutes until the cheese melts. Let stand 5 minutes, dust with confectioners' sugar, cut diagonally, and serve with jam."],
["Not for a sandwich maker."],"4 sandwiches",SC),

S("gc-double-cheddar-tomato-jam","Double Cheddar and Tomato Jam Grilled Cheese",["cheddar","tomato"],
"Cheddar inside and out, with sweet-savory tomato jam. Tastes like grilled cheese and tomato soup in one.",
[{items:["12 oz cheddar cheese","4 tbsp butter, at room temperature","8 sandwich-size slices sourdough bread","6 tbsp Tomato Jam"]}],
["Finely grate 6 oz of the cheddar on the small holes of a box grater. Mash it into the butter with a fork until well mixed. Coarsely grate the remaining cheddar.","Spread the cheddar butter on one side of each slice. Set 4 slices butter side down, spread each with 1½ tbsp jam, add the cheese, and close, butter side out.",std],[]),

S("gc-provencal","Provençal-Style Grilled Cheese",["herbs","monterey jack","vegetarian"],
"Monterey Jack tossed with herbes de Provence and tomato on country bread.",
[{items:["8 oz Monterey Jack, coarsely grated","2 tsp herbes de Provence (or equal parts dried thyme, lavender, fennel seed, and basil)","2 tbsp butter, at room temperature","8 sandwich-size slices pain au levain (or sourdough)","1 large tomato, cut into 8 slices ¼ inch thick","Salt"]}],
["Mix the cheese and herbs in a small bowl.","Butter one side of each slice. Set 4 slices buttered side down, add half the cheese, then the tomato slices, lightly salted, then the remaining cheese. Close, buttered side out.",cook("2 to 3 minutes","2 to 3 minutes")],[]),

S("gc-hog-island","Triple Cheese Grilled Cheese with Fromage Blanc",["fromage blanc","cheddar","gruyere"],
"Fromage blanc, Gruyère, cheddar, and Havarti on sourdough. Keep napkins handy.",
[{items:["2 tbsp butter, at room temperature","8 sandwich-size slices pain au levain (or sourdough)","4 oz fromage blanc","4 oz Gruyère (or Comté or Swiss), coarsely grated","4 oz cheddar, coarsely grated","4 oz Havarti, coarsely grated"]}],
["Butter one side of each slice. Set 4 slices buttered side down and spread each with fromage blanc.","Layer on the Gruyère, cheddar, and Havarti, pressing with your hand to compress. Close, buttered side out.",cook("3 to 5 minutes","3 to 4 minutes")],[]),

S("gc-classic-onion-bacon-tomato","Cheddar, Bacon, and Tomato Grilled Cheese",["bacon","cheddar","tomato"],
"A classic with crisp raw red onion, bacon, tomato, and cheddar on sourdough.",
[{items:["½ small red onion (about 4 oz), very thinly sliced","8 slices bacon","2 tbsp butter, at room temperature","8 sandwich-size slices sourdough","8 oz cheddar, coarsely grated","8 center-cut tomato slices (¼ inch thick, from 1 large or 2 medium)","Salt"]}],
["Soak the onion slices in a bowl of very cold water for 15 minutes to an hour, then drain and pat dry. This mellows them and keeps them crisp.","Cook the bacon until crisp and drain.","Butter one side of each slice. Set 4 slices buttered side down, add the onion, half the cheese, the tomato (lightly salted), 2 strips of bacon, and the remaining cheese. Close, buttered side out.",std],[]),

S("gc-spicy-sweet-goat-cheese-melt","Spicy, Crunchy, Sweet Goat Cheese Melt",["goat cheese","apricot","walnut"],
"Goat cheese with dried apricots, honey, thyme, and crushed green peppercorns on walnut bread. Cut into small squares for an appetizer.",
[{items:["1 tbsp green peppercorns (dry, not brined; or black peppercorns)","8 oz goat cheese, at room temperature","1 tbsp plus 1 tsp milk, plus more if needed","2 oz dried apricots, finely chopped","2 tsp honey","1 tsp chopped fresh thyme","8 sandwich-size slices walnut bread (or multigrain or olive bread)","2 tbsp olive oil"]}],
["Put the peppercorns in a sturdy plastic bag and crack them with a meat mallet or heavy pan (coarse pieces, not powder).","Mix the goat cheese and milk until smooth and creamy, adding more milk a teaspoon at a time if stiff. Stir in the apricots, honey, peppercorns, and thyme.","Brush one side of each slice with olive oil. Spread the goat cheese mixture on 4 slices (oiled side down), close, oiled side out, and cook in a skillet over medium heat until golden and warm through, about 3 minutes per side."],
["Cut each sandwich into small squares for a party plate."],"4 sandwiches",SC,["**Cooking time, and the milk and goat cheese amounts** — partly hard to read; best guesses."]),

S("gc-jalapeno-popper","Jalapeño Popper Grilled Cheese",["bacon","jalapeno","goat cheese"],
"Bacon, goat cheese, and Monterey Jack with a sweet-hot apricot jalapeño relish.",
[{items:["8 slices bacon","2 tbsp butter, at room temperature","8 slices pain au levain (or Italian or sourdough)","3 oz fresh goat cheese, at room temperature","8 tbsp Apricot Jalapeño Relish","8 oz Monterey Jack, coarsely grated"]}],
["Cook the bacon until crisp, drain, and break each piece in half. Wipe out the skillet.","Butter one side of each slice and set all 8 buttered side down. Spread goat cheese on 4 slices and relish on the other 4. Pile the Monterey Jack on the relish slices, add the bacon, and top with the goat cheese slices, goat cheese side down.",std],[]),

S("gc-apricot-jalapeno-relish","Apricot Jalapeño Relish",["jalapeno","apricot","relish"],
"Sweet, hot, and gingery. Make it a day ahead.",
[{items:["4 oz dried California apricots, finely chopped","¼ cup finely chopped white onion (3 oz)","1 large or 2 small fresh jalapeños, seeded and minced","1 serrano chile, seeded and minced","¼ tsp minced habanero (optional, if you want more heat)","1 tbsp minced fresh ginger","1½ tsp lime juice","½ tsp dry mustard","1½ tsp apple cider vinegar","¼ tsp salt"]}],
["Mix everything in a medium bowl and let sit at least 1 hour, or overnight in the fridge."],
["Adjust the chiles to taste. The cheese and bacon in the sandwich tone the heat down, so make it a little hotter than you'd eat on its own."],"About ½ cup","Jams, Pickles & Relishes"),

S("gc-fig-apple-brie-caramelized-onion","Fig, Apple, Brie, and Caramelized Onion Grilled Cheese",["brie","fig","apple","onion"],
"Fig jam, tart apple, three melting cheeses, beer-caramelized onions, and Brie on real sourdough.",
[{name:"Fig jam",items:["8 dried figs (about 2½ oz), stems removed","6 oz apple or currant jelly"]},{name:"Caramelized onions",items:["1 tbsp butter","1 large onion, thinly sliced lengthwise","6 oz light-bodied beer (such as lager)","Salt and pepper"]},{name:"Sandwiches",items:["4 oz Gouda, coarsely grated","4 oz Monterey Jack, coarsely grated","3 oz Asiago, coarsely grated","2 tbsp butter, at room temperature","8 slices real sourdough bread","1 large or 2 small Granny Smith apples, cored and cut into 16 slices ¼ inch thick","8 oz double-cream Brie, sliced ¼ inch thick"]}],
["For the fig jam, process the figs and jelly in a food processor until smooth. It keeps a week in the fridge.","Cook the onion in 1 tbsp butter over medium-high heat, stirring, until deep golden, 8 to 10 minutes. Add the beer and stir until it cooks away. Season and set aside. Wipe out the skillet.","Mix the Gouda, Monterey Jack, and Asiago.","Butter one side of each slice. Set 4 slices buttered side down, spread each with 1½ tbsp jam, then add apple slices and the mixed cheeses, pressing down firmly. Top with onions and Brie and close, buttered side out.",std],
["Use real sourdough, not soft white 'sourdough' lunch bread."]),

S("gc-brie-raspberry-mascarpone-chocolate","Brie, Raspberry, Mascarpone, and Chocolate Grilled Cheese",["sweet","dessert","brie","chocolate"],
"The one sweet sandwich: raspberry mascarpone, Brie, and chocolate chips on egg bread.",
[{items:["6 oz mascarpone","2 tbsp raspberry preserves","2 tbsp butter, at room temperature","8 sandwich-size slices egg bread, challah, or brioche","8 oz Brie, sliced ¼ inch thick","⅓ cup regular or mini semisweet chocolate chips"]}],
["Mix the mascarpone and preserves.","Butter one side of each slice. Set 4 slices buttered side down, spread on the mascarpone mixture, lay on the Brie, and sprinkle with chocolate chips. Close, buttered side out.",cook("2 to 3 minutes","2 to 3 minutes")],
["The filling is too creamy for a sandwich maker; it will ooze out."],"4 sandwiches","Puddings & Desserts"),

S("gc-harvest-melt-squash-leek","Harvest Melt: Butternut Squash, Leek, and Gruyère",["squash","leek","vegetarian","fall"],
"Roasted butternut squash and leeks with Gruyère, balsamic syrup, and a drizzle of agave.",
[{items:["1 small butternut squash (with a long thin neck)","Olive oil, for brushing","3 tbsp butter, divided","2 medium leeks, white and light green parts only, sliced ¼ inch thick","½ tsp chopped fresh thyme","Salt and pepper","2 tsp balsamic syrup","8 slices whole-grain bread","8 oz Gruyère, coarsely grated (or Comté or Swiss)","1 tbsp agave nectar"]}],
["Heat the oven to 400°F. Peel the squash and cut the neck into 8 slices about ¼ inch thick (cut wider slices in half if needed). Brush with oil and roast 15 to 20 minutes, turning halfway, until starting to brown.","Cook the leeks in 1 tbsp of the butter over medium-high heat until soft and just browning, 8 to 10 minutes. Stir in the thyme, salt, and pepper and set aside.","Brush both sides of the squash with the balsamic syrup.","Butter one side of each slice with the remaining 2 tbsp butter. Set 4 slices buttered side down, add 2 squash slices each, half the cheese, the leeks, then the rest of the cheese. Drizzle with agave, close, buttered side out.",std],
["Balsamic syrup is sold near the balsamic vinegar."],"4 sandwiches",SC),

S("gc-caprese-feta-salsa-verde","Mozzarella, Tomato, and Feta Salsa Verde Panini",["tomato","mozzarella","herbs","vegetarian"],
"Fresh mozzarella and heirloom tomato with a punchy feta salsa verde on crusty rolls.",
[{name:"Feta salsa verde",items:["½ cup packed fresh Italian parsley leaves, finely chopped","1 small shallot, finely chopped (about 2 tbsp)","2 scallions, finely chopped","1 tbsp capers, rinsed, drained, and chopped","1 anchovy fillet, minced (optional)","¼ tsp red pepper flakes","4 tbsp olive oil","2 tsp finely grated lemon zest","2 tbsp lemon juice","2 tsp red wine vinegar","2 oz feta, crumbled","Salt and pepper"]},{name:"Sandwiches",items:["4 sandwich rolls","8 oz fresh mozzarella, sliced ¼ inch thick","8 slices heirloom or beefsteak tomato (¼ inch thick)","Salt and pepper","Olive oil, for brushing"]}],
["Mix the parsley, shallot, scallions, capers, anchovy, and pepper flakes. Stir in the oil, lemon zest, lemon juice, and vinegar, then the feta. Season with salt and pepper (the feta is salty). Add a little more oil if too dry. It should be runny enough to spread but thick enough to stay put.","Split the rolls, set the bottoms cut side up, and brush the outsides of all the roll halves with oil. Spread about 2 tbsp salsa verde on each cut side, then add mozzarella and tomato, seasoned with salt and pepper. Close.",cookLow],
["Make sure the parsley is completely dry before chopping.","You can swap the herb, pickled item, or acid to suit what you have, and add Dijon if you like it thicker."],"4 sandwiches",SC),

S("gc-cheeseburger-grilled-cheese-buns","Cheeseburger with Grilled Cheese Buns",["burger","beef","american cheese"],
"A cheeseburger served between two grilled cheese sandwiches in place of the bun.",
[{items:["1 lb ground beef","Salt and pepper","1 small sweet onion (Walla Walla or Vidalia), thinly sliced","8 slices soft white bread","Butter, at room temperature","8 slices American cheese","4 dill pickles, cut into 5 lengthwise strips each (or sandwich slices)","8 slices Colby-Jack (about 6 oz)","1 tbsp plus 1 tsp ketchup","1 tbsp plus 1 tsp ballpark-style mustard","8 iceberg lettuce leaves","1 large tomato, cut into 8 slices"]}],
["Mix the beef with salt and pepper and form 4 fairly thin patties. Cook the onions in a skillet until soft but not brown, then set aside.","Butter one side of each bread slice. Make 4 grilled cheese sandwiches: two with American cheese and pickles (two slices of cheese per sandwich), and two with Colby-Jack, then cook them until golden and melted (keep warm in a low oven).","Heat a skillet or griddle over medium-high heat, cook the patties about 6 minutes until the edges brown, flip, and cook 4 to 5 more minutes for medium-rare or 6 to 7 for medium-well.","Use the grilled cheese sandwiches as the bun: ketchup on the American cheese ones, mustard on the Colby-Jack ones. Top with the patty, lettuce, and tomato, and close."],
["Use soft, airy white bread so it compresses and doesn't overpower the burger."],"4 burgers",SC,["**Exact sandwich assembly and amounts** — partly hard to read from the photos; best guesses. Suggestions welcome."]),

S("gc-pimento-cheese-brioche","Pimento Cheese Grilled Cheese",["pimento cheese","southern","vegetarian"],
"Homemade pimento cheese with celery on buttery brioche.",
[{items:["¾ cup Pimento Cheese (see below)","¼ cup finely chopped celery","2 tbsp butter, at room temperature","8 slices brioche (or egg bread or challah)"]}],
["Mix the pimento cheese and celery.","Butter one side of each slice. Set 4 slices buttered side down, spread on the cheese mixture, and close, buttered side out.","Cook in a skillet over medium-low heat, covered, until golden on both sides and heated through."],
[],"4 sandwiches",SC),

S("gc-pimento-cheese","Pimento Cheese",["pimento cheese","southern","spread"],
"Sharp cheddar spread with pickle brine and hot sauce. Great on celery or crackers.",
[{items:["1 tsp finely chopped garlic","6 tbsp mayonnaise","2 tbsp dill pickle brine","1½ tsp Dijon mustard","1 tsp Frank's RedHot (or your favorite hot sauce)","½ tsp salt","¼ tsp freshly ground black pepper","½ cup finely chopped red bell pepper (or jarred pimentos, drained)","1 lb aged cheddar, finely grated"]}],
["Mix the garlic, mayonnaise, pickle brine, mustard, hot sauce, salt, and pepper. Stir in the red pepper and cheddar until well combined."],
["Makes more than you need for the sandwiches. Serve the rest with celery sticks or crackers; it keeps in the fridge."],"About 3 cups","Appetizers & Dips"),

S("gc-philly-cheesesteak","Philly Cheesesteak Grilled Cheese",["steak","provolone","peppers"],
"Skirt steak with peppers, onion, and mushrooms and melty provolone in a crusty roll.",
[{items:["12 oz skirt steak","½ tsp salt","¼ tsp pepper","¼ tsp garlic powder","¼ cup olive oil, divided","1 medium onion, sliced ¼ inch thick","1 medium red bell pepper, seeded and sliced ¼ inch thick","8 oz white or brown mushrooms, stemmed and sliced","2 cloves garlic, minced","4 mini baguettes, sub rolls, or crusty Italian rolls, split","8 oz medium-sharp provolone, coarsely grated"]}],
["Freeze the steak for 10 minutes to make slicing easier, then slice against the grain very thin. Toss with the salt, pepper, and garlic powder.","Cook the onion and pepper in 2 tbsp of the oil until soft, about 5 minutes. Add the mushrooms for 2 minutes, then the garlic, and cook about 3 minutes more until the mushrooms soften and darken. Set aside and wipe out the skillet.","Cook the meat in the skillet over medium heat, stirring, about 5 minutes until no longer pink (less if you like it rarer).","Pinch the soft centers out of the rolls to make a well, and brush the crust sides with the remaining oil. Fill the bottoms with meat, the onion mixture, and cheese and close.",cookLow],
[],"4 sandwiches",SC),

S("gc-chipotle-goat-cheese-cinnamon-raisin","Chipotle Goat Cheese on Cinnamon-Raisin Bread",["goat cheese","chipotle","almond"],
"Smoky chipotle goat cheese and Monterey Jack on cinnamon-raisin bread with an almond crust.",
[{items:["4 oz Humboldt Fog (or any bloomy-rind or fresh goat cheese), at room temperature","1 canned chipotle in adobo, finely chopped","3 tbsp butter, at room temperature","8 slices cinnamon-raisin bread","2 tbsp plus 2 tsp sliced almonds","8 oz Monterey Jack, coarsely grated"]}],
["Mash the goat cheese and chipotle together.","Butter one side of each slice and gently press almonds into the butter. Set 4 slices almond side down, spread with the goat cheese mixture, add the Monterey Jack, and close, almond side out.",cook("2 to 3 minutes","2 to 3 minutes")],[]),

S("gc-vermont-maple-goat-cheese","Vermont Cheddar, Maple, and Goat Cheese Grilled Cheese",["maple","cheddar","walnut"],
"Maple-sweetened goat cheese with Vermont cheddar and a sheep's milk cheese on walnut bread.",
[{items:["2 oz goat cheese, at room temperature","2 tsp maple syrup","2 tbsp butter, at room temperature","8 sandwich-size slices walnut bread (or country white or wheat)","4 oz Vermont cheddar, coarsely grated","4 oz Vermont Shepherd (or Petit Basque, Ossau-Iraty, or another mountain-style sheep's milk cheese), coarsely grated"]}],
["Mix the goat cheese and maple syrup.","Butter one side of each slice. Set 4 slices buttered side down, spread on the goat cheese mixture, add both cheeses, and close, buttered side out.",std],[]),

S("gc-wisconsin-cranberry-blue-colby","Colby, Blue Cheese, and Cranberry Grilled Cheese",["cranberry","blue cheese","mustard"],
"Cranberry-mustard with Colby and blue cheese on dark rye.",
[{items:["¼ cup cranberry sauce","4 tsp Dijon mustard","2 tbsp butter, at room temperature","8 sandwich-size slices dark rye or marble bread","8 oz Colby (or Colby-Jack or cheddar), coarsely grated","2 oz blue cheese, coarsely crumbled"]}],
["Mix the cranberry sauce and mustard.","Butter one side of each slice. Set 4 slices buttered side down, spread on the cranberry mixture, add the Colby, and crumble the blue cheese over it. Close, buttered side out.",std],
[],"4 sandwiches",SC),

S("gc-potato-chip-pickle-american","American Cheese, Pickle, and Potato Chip Grilled Cheese",["childhood","pickle","american cheese"],
"Crunchy potato chips and dill pickle between American cheese. A childhood favorite.",
[{items:["2 tbsp butter, at room temperature","8 slices white bread","2 tbsp mayonnaise","8 slices American cheese (1 oz each)","8 medium dill pickles, sliced lengthwise into thirds","2 oz potato chips"]}],
["Butter one side of each slice and spread mayonnaise on the other.","Set 4 slices buttered side down. Add a cheese slice, pickles, a few chips, and a second cheese slice. Close, buttered side out, and lightly crush with a spatula as you cook.","Cook in a skillet over medium heat, covered, about 5 minutes per side until golden and melted."],
[],"4 sandwiches",SC),

S("gc-banana-aged-gouda-open-face","Banana and Aged Gouda Open-Face Melt",["banana","gouda","open-face","breakfast"],
"Open-face toast with banana and aged Gouda, with a crackly brown-sugar topping. Good for breakfast or dessert.",
[{items:["1 tbsp butter, at room temperature","4 slices country white or wheat bread","1½ bananas, peeled and sliced ¼ inch thick","8 oz aged Gouda, coarsely grated","2 tsp brown sugar"]}],
["Heat the broiler with a rack 6 inches below. Butter one side of each slice, set on a baking sheet buttered side up, and toast on that side. Flip.","Cover the bread with banana slices, then pile on the cheese, pressing it down so it doesn't fall off. Crumble the brown sugar over the cheese.","Broil about 5 minutes until the cheese is golden and bubbly. Let cool a few minutes and serve."],
["Not for a sandwich maker."],"4 open-face sandwiches",SC),

S("gc-toast-hawaii-ham-pineapple","Ham and Pineapple Open-Face Melt",["ham","pineapple","open-face"],
"A German-style open-face toast: ham, pineapple, and melted Swiss.",
[{items:["8 slices egg bread (or challah or brioche)","2 tbsp butter, at room temperature","4 slices ham (1 oz each)","4 slices fresh or canned pineapple (½ inch thick), drained","4 maraschino cherries (optional)","8 oz Swiss, coarsely grated (or Gruyère)"]}],
["Heat the broiler with a rack below the element. Set the bread on a baking sheet, spread with butter, and toast one side, watching closely because egg bread burns easily. Flip and let cool slightly.","Layer ham on 4 slices, then a pineapple ring with a cherry in the hole, and top with cheese. (Use the other slices for extra toast or make a second round.) Broil 4 to 5 minutes until brown and bubbly. Serve right away."],
["Not for a sandwich maker."],"4 open-face sandwiches",SC,["**Number of bread slices used** — the recipe lists 8 slices but the open-face layering uses 4; I'm not certain how the book intended the rest."]),

S("gc-peanut-butter-bologna","Peanut Butter, Bologna, and Colby Grilled Cheese",["bologna","peanut butter","nostalgia"],
"An old favorite: seared bologna, peanut butter, Colby, and dill pickle on whole wheat.",
[{items:["4 slices bologna","8 slices whole wheat bread","2 tbsp mayonnaise","¼ cup crunchy peanut butter","8 oz Colby (or mild cheddar), coarsely grated","4 medium kosher dill pickles, cut into thirds lengthwise"]}],
["Cut a small slit in the middle of each bologna slice to keep it from curling. Cook in a skillet over medium heat, about 3 minutes per side, until browned. Cool and wipe out the skillet.","Spread mayonnaise on one side of each bread slice. Set 4 slices mayo side down, spread each with 2 tbsp peanut butter, then add a bologna slice, cheese, and pickles. Close, mayo side out.",std],
[],"4 sandwiches",SC),

S("gc-pickled-cucumbers","Quick Pickled Cucumbers",["pickle","cucumber","side"],
"Refreshing quick pickles to cut the richness of a grilled cheese.",
[{items:["¼ cup cider vinegar","¼ cup water","2 tbsp sugar","1 tsp salt","1 tsp finely chopped fresh dill (optional)","1 English cucumber, peeled and sliced ⅛ to ¼ inch thick"]}],
["Stir the vinegar, water, sugar, salt, and dill together. Add the cucumbers and stir to coat. Let sit 15 minutes to 2 hours. Drain well before putting on a sandwich so it doesn't go soggy."],
["Keeps up to 3 days refrigerated. Bring to room temperature before using."],"1 cucumber","Jams, Pickles & Relishes"),

S("gc-grilled-tomato-soup","Grilled Tomato Soup",["soup","tomato","side"],
"Broiled, charred tomatoes make a sweeter, deeper tomato soup. Perfect with a grilled cheese.",
[{items:["3 lb Roma tomatoes, cored and halved lengthwise","2 tbsp olive oil","Salt and freshly ground black pepper","4 tbsp butter, divided","1 large onion, coarsely chopped","2 cloves garlic, coarsely chopped","2 tbsp tomato paste","2 sprigs thyme (3 inches each)","2 small sprigs basil","½ cup vegetable or chicken stock or water, plus more as needed"]}],
["Heat the broiler with a rack about 6 inches below. Put the tomatoes cut side up on a rimmed baking sheet, drizzle with the oil, season, and broil 8 to 10 minutes until bubbly, charred, and somewhat sunken.","Meanwhile, cook the onion in 2 tbsp of the butter over medium heat until limp, 5 to 6 minutes. Add the garlic and stir until softened.","Add the tomatoes with their juice, the tomato paste, thyme, and basil. Cook 5 minutes, breaking up the tomatoes with a spoon. Remove the herbs.","Transfer to a food processor with the stock and remaining 2 tbsp butter and process until smooth. Season to taste, and thin with more stock or water 2 tbsp at a time if too thick."],
["Makes 4 to 5 cups, depending on how much liquid you add."],"4 to 5 cups","Soups & Stews"),

S("gc-fried-dill-pickles","Crispy Fried Pickle Chips",["pickle","fried","appetizer"],
"Light, crisp battered dill pickle chips.",
[{items:["½ cup cake flour (or instant flour such as Wondra)","2 tbsp cornstarch","1¼ tsp baking powder","¼ tsp salt","½ cup cold sparkling water, plus more if needed","Vegetable oil, for frying","1 cup dill pickle chips, drained and patted dry"]}],
["Whisk the flour, cornstarch, baking powder, and salt. Slowly whisk in the sparkling water until smooth, like pancake batter (add a little more if too thick). Chill until ready to cook.","Line a rimmed baking sheet with paper towels and set a wire rack over it. Pour oil into a deep heavy skillet to ½ inch deep and heat over medium-high until shimmering. A pinch of flour should sizzle right away and slowly brown.","Coat the pickle chips lightly in batter, letting the excess drip off. Fry a few at a time, turning once, until golden brown, about 2 minutes per side. Drain on the rack and serve warm."],
["Cake flour gives a lighter, airier coating."],"A snack for 2 to 4","Appetizers & Dips"),

S("gc-sweet-pepper-mostarda","Sweet Red Pepper Mostarda",["mostarda","pepper","condiment"],
"Sweet-tangy red pepper preserve. Great with cheese, charcuterie, or grilled chicken or pork.",
[{items:["1¼ cups sugar, divided","1 package (1.75 oz) fruit pectin","1 lb red bell peppers, seeded and coarsely chopped","¼ cup cider vinegar","¼ tsp red pepper flakes","¼ tsp kosher salt","¼ cup lemon juice (from about 1 large lemon)"]}],
["Whisk ¼ cup of the sugar with the pectin and set aside.","Process the peppers in a food processor until finely chopped. Transfer to a saucepan with the vinegar, pepper flakes, and salt. Bring to a boil, then simmer 10 minutes, stirring occasionally.","Add the lemon juice and the remaining 1 cup sugar and stir until dissolved. Bring to a boil again, whisk in the sugar-pectin mixture, and stir constantly 1 minute. Remove from the heat, pour into a bowl, and cool completely."],
["Keeps up to a month in a clean jar in the fridge."],"About 2 cups","Jams, Pickles & Relishes"),

S("gc-apple-raisin-chutney","Sweet-Tart Apple Chutney",["chutney","apple","condiment"],
"Apples, onion, and raisins simmered in vinegar and brown sugar. Good with pork or grilled cheese.",
[{items:["1 cup apple cider vinegar","1 cup packed light brown sugar, plus more to taste","1 lb Granny Smith apples, peeled, cored, and diced","1 large yellow onion, coarsely chopped","½ cup golden raisins","2 cloves garlic, minced","Zest of 1 lemon","2 tbsp lemon juice","¼ tsp red pepper flakes, or more to taste","¼ tsp yellow mustard seed","Pinch of salt"]}],
["Combine the vinegar and brown sugar in a heavy saucepan, bring to a boil, and cook until reduced by about a third, 5 to 10 minutes.","Add everything else, stir, turn the heat to low, and simmer about 55 minutes, stirring occasionally, until most of the liquid is gone, the apples are soft, and the vinegar has mellowed. Add a little brown sugar if you need more sweet-sour balance. It should be thick."],
["Let sit at least 2 hours at room temperature, or refrigerate up to 2 weeks and bring to room temperature to serve.","If it seems dry as it cooks, add water 2 tbsp at a time; if too moist, set the lid slightly ajar."],"About 2 cups","Jams, Pickles & Relishes"),

S("gc-tomato-jam","Tomato Jam",["tomato","jam","condiment"],
"Slow-cooked tomato jam for grilled cheese, eggplant, or cheese boards.",
[{items:["6 large ripe tomatoes (about 3 lb), peeled, seeded, and coarsely chopped (Roma if not in season)","1 clove garlic, finely chopped","¼ cup red wine vinegar","2½ tbsp sugar (1 to 2 tsp less if tomatoes are very sweet)","Salt"]}],
["Combine everything in a medium saucepan over medium-low heat. Let it bubble very gently, without a full boil, for about 1 hour, until thickened and most of the liquid has evaporated. Cool. Refrigerate up to 1 week."],
["Makes more than you need for one batch of sandwiches. Use the extra on more sandwiches or with cheese."],"About 1 cup","Jams, Pickles & Relishes"),

S("gc-simple-guacamole","Simple Guacamole",["avocado","dip","side"],
"A chunky, well-balanced guacamole.",
[{items:["2 ripe avocados","1 tbsp lime juice (from about 1 lime)","Salt","2 tbsp finely diced white onion","2 tbsp finely chopped fresh cilantro","½ fresh serrano chile, minced (optional)","1 tbsp cored, seeded, and diced Roma tomato"]}],
["Halve and pit the avocados. Mash the flesh with the lime juice and a pinch of salt using a potato masher or fork (not a blender), keeping it a little chunky.","Stir in the onion, cilantro, chile, and tomato. Let sit about 15 minutes so the flavors blend."],
["Makes more than the sandwiches need. Serve the rest with chips."],"About 1½ cups","Appetizers & Dips")
];
R.forEach(function(r){ r.grilled = true; });
window.RECIPES = (window.RECIPES||[]).concat(R);
})();
