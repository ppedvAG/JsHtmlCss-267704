function getBiggerNumber(n1, n2) {
    if (n1>n2)
        return n1
    else if (n2>n1)
        return n2
    else
        return NaN
}

biggerNumber.addEventListener("submit", function(event) {
    event.preventDefault();
    output.innerHTML = getBiggerNumber(number1.value, number2.value)
})
