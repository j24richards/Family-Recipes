// People: lets visitors look up a name and see every recipe linked to that person.
// Cards use many spellings (Mom G., Mom Goucher, Pat Goucher...). The groups below
// say which spellings are the same person. Everyone else is grouped by the name as written.
(function(){
var DEFS = [
  { key:'mom-g', name:'Mom G.', full:'Pat Goucher', relation:'Cards call her Mom G., Mom Goucher or Pat Goucher.', family:true,
    credit:[/^mom\.?\s*g\.?$/i, /^mom goucher$/i, /^pat goucher$/i, /gram goucher \/ mom goucher/i, /^pat & don goucher$/i],
    mention:[/\bmom\.?\s*g\b\.?/i, /\bmom goucher\b/i, /\bpat goucher\b/i] },
  { key:'mom-r', name:'Mom R.', full:'Barbara Richards (Nana Richards)', relation:'Cards call her Mom R., Mom Richards, Nana Richards or Barbara Richards.', family:true,
    credit:[/^mom\.?\s*r\.?$/i, /^mom richards$/i, /^barbara richards$/i, /^nana richards$/i, /^barbara richards \/ margaret lefave/i],
    mention:[/\bmom\.?\s*r\b\.?/i, /\bnana richards\b/i, /\bbarbara richards\b/i, /\bmom richards\b/i] },
  { key:'gram-goucher', name:'Gram Goucher', full:'Harriett Goucher', relation:'', family:true,
    credit:[/^gram goucher$/i, /^gram goucher \/ mom goucher/i, /^harriett goucher$/i], mention:[/\bgram goucher\b/i, /\bharriett\b/i] },
  { key:'dad-g', name:'Dad G.', full:'Dad G.', relation:'', family:true,
    credit:[/^dad g\.?$/i], mention:[/\bdad g\b\.?/i] },
  { key:'nana-lefave', name:'Nana LeFave', full:'Margaret LeFave', relation:'', family:true,
    credit:[/^margaret lefave$/i, /^nana lefave$/i, /^barbara richards \/ margaret lefave/i], mention:[/\blefave\b/i] },
  { key:'teresa-byrd', name:'Teresa Byrd', full:'Teresa Byrd', credit:[/^teresa( byrd)?$/i], mention:[] },
  { key:'eleanor-cook', name:'Eleanor Cook', full:'Eleanor Cook (Mrs. Cook), Cider Hill Farm', credit:[/eleanor cook/i, /^mrs\.? cook$/i], mention:[/\bmrs\.? cook\b/i, /eleanor cook/i] },
  { key:'aunt-bev', name:'Aunt Bev', full:'Aunt Bev', family:true, credit:[/^aunt bev/i], mention:[/\baunt bev/i] },
  { key:'debby-zampell', name:'Debby Zampell', full:'Debby Zampell', credit:[/zampell/i], mention:[] },
  { key:'barb-joslin', name:'Barb Joslin', full:'Barb Joslin', credit:[/^barb(ara)? joslin$/i], mention:[] },
  { key:'cathy-milligan', name:'Cathy Milligan', full:'Cathy Milligan', credit:[/^(cathy|c\.) milligan$/i], mention:[] },
  { key:'dedra-hovey', name:'Dedra Hovey', full:'Dedra Hovey', credit:[/^(dedra|deidra) hovey$/i], mention:[] },
  { key:'ruth-fearon', name:'Ruth Fearon', full:'Ruth Fearon', credit:[/^(ruth|r\.) fearon$/i], mention:[] }
];
// Credits that are a magazine, restaurant, brand or show rather than a person.
var SOURCE_RE = /magazine|globe|herald|restaurant|\binn\b|king arthur|betty crocker|show\b|museum|tea house|farm\b|rolling hills|diet center|weight watchers|better homes|bank\b|chef|cellier|canteen|yankee|flyer|crafts|feed me|salem evening|c.est tout|w\.w\./i;

function slug(s){ return String(s).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
function textOf(r){ return [r.creditNote||''].concat(r.cardNotes||[], r.notes||[], r.adjustments||[]).join(' \n '); }

function build(recipes){
  var map = {}, order = [];
  function get(key, init){ if(!map[key]){ map[key] = Object.assign({key:key, aliases:[], credits:[], mentions:[]}, init); order.push(key); } return map[key]; }
  DEFS.forEach(function(d){ get(d.key, {name:d.name, full:d.full, relation:d.relation||'', family:!!d.family, def:d}); });
  recipes.forEach(function(r){
    var c = (r.credit||'').trim(), hit = false;
    if (c) {
      DEFS.forEach(function(d){
        if (d.credit.some(function(re){ return re.test(c); })) {
          var p = map[d.key]; if (p.credits.indexOf(r) < 0) p.credits.push(r);
          if (p.aliases.indexOf(c) < 0) p.aliases.push(c); hit = true;
        }
      });
      if (!hit) {
        var key = 'n-' + slug(c.replace(/\s*\([^)]*\)\s*/g,' ').trim());
        var p2 = get(key, {name:c, full:c, relation:'', family:false, isSource:SOURCE_RE.test(c)});
        if (p2.credits.indexOf(r) < 0) p2.credits.push(r);
      }
    }
    var t = textOf(r);
    DEFS.forEach(function(d){
      var p = map[d.key];
      if (p.credits.indexOf(r) >= 0) return;
      if (d.mention.some(function(re){ return re.test(t); }) && p.mentions.indexOf(r) < 0) p.mentions.push(r);
    });
  });
  return order.map(function(k){ return map[k]; }).filter(function(p){ return p.credits.length || p.mentions.length; });
}

var cache = null;
function people(recipes){ return cache || (cache = build(recipes)); }
function keyFor(r){
  if (!cache) return '';
  for (var i = 0; i < cache.length; i++) if (cache[i].credits.indexOf(r) >= 0) return cache[i].key;
  return '';
}
// Let the main search find people by any of their names, too.
function tagSearch(recipes){
  var list = people(recipes);
  recipes.forEach(function(r){ r._who = ''; });
  list.forEach(function(p){
    var names = [p.name, p.full].concat(p.aliases).join(' ');
    p.credits.concat(p.mentions).forEach(function(r){ r._who = (r._who||'') + ' ' + names; });
  });
}
window.PEOPLE_API = { people:people, keyFor:keyFor, tagSearch:tagSearch };
if (window.RECIPES) tagSearch(window.RECIPES);
})();
