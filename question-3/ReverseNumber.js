function reverse_a_number(n)   // declaring function reverse a number
{
	n = n + "";     // addding empty string to n
	return n.split("").reverse().join("");   //splitting the string n, reversing it and joining the string again
}


var n = prompt("Enter a Value", "0");
console.log(Number(reverse_a_number(n)));
