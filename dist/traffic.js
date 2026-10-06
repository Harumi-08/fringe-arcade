// Anonymous browser estimates, with no account, location or chat content.
let trafficVisitor;try{trafficVisitor=localStorage.getItem('fringe-visitor');if(!/^[a-f0-9-]{36}$/.test(trafficVisitor||'')){trafficVisitor=crypto.randomUUID();localStorage.setItem('fringe-visitor',trafficVisitor)}}catch{trafficVisitor=crypto.randomUUID()}
function trackTraffic(activity){try{fetch('/api/traffic',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({activity,visitor:trafficVisitor,id:crypto.randomUUID()}),keepalive:true}).catch(()=>{})}catch{}}
trackTraffic('page');
const originalOpenGame=openGame;openGame=function(id){trackTraffic(id);return originalOpenGame(id)};
const originalOpenCafe=openCafe;openCafe=function(){trackTraffic('cafe');return originalOpenCafe()};$('#visitCafe').onclick=openCafe;
document.addEventListener('click',e=>{if(e.target.closest?.('.coffee-link')&&Date.now()<coffeePayment.expires)trackTraffic('support')});
