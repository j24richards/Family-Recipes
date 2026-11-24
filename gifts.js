// Home "recipes" from the Gift Ideas tab of the family recipe box: play dough, sculpting dough, slime,
// plus one clipping on freezing apples. Credits kept as written on the cards. No photos of the cards.
// The four craft items carry craft:true so the site can keep them out of "Today's pick" and the pantry finder.
(function(){
var R = [
  { slug:"play-dough-alum", title:"Play Dough (Alum)", section:"family", category:"Gifts from the Kitchen", craft:true, credit:"Patty Ferguson",
    tags:["gift idea","kids","craft"], serves:"",
    summary:"A simple homemade play dough with salt and alum. From the kitchen of Patty Ferguson. Not for eating.",
    ingredients:[{items:["5 cups flour","1 cup salt","6 tbsp oil","4 cups water","2 dashes food coloring","2 tbsp alum"]}],
    steps:[],
    notes:["Not for eating."],
    gaps:["The card lists ingredients only, with no instructions."] },

  { slug:"play-dough-cooked", title:"Play Dough (Cooked)", section:"family", category:"Gifts from the Kitchen", craft:true, credit:"Vicky Lansky, Feed Me, I'm Yours (Peg's recipe)",
    tags:["gift idea","kids","craft"], serves:"",
    summary:"Cooked play dough made on the stove, with a big batch and a small batch. From Vicky Lansky's Feed Me, I'm Yours (Peg's recipe). Edible but not tasty.",
    ingredients:[
      {name:"Big batch",items:["4 cups white flour","1 cup salt","½ cup cream of tartar","4 cups water","Food coloring","¼ cup oil"]},
      {name:"Small batch",items:["1 cup flour","¼ cup salt","2 tbsp cream of tartar","1 cup water","2 tsp vegetable food coloring","1 tbsp oil"]}],
    steps:["Mix the flour, salt and cream of tartar in a medium pot.","Add the water, food coloring and oil.","Cook over medium heat, stirring, for 3 to 5 minutes. It will look like a gloppy mess and you'll think it isn't working, but it will. When it forms a ball in the center of the pot, turn it out.","Knead on a lightly floured surface.","Store in an airtight container or plastic bag."],
    notes:["Edible but not tasty.","Handwritten note: ½ cup cream of tartar is one 1.5 oz container plus 2 tbsp."] },

  { slug:"sculpting-dough", title:"Sculpting Dough", section:"family", category:"Gifts from the Kitchen", craft:true, credit:"Deidra Hovey", creditUnsure:true,
    tags:["gift idea","kids","craft"], serves:"",
    summary:"A baked salt dough for sculpting and ornaments. From the kitchen of Deidra Hovey.",
    ingredients:[{items:["1 cup flour","¼ cup salt","6 tbsp water","Paste food coloring or tempera paint powder (optional)"]}],
    steps:["Mix the salt and water. Add to the flour.","Knead until not tacky but no cracks. Keep hands clean while shaping.","Bake at 250° for about 2 hours, depending on size. Done when a straight pin doesn't pierce the back."],
    notes:["Great in a food processor.","If adding color, use paste food coloring or tempera paint powder, mixed into the water and salt mixture."] },

  { slug:"slime-metamucil", title:"Slime (Microwave)", section:"family", category:"Gifts from the Kitchen", craft:true, credit:"",
    tags:["gift idea","kids","craft"], serves:"",
    summary:"Microwave slime made from psyllium husk. Not edible.",
    ingredients:[{items:["1 tsp Metamucil or psyllium-husk laxative (see note)","1¼ cups water","Food coloring","Jar with lid","Large glass microwave-safe container"]}],
    steps:["Put the Metamucil and water in the jar. Cover and shake for 2 minutes.","Pour into the glass container and add a few drops of food coloring.","Microwave 5 minutes on high (stop sooner if it starts to bubble over).","Leave in the microwave to cool 3 minutes, then microwave 5 minutes more.","Carefully remove with pot holders. The slime will be very hot. Let it cool for an hour before kids play with it."],
    notes:["Goo is not edible."],
    gaps:["The card has a question mark after \"psyllium-husk laxative.\""] },

  { slug:"halloween-slime", title:"Halloween Slime (Gak or Ooze)", section:"family", category:"Gifts from the Kitchen", craft:true, credit:"Children's Museum of Art in NY",
    tags:["gift idea","kids","craft","halloween"], holidays:["halloween"], serves:"",
    summary:"Glue-and-Borax slime in any color. From the Children's Museum of Art in NY. Not edible.",
    ingredients:[{items:["1 cup white glue","1 cup hot water, plus ¼ to ⅓ cup water","2 tbsp Borax","Food coloring"]}],
    steps:["Add 10 to 12 drops of food coloring to the hot water. Mix in the glue.","Dissolve the Borax in about ¼ to ⅓ cup water (it may not dissolve completely).","Pour the Borax solution into the glue mixture and stir immediately.","Let sit 1 to 3 hours to absorb the extra water, or pour off the extra water.","Store in a sealed plastic container."],
    notes:["Borax is not food. Keep slime away from mouths and wash hands after playing."] },

  { slug:"freezing-apples", title:"Freezing Apples", section:"family", category:"Kitchen Tips", credit:"Mary Fitch, The Salem Evening News",
    tags:["tip","apples","freezing"], serves:"",
    summary:"How to freeze sliced apples. From a newspaper clipping by Mary Fitch, The Salem Evening News.",
    ingredients:[{items:["Apples","Salt and cold water (2 tbsp salt per 1 gallon water)","Boiling water","Ice water"]}],
    steps:["Wash, core and pare the apples.","Slice them directly into the cold salt water.","Drain, then scald the slices in boiling water for 2 to 3 minutes.","Cool in ice water for 2 to 3 minutes.","Drain, then freeze."],
    notes:[] }
];
R.forEach(function(r){
  r.fromBox = true;
  r.box = "A";
  r.boxSection = "Gift Ideas";
  r.tags = (r.tags || []).concat(["mom's recipe box", "box A"]);
  r.subtitle = r.subtitle || "";
  if (r.credit === "") delete r.credit;
  r.tags.push("gift ideas");
});
window.RECIPES = (window.RECIPES || []).concat(R);
})();
