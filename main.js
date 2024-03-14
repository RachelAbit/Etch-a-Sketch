const main_container = document.querySelector('.sketch-container');

const rand_color = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0').toUpperCase();
}

const num_divs = 1;

for(let i = 0; i < num_divs; i++){

    let sub_containers = document.createElement('div');
    
    sub_containers.style.width = '100px';
    sub_containers.style.height = '50px';
    sub_containers.style.backgroundColor = "blue";

    main_container.append(sub_containers);
}


