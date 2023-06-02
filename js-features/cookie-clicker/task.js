const click = document.getElementById ('clicker__counter');
const coockie = document.getElementById ('cookie');

coockie.onclick = function () {

    if (coockie.width == 200){
        coockie.width = 250;
        coockie.height = 190;
        click.textContent ++;
    }

    else if (coockie.width == 250){
        coockie.width = 200;
        coockie.height = 180;
        click.textContent ++;
    }
}
