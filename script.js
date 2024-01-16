
$("button").click(
function love(){
        var n = Math.random();
           n = n * 100;
        n = Math.floor(n) + 1;
    
    
        if(n<50){
            alert('KUCH NAHI HOGA TERA BHSDIKE VAPIS CHALA JA , TERA SCORE SIRF ' + n +"HE");
        }
        else{
            alert('ARE WAH LODU ' + n +' SCORE AYA RE TERA');
            
        }
    
    }
    
    );