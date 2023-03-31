    var b = prompt("which table you want to print");
    var a = prompt("give table length");
    let arr = Array(parseInt(a)).fill().map( function(_ , i){
        return i + 1;
    } );

    arr.forEach(function( number , index ){
        document.write( b + " x " + number + " = " + b * number + "<br>" );
        
    })
