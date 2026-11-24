/* Simply 5 Cookbook: tips, guides and reference pages (condensed, own wording). */
(function(){
const C="";
function g(slug,title,page,summary,sections,notes){
  return {slug,section:"found",guide:true,title,subtitle:"",category:"Tips & Guides",tags:["guide","tips"],serves:"",credit:C,summary,ingredients:[],steps:[],notes:notes||[],sections};
}
const R=[
g("s5-cooking-whole-grains","Cooking Whole Grains","p. 161",
 "Liquid, time, and yield for 1 cup of each grain. Put the grain in a pot with the water, bring to a boil, then simmer covered until tender, adding a bit more liquid if needed or pouring off any excess.",
 [{heading:"Per 1 cup of grain (liquid / time / yield)",items:[
  "Amaranth: 2 cups / 25 minutes / 3½ cups",
  "Barley, pearl: 3 cups / 50 minutes / 3½ cups",
  "Buckwheat (kasha): 2 cups / 20 minutes / 4 cups",
  "Bulgur: 2 cups / 10 minutes soaking / 3 cups",
  "Couscous, whole wheat: 2 cups / 10 minutes soaking / 4 cups",
  "Kamut: 2½ cups / 1½ hours / 2½ cups",
  "Millet: 2½ cups / 30 minutes / 4 cups",
  "Oats, steel-cut: 4 cups / 20 minutes / 4 cups",
  "Quinoa: 2 cups / 12 minutes / 3 cups",
  "Rice, brown (long grain): 2½ cups / 30 minutes / 3 cups",
  "Rice, brown basmati: 2 cups / 45 minutes / 4 cups",
  "Rice, brown jasmine: 2 cups / 45 minutes / 4 cups",
  "Sorghum: 4 cups / 30 minutes / 3 cups",
  "Spelt: 4 cups / soak overnight, cook 50 minutes / 3 cups",
  "Teff: 3 cups / 15 minutes / 3 cups",
  "Wheat berries: 4 cups / soak overnight, cook 50 minutes / 3 cups",
  "Wild rice, native: 2½ cups / 50 minutes / 4 cups",
  "Wild rice, cultivated: 2½ cups / 1 hour / 4 cups"]}],
 []),
g("s5-whole-grain-tips","Whole Grain Tips and Tricks","p. 162",
 "How to spot a true whole grain and get better results cooking grains.",
 [{heading:"What counts as whole grain",items:[
  "A whole grain keeps all three parts of the kernel: the bran (fiber and antioxidants), the endosperm (starch and protein), and the germ.",
  "Look for the 100% Whole Grain stamp on packages. A separate stamp marks products with at least 50% whole grain, and a plain Whole Grain label means less than 50%.",
  "Key words that signal 100% whole grain: whole grain, whole wheat, whole plus the grain's name, stoneground whole, brown rice, oats, old-fashioned, rolled, quick-cook or instant oatmeal, wheat berries."]},
  {heading:"Tips",items:[
  "Cook a double or triple batch and refrigerate in a covered container for up to 4 days. Reheat with a splash of water in the microwave or a saucepan, or let it sit on the counter.",
  "Short on time? Use shelf-stable precooked brown rice or frozen precooked farro.",
  "Cooking time depends on the grain's freshness, the type of grain, and the pot."]},
  {heading:"Tricks",items:[
  "Soaking grains in cold water for several hours or overnight shortens cooking time. Add a bit more water if needed after soaking.",
  "For more flavor, cook chopped onion (and garlic) in a little oil first, then toast the grain until softened before adding the liquid. Broth or a broth and water mix adds flavor too.",
  "If a grain starts to stick, take the pot off the heat, add a little water, cover and let stand about 5 minutes, then stir from the bottom with a wooden spoon or silicone spatula."]}],
 []),
g("s5-choosing-ingredients","Choosing Ingredients","Introduction",
 "Shopping advice for eating more healthfully.",
 [{heading:"Advice",items:[
  "Lean meats and poultry: buy lean cuts and trim visible fat before cooking. Remove poultry skin before eating. Nutrition numbers assume cooked, skinless, boneless, trimmed portions unless stated.",
  "Seafood: choose sustainable options. Guides are available from the Environmental Defense Fund (seafood.edf.org), Monterey Bay Aquarium (seafoodwatch.org), and the Safina Center (safinacenter.org).",
  "Produce: buy fresh, local, in-season fruit and vegetables for the best flavor, nutrients, and price. Rinse well and keep cut-up veggies and fruit in the fridge for snacks.",
  "Whole grains: look for whole wheat and whole-grain breads and pastas, brown rice, bulgur, barley, cornmeal, whole wheat couscous, oats, farro, and quinoa."]}],
 ["Only the right-hand column of this page was in the photo; the left column (about the ZeroPoint foods and nutrition information) wasn't captured."]),
g("s5-stock-a-healthy-pantry","How to Stock a Basic Healthy Pantry","p. xi",
 "Foods to keep on hand so the 5-ingredient recipes come together faster.",
 [{heading:"Pantry",items:["Artichoke hearts, canned","Bacon, fully cooked, ready to serve","Baking potatoes, microwave-ready","Beans, canned (assorted)","Broth (chicken, beef, vegetable)","Chopped nuts (assorted)","Coconut, shredded","Cranberry sauce, canned","Dried bread crumbs (plain, seasoned)","Green chiles, mild, canned","Instant espresso powder","Grains, quick-cook packaged (farro, barley)","Marinara/tomato sauce","Pastes (tomato and anchovy), refrigerate after opening","Peanut butter","Rice, boil-in-bag (white, brown)","Rice, fully cooked (white, brown)"]},
  {heading:"Fridge",items:["Baby lettuce, pre-washed (assorted)","Baby spinach, bagged","Beets, fully cooked, vacuum-packed","Broccoli crumbles","Brussels sprouts, shredded","Butternut squash, peeled and diced","Carrots, shredded/matchstick","Cauliflower crumbles (“rice”)","Cheese, shredded and grated","Chicken, rotisserie","Coleslaw, broccoli slaw","Edamame, shelled, fully cooked","Eggs, hard-cooked","Garlic cloves, peeled","Garlic, chopped","Garlic, ginger, basil, lemongrass, and chile refrigerated pastes","Hummus","Lentils, fully cooked, vacuum-packed","Mushrooms, sliced","Pesto, basil"]},
  {heading:"Freezer",items:["Bell peppers, chopped","Berries, unsweetened (various)","Corn, kernels","Edamame, shelled","Mango, chunks, unsweetened","Onion, chopped","Pearl onions, peeled","Pizza dough (plain, whole wheat)","Spinach, chopped","Waffles and pancakes, whole grain/whole wheat","Whole grains, fully cooked (farro, quinoa, wheat berries, rice)"]}],
 []),
g("s5-minimalist-kitchen","The Minimalist Kitchen","p. x",
 "Tips for setting up your kitchen and pantry so cooking goes faster.",
 [{heading:"Kitchen set-up",items:[
  "Declutter and organize: a drawer separator helps, and so does downsizing duplicate measuring cups, spoons, and utensils. Give away or donate gadgets that just collect dust.",
  "Store seldom-used and seasonal equipment (cookie cutters, specialty pans, very large pots) on a top shelf, in another room, or in covered containers in the garage or basement.",
  "Make cooking convenient: keep the pots, skillets, roasting pans, and baking sheets you use most in a lower cabinet near the stove. Keep nesting bowls and cutting boards near your prep area, go-to tools in a jar on the counter, and knives safe and sharp in a block or in-drawer organizer."]},
  {heading:"Streamline your pantry",items:[
  "Clear out tempting foods like cookies and chips, and donate unopened, unexpired items you won't use to a food bank or neighbors.",
  "Organize by zones. Keep like things together (broths, beans, tomatoes, salsas, rice, whole grains) and put frequently used items such as oil, vinegar, pastas, and canned broth front and center.",
  "Keep the herbs and spices you use most, plus salt and pepper, in a basket, drawer, or shelf near your prep area. Alphabetize the rest, and toss dried herbs and spices older than two years."]}],
 []),
g("s5-flavor-boost","How to Add a Quick Flavor Boost","p. xiii",
 "Seven pantry exotics that add a lot of flavor to everyday dishes.",
 [{heading:"Flavor boosters",items:[
  "Aleppo pepper: dried pepper flakes with heat, complex flavor, and bright acidity. Keeps up to 1 year in the pantry. Try in rubs, marinades, kebabs, grilled meat, pasta and rice dishes, sauces, stews, lentils, brownies, spiced nuts.",
  "Garam masala: a mix of cardamom, cinnamon, cloves, coriander, cumin, black pepper, star anise, and turmeric. Up to 1 year in the pantry. Try in rubs, marinades, curries, stews, braises.",
  "Harissa: a very hot Tunisian seasoning paste sold in small cans and tubes. Up to 1 year in the refrigerator. Try in marinades for grilled meat or fish, roasted vegetables, soups and stews, couscous, rice dishes.",
  "Horseradish: a root in the mustard family that adds a wallop of heat when freshly grated. Bottled keeps up to 2 months in the refrigerator, fresh up to 2 weeks in the crisper drawer. Try in Bloody Mary mix, dips, beets, meat loaf.",
  "Sriracha: hot sauce of chile peppers, vinegar, garlic, sugar, and salt. Up to 1 year in the refrigerator. Try in any dish for complex heat.",
  "Sumac: a slightly moist, coarse dark powder with a fruity, tangy aroma and slightly salty aftertaste. Up to 1 year in the pantry. Try in potatoes, tomatoes, winter squash, onion, eggplant, zucchini, yogurt.",
  "Vadouvan: a French-style curry powder with shallots or onions; sweet with a touch of smokiness. Up to 1 year in the pantry. Try in popcorn, dips, chocolate baked goods, vinaigrettes, rubs, marinades, vegetables, yogurt, grains, meat, chicken."]}],
 []),
g("s5-global-glossary","Global Glossary","pp. xii–xiv",
 "Plain-language notes on the global ingredients, all findable at a regular supermarket.",
 [{heading:"Asian pantry",items:[
  "Bean thread noodles: also called cellophane noodles, Chinese vermicelli, or glass noodles. Thin, translucent noodles made from mung bean starch; soak briefly in very hot water until softened, then drain.",
  "Chili-garlic sauce: a piquant blend of coarsely ground fresh chiles, garlic, vinegar, and salt. Use as a condiment or in cooking, marinades, and sauces; a touch gives bold flavor.",
  "Chili oil: vegetable oil infused with chile peppers, deep orange-red. A staple of Chinese and Southeast Asian cooking, found in the Asian food aisle.",
  "Fermented black beans: salted, fermented black soybeans sold in small bags at Asian markets. Briefly soak, then mince or mash before adding to stir-fries; a tablespoon or two is plenty.",
  "Fish sauce: nam pla in Thailand, nuoc mam in Vietnam. A pungent amber sauce that adds richness; the best has only water, anchovies, and salt. Use sparingly.",
  "Hoisin sauce: a thick, dark, pungent sauce of soybean paste, chiles, and salt, sometimes with sugar, vinegar, and garlic. Often in Chinese barbecue sauces and glazes (Lee Kum Kee is a common brand).",
  "Kecap manis: a thick, dark, molasses-like Indonesian soy sauce made with palm sugar, sometimes with star anise and garlic. Add judiciously.",
  "Kimchee: a traditional Korean side dish of chile-laced Napa cabbage fermented in crocks. Eat on its own or add to fried rice and other dishes; find it in specialty stores, online, and large supermarkets.",
  "Lemongrass: a tropical plant with a delicate citrus-floral flavor, sold fresh, frozen, as paste, and dried (dried not recommended). Choose firm, light green stalks; refrigerate wrapped up to 2 weeks or freeze up to 6 months. To prep, cut off the dry end and papery top, slit the stalk and peel off tough outer layers to the tender core, smash with the side of a large knife, and finely chop.",
  "Mirin: a sweet Japanese rice wine that adds a bit of acidity. Dry sherry or sweet Marsala work as substitutes.",
  "Miso: fermented soybean paste in three types. White is mild (dressings, soups, marinades); yellow, made with fermented soybeans and barley, is stronger (hearty dressings, soups, bold marinades, glazes); red, the saltiest and most pungent and aged longest, is best in braises and with vegetables.",
  "Oyster sauce: a rich, brown, strongly flavored blend of oyster, soy sauce, sugar, and salt, thickened with cornstarch. Use sparingly in stir-fries; common in Cantonese, Thai, and Vietnamese cooking.",
  "Rice stick noodles: made from rice flour and water, in thin, medium, and wide widths. Cook in boiling water until softened before adding to dishes; wide ones are used in pad Thai.",
  "Sambal oelek: an Indonesian ground chile paste that adds pure heat. Huy Fong is a popular U.S. brand, and also makes Sriracha.",
  "Thai curry paste: available red and green. Green is quite hot, made of green chiles, lemongrass, garlic, shrimp paste, kaffir lime leaves, and salt. Red is a medium-heat blend of red chiles and spices."]},
  {heading:"Dairy, flour, and oils",items:[
  "Chickpea flour: ground dried chickpeas; gluten-free and high in protein. In Nice, France it becomes pancakes called socca (see the chickpea soup recipe).",
  "Coconut oil: mechanically (not chemically) pressed from mature coconut meat. Solid at room temperature but melts quickly when heated; used in sweet and savory dishes and a favorite of vegans.",
  "Crème fraîche: French for “fresh cream.” Thickened heavy cream that is slightly tangy from buttermilk, sour cream, or plain yogurt. Used in place of whipped cream, and served with tarte tatin, soups, and smoked salmon.",
  "Mascarpone: a soft, creamy, mild Italian triple cream–style cheese made from heavy cream, sold in small containers and best known in tiramisu."]},
  {heading:"Italian pantry",items:[
  "Parmigiano-Reggiano: the only authentic Parmesan. Cow's milk, aged at least 2 years in designated areas of Italy, with a rich, sharp flavor and creamy, granular texture. Look for the stamped yellow rind; refrigerate double wrapped in wax paper and a zip-close bag.",
  "Pecorino-Romano: a hard, pungent sheep's milk cheese. Saltier, so add judiciously where a cheesy punch is welcome.",
  "Pepperoncini: brined sweet peppers, medium hot. Good on sandwiches, antipasto platters, and Greek salads.",
  "Pancetta: Italian-style bacon, salt cured but not smoked. Sliced to order at specialty stores, or diced in small containers beside the pre-sliced cold cuts.",
  "Prosciutto: Italian dry-cured ham served very thinly sliced, with a sweet, meaty, buttery flavor. Prosciutto di Parma is the mildest and sweetest and a bit pricier. Sliced to order at specialty stores or presliced in supermarkets.",
  "Ricotta salata: ricotta pressed, salted, and aged at least 90 days. It resembles feta, is great in salads, and is ideal for shredding and slicing."]},
  {heading:"Bread",items:[
  "Naan: a leavened Indian flatbread of flour, yogurt, salt, and yeast, traditionally baked in a tandoor oven and best brushed with ghee. Stonefire Authentic Flatbreads is a supermarket brand."]}],
 [])
];
R.forEach(function(r){r.healthy=true;});
window.RECIPES=(window.RECIPES||[]).concat(R);
})();
