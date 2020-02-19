module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        rollButton: objects.Button;
        dice1:createjs.Bitmap;
        dice2:createjs.Bitmap;
        no1:objects.Label;
        no2:objects.Label;
         result1:number;
         result2:number;
    

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.rollButton=new objects.Button();
            

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            
           
            this.rollButton = new objects.Button('./Assets/images/rollButton.png', 320, 430, true);
           
             this.Main();
        }        
        
        public Update(): void 
        {

            
            
            
            this.stage.update(); 
        }

       
        public Main(): void 
        {

            this.addChild(this.rollButton);
            
            
            this.dice1=new createjs.Bitmap('./Assets/images/1.png');
            this.addChild(this.dice1);
            
            this.dice1.regX=-50;
            this.dice1.regY=-100;
            this.dice2=new createjs.Bitmap('./Assets/images/1.png');
            this.dice2.regX=-400;
            this.dice2.regY=-100;
            this.addChild(this.dice2);
            this.dice2.rotation+=5;

            
            this.removeChildAt(4);
            this.removeChildAt(5);
        
            this.rollButton.on("click", ()=>{
                this.removeChildAt(4);
                this.removeChildAt(5);
                


                this.result1=Math.floor((Math.random() * 6) + 1);
                

                switch(this.result1)
                {
                    case 1: 
                    this.dice1=new createjs.Bitmap('./Assets/images/1.png');
                    this.addChild(this.dice1);
                    this.dice1.regX=-50;
                    this.dice1.regY=-100;
                    this.no1=new objects.Label('1',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no1);
                    this.no1.regX=-100;
                    this.no1.regY=5;
                    
                    break;
                    
                    case 2: 
                    this.dice1=new createjs.Bitmap('./Assets/images/2.png');
                    this.addChild(this.dice1);
                    this.dice1.regX=-50;
                    this.dice1.regY=-100;
                    this.no1=new objects.Label('2',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no1);
                    this.no1.regX=-100;
                    this.no1.regY=5;

                    break;
                    case 3: 
                    this.dice1=new createjs.Bitmap('./Assets/images/3.png');
                    this.addChild(this.dice1);
                    this.dice1.regX=-50;
                    this.dice1.regY=-100;
                    this.no1=new objects.Label('3',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no1);
                    this.no1.regX=-100;
                    this.no1.regY=5;
                    break;
                    case 4: 
                    this.dice1=new createjs.Bitmap('./Assets/images/4.png');
                    this.addChild(this.dice1);
                    this.dice1.regX=-50;
                    this.dice1.regY=-100;
                    this.no1=new objects.Label('4',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no1);
                    this.no1.regX=-100;
                    this.no1.regY=5;
                    break;
                    case 5: 
                    this.dice1=new createjs.Bitmap('./Assets/images/5.png');
                    this.addChild(this.dice1);
                    this.dice1.regX=-50;
                    this.dice1.regY=-100;
                    this.no1=new objects.Label('5',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no1);
                    this.no1.regX=-100;
                    this.no1.regY=5;
                    break;
                    case 6: 
                    this.dice1=new createjs.Bitmap('./Assets/images/6.png');
                    this.addChild(this.dice1);
                    this.dice1.regX=-50;
                    this.dice1.regY=-100;
                    this.no1=new objects.Label('6',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no1);
                    this.no1.regX=-100;
                    this.no1.regY=5;
                    break;
                }

                this.result2=Math.floor((Math.random() * 6) + 1);
                switch(this.result2)
                {
                    case 1: 
                    this.dice2=new createjs.Bitmap('./Assets/images/1.png');
                    this.addChild(this.dice2);
                    this.dice2.regX=-400;
                    this.dice2.regY=-100;
                    this.no2=new objects.Label('1',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no2);
                    this.no2.regX=-450;
                    this.no2.regY=5;

                    break;
                    case 2: 
                    this.dice2=new createjs.Bitmap('./Assets/images/2.png');
                    this.addChild(this.dice2);
                    this.dice2.regX=-400;
                    this.dice2.regY=-100;
                    this.no2=new objects.Label('2',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no2);
                    this.no2.regX=-450;
                    this.no2.regY=5;
                    break;
                    case 3: 
                    this.dice2=new createjs.Bitmap('./Assets/images/3.png');
                    this.addChild(this.dice2);
                    this.dice2.regX=-400;
                    this.dice2.regY=-100;
                    this.no2=new objects.Label('3',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no2);
                    this.no2.regX=-450;
                    this.no2.regY=5;
                    break;
                    case 4: 
                    this.dice2=new createjs.Bitmap('./Assets/images/4.png');
                    this.addChild(this.dice2);
                    this.dice2.regX=-400;
                    this.dice2.regY=-100;
                    this.no2=new objects.Label('4',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no2);
                    this.no2.regX=-450;
                    this.no2.regY=5;
                    break;
                    case 5: 
                    this.dice2=new createjs.Bitmap('./Assets/images/5.png');
                    this.addChild(this.dice2);
                    this.dice2.regX=-400;
                    this.dice2.regY=-100;
                    this.no2=new objects.Label('5',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no2);
                    this.no2.regX=-450;
                    this.no2.regY=5;
                    break;
                    case 6: 
                    this.dice2=new createjs.Bitmap('./Assets/images/6.png');
                    this.addChild(this.dice2);
                    this.dice2.regX=-400;
                    this.dice2.regY=-100; 
                    this.no2=new objects.Label('6',"30px", "fantasy", "blue", 40, 350, true);
                    this.addChild(this.no2);
                    this.no2.regX=-450;
                    this.no2.regY=5;  
                    break;
                }
                
                


            });


        }
        
    }
    
}

