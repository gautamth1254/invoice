function total()
{
        var num1 = parseFloat(document.getElementById("hours").value);
        var num2 = parseFloat(document.getElementById("unit-price").value);
        document.getElementById("total").innerHTML = num1 * num2;
        document.getElementById("final").innerHTML = num1 * num2;

}


