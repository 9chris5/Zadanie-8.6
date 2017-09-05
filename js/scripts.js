var a=prompt('Podaj pierwszą liczbę'),
    b=prompt('Podaj drugą liczbę'),
    value=(a*a)+(2*a*b)-(b*b);

if (value>0) {
    console.log('Wynik dodatni');
} else if (value<0) {
    console.log('Wynik ujemny');
} else {
    console.log('Wynik równy zeru');
}