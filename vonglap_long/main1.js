let sout, i, j, a;
sout = "<table border='1' width='500' cellspacing='0' cellpadding='3'>";
i = j = 1;

while (i < 10) {
    sout = sout + "<tr>";
    while (j < 10) {
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++ ;

}
while (a<10){
    i * a
}
out = sout + "</table>";
document.write(sout);