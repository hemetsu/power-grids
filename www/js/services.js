angular.module('PGServices', [])

.factory('Utilities', function() {
  return {
    randomSelect : function(array, num) {
      var results = [];
      var tempArray = array;
      while (num > 0) {
        var index = Math.floor(Math.random() * tempArray.length);
        results.push(tempArray[index]);
        tempArray.splice(index);
        num--;
      }
      return results;
    }
  };
})

.factory('Resources', function() {
  
  /* Constants */

  var gerregions = { colors:'521043', bad:'SceqVfrgsv',
      names: [ 'North West', 'North East', 'Central West', 'Central East', 'South West', 'South' ] };
  var usaregions = { colors:'350126', bad:'ScYqVfZr[sv',
      names: [ 'North West', 'South West', 'North Central', 'South Central', 'North East', 'South East' ] };
  var fraregions = { colors:'405132', bad:'VZjlt',
      names: [ 'Central', 'East', 'South East', 'South West', 'North West', 'North East' ] };
  var itaregions = { colors:'231045', bad:'KScMUeYiqVZjrW[ks]muyz{}',
      names: [ 'South / Sicily', 'South Central', 'Central', 'North Central', 'North West', 'North East' ] };
  var ceuregions = { colors:'035214', bad:'ScYqVfZr[sv',
      names: [ 'Austria', 'Hungary', 'Czech Republic', 'Slovakia', 'Western Poland', 'Eastern Poland' ] };
  var bnxregions = { colors:'2501A', bad:'KSYZ[',
      names: [ 'Holland / Utrecht', 'Netherlands East', 'Netherlands South', 'Flanders / Brussels', 'Wallonia / Luxemburg' ] };
  var korregions = { colors:'603271', bad:'ScYqVfZr[sv',
      names: [ 'South West', 'South East', 'Central West', 'Central East', 'North West', 'North East' ] };
  var chnregions = { colors:'621073', bad:'ScYqVfZrx[syvz{',
      names: [ 'East', 'South East', 'North', 'South West', 'North East', 'North West' ] };
  var braregions = { colors:'260317', bad:'SceqVfrgsv',
      names: [ 'South', 'South East', 'North West', 'Central', 'North', 'North East' ] };
  var iberegions = { colors:'016327', bad:'SceqVfrgsv',
      names: [ 'Portugal', 'South', 'North West', 'Central', 'North', 'East' ] };
  var jpnregions = { colors:'10362', bad:'KSMUYVZW[]',
      names: [ 'Kyushu', 'Chugoku / Shikoku', 'Kansai / Chubu', 'Kanto', 'Tohoku / Hokkaido' ] };
  var rusregions = { colors:'273601', bad:'SceiqVfjrlgksmnvo',
      names: [ 'Southern', 'Central', 'Volga', 'Northwestern', 'Ural', 'Siberian' ] };
  var queregions = { colors:'137026', bad:'GScYqVfZrxWg[syvzw{',
      names: [ 'South', 'West', 'Quebec', 'Central', 'East', 'North' ] };
  var badregions = { colors:'53041', bad:'SV',
      names: [ 'South West', 'South East', 'Central West', 'Central East', 'North' ] };
  var gbrregions = { select:true, colors:'682017', bad:'MUNV\\OW]^_',
      names: [ 'Ireland', 'Northern Ireland', 'Scotland', 'Wales', 'Southern England', 'Northern England' ],
      cities:[ 7, 5, 7, 6, 8, 7 ] };
  var neuregions = { select:true, colors:'813027', bad:'cUYiqVfjky',
      names: [ 'Denmark', 'Norway', 'Southern Sweden', 'Northern Sweden', 'Finland', 'Baltic States' ] };
  var indregions = { colors:'876102', bad:'cMYiqrsy',
      names: [ 'North West', 'Central West', 'North / Nepal', 'South', 'Central East', 'East / Bangladesh' ] };
  var ausregions = { colors:'10627', bad:'',
      names: [ 'Western Australia', 'Northern Territory / South', 'Queensland', 'New South Wales', 'Victoria / Tasmania' ] };
  var dxeregions = { colors:'1360854', con: [3,5,9,6,12,20,24,40,72,48,96],
      names: [ 'West', 'North West', 'Central', 'South', 'North East', 'East', 'South East']};
  var dxaregions = { colors:'0436815', con: [3,9,6,10,12,20,24,40,48,96],
      names: [ 'North West', 'Pacific', 'Mexico', 'Central', 'South', 'East Central', 'North East']};

  var std0 = [3,4,3,4,5,3,5,6,4,5,7,5,7,9,6];
  var std1 = [2,2,4,2,3,4,3,4,5,4,5,6,5,6,7];
  var std2 = [1,2,3,1,2,3,2,3,4,3,3,5,3,5,6];
  var std3 = [1,1,1,1,1,1,1,2,2,2,3,2,2,3,3];
  var stdrefill = [std0,std1,std2,std3];
  var iberefill = [[3,4,2,4,5,2,4,6,3,4,7,3,6,8,4],[2,3,5,2,4,5,3,5,6,4,6,7,5,7,9],std2,[0,2,1,0,2,1,0,4,1,0,5,1,0,5,2]];
  var ceurefill = [[4,5,3,5,6,3,6,7,5,7,8,5,8,10,6],[1,2,3,2,2,3,2,3,4,3,4,5,4,5,6],[1,3,3,1,3,3,2,4,4,3,4,5,3,6,6],[1,1,1,1,1,1,1,2,1,2,2,2,2,3,2]];
  var querefill = [[3,3,3,4,4,3,5,4,4,5,5,5,7,6,6],[2,2,3,2,3,3,3,4,4,4,5,4,5,6,5],std2,std3];
  var bnxrefill = [std1,std0,std2,std3];
  var rusrefill = [std1,[3,4,3,3,4,3,5,6,4,5,7,5,7,9,6],[2,2,3,2,2,3,3,3,4,4,3,5,4,5,6],std3];
  var gbrrefill = [[3,4,3,3,5,3,4,6,4,4,7,5,6,8,6],[2,3,2,2,4,2,3,5,3,4,6,6,5,7,5],[1,2,2,1,2,2,2,3,3,3,3,5,3,5,5],[1,1,1,1,2,1,1,3,1,2,4,2,2,4,3]];
  var chnrefill = [[4,4,3,5,5,3,6,6,4,7,7,5,9,9,6],[2,2,4,3,3,4,4,4,5,5,5,6,6,6,7],[2,2,1,2,2,1,3,3,2,3,3,3,5,5,3],[1,1,1,1,1,1,2,2,2,3,3,2,3,3,3]];
  var brarefill = [std2,std0,std1,std3];
  var neurefill = [[2,4,3,2,4,4,4,5,5,4,5,6,6,8,5],[1,2,3,2,2,3,2,3,4,3,4,5,4,5,6],std2,[1,2,2,1,2,2,2,3,2,2,4,3,2,4,4]];
  var korrefill = [[12,22,12,22,23,12,23,33,22,23,34,23,34,45,33],[11,11,13,11,12,13,12,13,23,13,23,24,23,24,34],[1,11,12,1,11,12,11,12,22,12,12,23,12,23,33],std3];
  var ausrefill = [[3,5,4,4,6,4,4,7,5,5,9,6,7,10,7],std2,std2,[-1,-2,-3,-1,-2,-3,-2,-2,-4,-2,-3,-5,-3,-3,-6]];
  var indrefill = [[4,5,4,5,6,4,6,7,5,7,8,6,8,10,7],[1,2,2,2,2,2,2,3,3,3,4,4,4,5,5],[1,3,4,1,3,4,3,4,6,4,5,7,4,7,9],[1,1,1,1,1,1,1,2,1,2,2,2,2,3,2]];
  var dxerefill = [['x','x','x',2,6,2,3,7,4,'x','x','x',5,10,4],['x','x','x',2,3,5,3,4,5,'x','x','x',4,6,8],['x','x','x',2,2,3,3,3,4,'x','x','x',4,5,6],['x','x','x',1,1,2,1,2,2,'x','x','x',2,3,4]];
  var dxarefill = [[2,4,2,2,5,2,3,6,3,4,7,4,5,8,5],[2,2,4,2,2,4,3,3,5,3,3,6,4,4,7],[2,1,3,3,1,3,3,2,4,4,2,5,5,3,6],[2,1,2,2,1,2,2,1,2,3,2,3,3,2,4]];

  var maps = [
    { id: 'GER', name: 'Germany', regions: gerregions, startcost: [1,3,7,14], refill: stdrefill},
    { id: 'USA', name: 'USA', regions: usaregions, startcost: [1,3,7,14], refill: stdrefill },
    { id: 'ITA', name: 'Italy', regions: itaregions, startcost: [3,4,5,14], refill: stdrefill },
    { id: 'FRA', name: 'France', regions: fraregions, startcost: [1,3,7,5], refill: stdrefill },
    { id: 'CEU', name: 'Central Europe', regions: ceuregions, startcost: [1,3,7,8], refill: ceurefill },
    { id: 'BNX', name: 'Benelux', regions: bnxregions, startcost: [3,1,7,14], refill: bnxrefill },
    { id: 'KOR', name: 'Korea', regions: korregions, startcost: [1,3,7,14], refill: korrefill },
    { id: 'CHN', name: 'China', nodecks: 'MB', regions: chnregions, startcost: [5,5,7,'-'], refill: chnrefill },
    { id: 'BRA', name: 'Brazil', regions: braregions, startcost: [1,3,7,14], refill: brarefill },
    { id: 'IBE', name: 'Spain & Portugal', regions: iberegions, startcost: [1,3,6,5], refill: iberefill },
    { id: 'JPN', name: 'Japan', nodecks: 'B', regions: jpnregions, startcost: [2,4,6,12], refill: stdrefill },
    { id: 'RUS', name: 'Russia', nodecks: 'M', regions: rusregions, startcost: [3,1,'-',6], refill: rusrefill },
    { id: 'QUE', name: 'Québec', regions: queregions, startcost: [2,2,7,14], refill: querefill },
    { id: 'BAD', name: 'Baden-Württemberg', nodecks: 'B', regions: badregions, startcost: [1,3,7,14], refill: stdrefill },
    { id: 'GBR', name: 'United Kingdom & Ireland', regions: gbrregions, startcost: [1,3,5,'-'], refill:gbrrefill },
    { id: 'NEU', name: 'Northern Europe', nodecks: 'MB', regions: neuregions, startcost: [3,3,5,7], refill:neurefill },
    { id: 'AUS', name: 'Australia', regions: ausregions, startcost: [1,3,4,1], refill: ausrefill },
    { id: 'IND', name: 'Indian Subcontinent', regions: indregions, startcost: [1,2,2,6], refill: indrefill },
    { id: 'DXE', name: 'Europe Deluxe', startcost: [2,3,3,8], regions: dxeregions, refill: dxerefill, deluxe:true },
    { id: 'DXA', name: 'North America Deluxe', startcost: [2,3,4,9], regions: dxaregions, refill: dxarefill, deluxe:true },
    ];

  var decks = [
    { id: 'S', name: 'Standard Deck' },
    { id: 'N', name: 'New Deck' },
    { id: 'M', name: 'Mixed Deck'},
    { id: 'B', name: 'Big Game Deck' },
    { id: 'D', name: 'Deluxe Deck' },
  ];

  var players = ['red', 'blue', 'black', 'purple', 'green', 'yellow'];

  var limits = [ [7,18], null, [10,21], [7,17], [7,17], [7,15], [6,14]];
  var limitsbig = [ [8,21], null, [12,24], [8,20], [8,20], [8,18], [7,15]];
  var limitsbad = [ [6,18], null, [9,21], [6,17], [6,17], [6,15], [5,14]];

  return {
    getMaps: function() {
      return maps;
    },
    getDecks: function() {
      return decks;
    },
    getPlayers: function() {
      return players;
    },
    getLimits: function() {
      return limits;
    }
  };
});