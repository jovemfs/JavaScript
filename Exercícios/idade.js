let homem1, homem2, mulher1, mulher2, velho1, velho2, novo1, novo2;

homem1 = parseInt(prompt("Idade do homem 1: "))
homem2 = parseInt(prompt("Idade do homem 2: "))
mulher1 = parseInt(prompt("Idade da mulher 1: "))
mulher2 = parseInt(prompt("Idade da mulher 2: "))

if (homem1 > homem2 & mulher1 > mulher2) {
    alert("Homem 1 + Mulher 2 =" + (homem1 + mulher2)
    velho1 = homem1; novo1; homem1;
    velho2 = mulher1; novo2 = mulher2;
} else if (homem1 < homem2 & mulher1 > mulher2) {
    velho1 = homem2; novo1; homem1;
    velho2 = mulher1; novo2 = mulher2;
} else if (homem1 < homem2 & mulher1 < mulher2) {
    velho1 = homem2; novo1; homem1;
    velho2 = mulher2; novo2 = mulher1;
} else if (homem1 > homem2 & mulher1 > mulher2) {
    velho1 = homem1; novo1; homem2;
    velho2 = mulher2; novo2 = mulher1;
} else {
    alert("Sla oque rolou aqui.")
}

alert((velho1 + novo2) + (velho2 + novo1))
