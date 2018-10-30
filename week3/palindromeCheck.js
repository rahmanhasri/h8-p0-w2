function palindrome(number){
var final = 0;
var	temp = number;
		while (number>0){
    rem = number%10;
		number = parseInt(number/10);
		final = final*10+rem;
	}
  console.log(final, temp)
  if (final == temp){
    return 'palindrome'
  } else return 'not palindrome'
}

palindrome(1001);
