// Marks recipes that come from family members. Names the family gave us:
// Mom G., Mom R., anyone named Richards, Goucher or Drown, and Aunt Bev (plus cards signed just "Mom" or "Grandma").
(function(){
var FAMILY = [/\bmom\.?\s*g\b\.?/i, /\bmom\.?\s*r\b\.?/i, /\brichards\b/i, /\bgoucher\b/i, /\bdrown\b/i, /\baunt\s*bev\w*/i, /^mom$/i, /^grandma$/i];
(window.RECIPES || []).forEach(function(r){
  var where = [r.credit || ""].concat(r.cardNotes || [], r.notes || [], r.adjustments || [], [r.creditNote || ""]);
  var hits = [];
  where.forEach(function(t){
    FAMILY.forEach(function(re){ var m = String(t).match(re); if (m && hits.indexOf(m[0].trim()) < 0) hits.push(m[0].trim()); });
  });
  if (hits.length) {
    r.familyMember = true;
    r.familyNames = hits;
    r.section = "family";
    if ((r.tags || []).indexOf("family member") < 0) r.tags = (r.tags || []).concat(["family member"]);
  }
});
})();
