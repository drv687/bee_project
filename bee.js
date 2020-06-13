  function beeFunction(){
                        let beePickerNumber = document.getElementById("beepickernum").value;
                        
                        //if beepicker is 0
                        if (beePickerNumber == 0){
                        alert("Stop! Go back and pick a number!");
                        window.open("stop.png","_self"); 
                        }
                        if(beePickerNumber ==1){
                        alert("Here comes 1 bee!");
                        window.open("bee.png","_self");
                        }
                         if(beePickerNumber ==2){
                            alert("Here comes 2 bees!");
                           window.open("bee2.png","_self");
                            }
                          if(beePickerNumber ==3){
                                alert("Here comes 3 bees!");
                                window.open("bee3.png","_self");
                                }    
                                if(beePickerNumber ==4){
                                  alert("Here comes 4 bees!");
                                  window.open("bee4.png"),"_self";
                                    }         
                                   if(beePickerNumber ==5){
                                       alert("Here comes 5 bees");
                                       window.open("bee5.png","_self");
                                        } 
                                        return false;
                                    }
                                    function init(){
                                        document.getElementById('beeform').onsubmit = beeFunction;
                                    }
                                    window.onload = init;