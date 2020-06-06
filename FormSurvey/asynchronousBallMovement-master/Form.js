class Form {
    constructor() {


    }
    display(){
        var playerCount = 0;
        var playerd;
        var Title = createElement('h1');
        Title.html("Fill the form");
        Title.position(50, 40);
        var nameInput = createInput("name here");
        var Lunch = createElement('h2');
        var Pay = createElement('h2');
        var OneK = createElement('h2');
        Lunch.html("would u agree for lunch to be free in the cafeteria for poor kids?");
        var submitLunch = createButton("yes");
        var submitNoLunch = createButton("no");
        var submitPay = createButton("yes");
        var submitNoPay = createButton("no");
        var submitOneK = createButton("yes");
        var submitNoOneK = createButton("no");
        Lunch.position(50, 100);
        submitLunch.position(50, 150);
        submitNoLunch.position(200, 150);
        nameInput.position(50, 100);
        var Greet = createElement('h2');

        submitLunch.mousePressed(function(){
            var name = nameInput.value()
            
            playerCount = playerCount + 1;
            count = playerCount;
            LunchResp = "yes";
            submitNoLunch.position(20000, 20);
            Pay.html(name + " would u be willing to contribute some money for their food?");
            Pay.position(50, 200);
            submitPay.position(50, 250);
            submitNoPay.position(200, 250);

        })
        submitNoLunch.mousePressed(function(){
            var name = nameInput.value()
            
            playerCount = playerCount + 1;
            count = playerCount;
            
            Greet.html("Thank u "+ name + " You can leave now");
            Greet.position(50, 200);
            submitLunch.position(300000, 20);
            LunchResp = "no";
            playerCount = playerCount + 1;

        })
        submitNoPay.mousePressed(function(){
            var name = nameInput.value()
            
            playerCount = playerCount + 1;
            count = playerCount;
            
            Greet.html("Thank u "+ name + " You can leave now");
            Greet.position(50, 300);
            submitPay.position(300000, 20);
            PayResp = "no";
            playerCount = playerCount + 1;

        })
        submitPay.mousePressed(function(){
            var name = nameInput.value()
            
            playerCount = playerCount + 1;
            count = playerCount;
        
            submitNoPay.position(300000, 20);
            PayResp = "yes";

            OneK.html("Would u be willing to pay above or 1000 for their food?");
            OneK.position(50, 300);
            submitOneK.position(50, 350);
            submitNoOneK.position(200, 350);

        })
        submitNoOneK.mousePressed(function(){
            var name = nameInput.value()
            
            playerCount = playerCount + 1;
            count = playerCount;
            
            Greet.html("Thank u "+ name + " You can leave now");
            Greet.position(50, 400);
            submitOneK.position(300000, 20);
            OneKResp = "no";
            playerCount = playerCount + 1;

        })
        submitOneK.mousePressed(function(){
            var name = nameInput.value()
            
            playerCount = playerCount + 1;
            count = playerCount;
            
            Greet.html("Thank u "+ name + " You can leave now");
            Greet.position(50, 400);
            submitNoOneK.position(300000, 20);
            OneKResp = "yes";
            playerCount = playerCount + 1;

        })
        
    }
    updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
      updateName(count){
        playerd = "player" + playerCount; 
        database.ref('/').update({
          playerd: name
        });
      }
      
    
}