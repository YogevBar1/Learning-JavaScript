function testMe(value)
{
    return value != value;
}
console.log(testMe(100));
console.log(testMe(200));
console.log(testMe("Hello"));
console.log(testMe(Nan));