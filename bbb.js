$( document ).ready(function() {
    var _bot = {};

    _bot.sendArmy = function(from, to, army){
        $.ajax({
            type: 'POST',
            url: '/aj_sendarmy',
            data: {town:from,act:0,target:to,army:'ab10-am10-',},
            success: function(data){
                    console.info(data);
                }
            });

    }

    _bot.getFreeTownArmy = function(){
        $.each(wofh.towns, function(key,town){
          //console.info(town.name);
          //console.info(town);
          _bot.getFreeArmy(town.id);
        })
        //console.info('getFree');

    }
    _bot.getFreeArmy = function(town, callbeck){
      $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'https://w28.wofh.ru/aj_data?town=' + town + '&events=true&fleets=true&def=true&battles=true&commanding=true',
            success: function(data){
                  console.log(data.town[town].army.intown)
                  if(callbeck){
                     callbeck(data.town[town].army.intown);
                  }
                }
            });
    }
    _bot.getTowns = function(){
        $.each(wofh.towns, function(key,town){
          console.info('Name: ' + town.name + ' |||  ID: ' + town.id);
          //console.info()
          //console.info(town);

        })
    }
    _bot.sendRes = function(from, to, resources){
        $.ajax({
            type: 'POST',
            url: '/aj_sendres',
            data: {town1:from,town2:to,res_:resources,},
            success: function(data){
                    console.info(data);
                }
            });
        
        
    }

    window._bot = _bot;
    /*
    https://w28.wofh.ru/aj_sendarmy
    POST
    town=1386&act=0&target=10994&army=ab10-am10-


    town:1386
    act:0
    target:10994
    army:ab10-am10-

    */

});

