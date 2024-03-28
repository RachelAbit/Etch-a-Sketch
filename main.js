const main_container = document.querySelector('.sketch-container');

const color = '#FFFF';

const num_divs = prompt("Enter a number of boxes: ");


function main_prog(){
    for(let i = 0; i < num_divs; i++){

        let sub_container1 = document.createElement('div');
        sub_container1.style.width = '90px';
        sub_container1.style.height = '33px';
        sub_container1.style.display = "flex";
        sub_container1.style.backgroundColor = color;
        sub_container1.style.margin = "auto";
        sub_container1.style.border = '1px solid red';
    
    
        sub_container1.addEventListener('mouseover', () =>{
            sub_container1.style.backgroundColor = "#97E7E1";
        })
    
        
    
        main_container.append(sub_container1);
    }
}


main_prog();