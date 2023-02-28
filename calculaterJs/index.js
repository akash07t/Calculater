    function valuebutton(n){
    calulaterform.screen.value += n.value;
    
    }
    function Clear(){
        calulaterform.screen.value = null;
        //console.log("i am clear")
    }
    function calculate(){
        calulaterform.screen.value = eval( calulaterform.screen.value ) ;
    }