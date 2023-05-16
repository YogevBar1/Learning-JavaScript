function maxFrom3Nums(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        document.write(`Max: ${num1}`);

    else if (num2 > num3) {
        document.write(`Max: ${num2}`);

    }
    else
        document.write(`Max: ${num3}`);
    document.write("<br>");
}

maxFrom3Nums(32,34,35);
maxFrom3Nums(332,344,352);
maxFrom3Nums(342,344,435);
maxFrom3Nums(342,3444,435);
maxFrom3Nums(3142,344,435);

