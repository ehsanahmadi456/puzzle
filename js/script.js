let number_mvs = 0;

let itemImg = document.getElementById("puzzle").children;

function start_game() {
    let top_position = new Array();
    while (top_position.length < 16) {
        let numero = Math.round(Math.random() * 100);
        if ((numero == 11) || (numero == 12) || (numero == 13) || (numero == 14) || (numero == 21) || (numero == 22) || (numero == 23) || (numero == 24) || (numero == 31) || (numero == 32) || (numero == 33) || (numero == 34) || (numero == 41) || (numero == 42) || (numero == 43) || (numero == 44)) {
            if (!top_position.includes(numero))  {
                top_position[top_position.length] = numero;
            }
        }
    }

    function selectImg(item, img) {
        document.getElementById(item).textContent = img;
        document.getElementById(item).style.background = 'url(../image/p'+img+'.jpg)';
        document.getElementById(item).style.backgroundSize = 'cover';
        document.getElementById(item).style.backgroundRepeat = 'no-repeat';
        document.getElementById(item).style.backgroundPosition = 'center';
    }

    for(let i=0;i<top_position.length;i++) {
        selectImg(itemImg[i].id, top_position[i])
    }

    document.getElementById('change').textContent = "Moves: 0"
}

function move_Item(whiteItem, moveItem) {
    if (document.getElementById(whiteItem).textContent == '11') {
        let temp_val = document.getElementById(whiteItem).textContent;
        document.getElementById(whiteItem).textContent = document.getElementById(moveItem).textContent;
        document.getElementById(moveItem).textContent = temp_val;

        document.getElementById(moveItem).style.background = 'url(../image/p'+document.getElementById(moveItem).textContent+'.jpg)';
        document.getElementById(whiteItem).style.background = 'url(../image/p'+document.getElementById(whiteItem).textContent+'.jpg)';
        number_mvs++;
        document.getElementById('change').textContent = "Moves: "+number_mvs;
    }
}

function resultGame() {
    const type1 = document.getElementById("p11").textContent;
    const type2 = document.getElementById("p12").textContent;
    const type3 = document.getElementById("p13").textContent;
    const type4 = document.getElementById("p14").textContent;
    const type5 = document.getElementById("p21").textContent;
    const type6 = document.getElementById("p22").textContent;
    const type7 = document.getElementById("p23").textContent;
    const type8 = document.getElementById("p24").textContent;
    const type9 = document.getElementById("p31").textContent;
    const type10 = document.getElementById("p32").textContent;
    const type11 = document.getElementById("p33").textContent;
    const type12 = document.getElementById("p34").textContent;
    const type13 = document.getElementById("p41").textContent;
    const type14 = document.getElementById("p42").textContent;
    const type15 = document.getElementById("p43").textContent;
    const type16 = document.getElementById("p44").textContent;

    if ( type1 == "11" && type2 == "12" && type3 == "13" && type4 == "14" && type5 == "21" && type6 == "22" && type7 == "23" && type8 == "24" && type9 == "31" && type10 == "32" && type11 == "33" && type12 == "34" && type13 == "41" && type14 == "42" && type15 == "43" && type16 == "44") {
        return true;
    }
    return false
}

function closeResult() {
    document.getElementById("showResult").id = 'hideResult'
}

function switChing(cell) {

    if (document.getElementById(cell).textContent != '11') {
        switch (cell) {
            case "p11":
                move_Item('p12', 'p11');
                move_Item('p21', 'p11');
                if(resultGame()) {
                    document.getElementById("hideResult").id = 'showResult';
                }
                break;
            case "p12":
                move_Item('p11', 'p12');
                move_Item('p22', 'p12');
                move_Item('p13', 'p12');
                break;
            case "p13":
                move_Item('p12', 'p13');
                move_Item('p23', 'p13');
                move_Item('p14', 'p13');
                break;
            case "p14":
                move_Item('p13', 'p14');
                move_Item('p24', 'p14');
                break;
            case "p21":
                move_Item('p11', 'p21');
                move_Item('p22', 'p21');
                move_Item('p31', 'p21');
                break;
            case "p22":
                move_Item('p12', 'p22');
                move_Item('p21', 'p22');
                move_Item('p23', 'p22');
                move_Item('p32', 'p22');
                break;
            case "p23":
                move_Item('p13', 'p23');
                move_Item('p22', 'p23');
                move_Item('p24', 'p23');
                move_Item('p33', 'p23');
                break;
            case "p24":
                move_Item('p14', 'p24');
                move_Item('p23', 'p24');
                move_Item('p34', 'p24');
                break;
            case "p31":
                move_Item('p21', 'p31');
                move_Item('p32', 'p31');
                move_Item('p41', 'p31');
                break;
            case "p32":
                move_Item('p22', 'p32');
                move_Item('p31', 'p32');
                move_Item('p33', 'p32');
                move_Item('p42', 'p32');
                break;
            case "p33":
                move_Item('p23', 'p33');
                move_Item('p32', 'p33');
                move_Item('p34', 'p33');
                move_Item('p43', 'p33');
                break;
            case "p34":
                move_Item('p24', 'p34');
                move_Item('p33', 'p34');
                move_Item('p44', 'p34');
                break;
            case "p41":
                move_Item('p31', 'p41');
                move_Item('p42', 'p41');
                break;
            case "p42":
                move_Item('p32', 'p42');
                move_Item('p41', 'p42');
                move_Item('p43', 'p42');
                break;
            case "p43":
                move_Item('p33', 'p43');
                move_Item('p42', 'p43');
                move_Item('p44', 'p43');
                break;
            case "p44":
                move_Item('p34', 'p44');
                move_Item('p43', 'p44');
                break;
        }
    }
}