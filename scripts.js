document.addEventListener('DOMContentLoaded',function(){
    
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Sing!');
    button.appendChild(buttonText);
    document.body.appendChild(button);

    button.addEventListener('click',function(){
        
        let friends = ['matt','will','irtaza','mutu','charlie'];

        for(let i= 0;i< friends.length;i++){
            let div = document.createElement('div');
            div.className = 'friend';
            let h1 = document.createElement('h1');
            div.innerHTML = "<h3>" + friends[i].toUpperCase() + "</h3>"
            
            
            for(let j=99;j>0;j--)
            {
                let p = document.createElement('p');
               p.innerHTML =  j + "lines of code in the file" + j + "lines of code"  + (friends[i]) + "strikes one out, clears it all out," + (j - 1) + " lines of code in the file";
                div.appendChild(p);
            }
            document.body.appendChild(div);

        }
 
    })

})


       // var friends = ['ali','will','matt','mutu','moon'];
    // for(let i = 0;i<friends.length;i++)
    // {
    //     for(let j=99;j>0;j--)
    //     {
    //         console.log([j] + 'lines of code in the file' + [j] + "lines of code"  + (friends[i]) + ' strikes one out, clears it all out, ' + ([j] - 1) + ' lines of code in the file');
    //     }
        
    // }