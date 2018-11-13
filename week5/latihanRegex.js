var paragraph =
`far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics,
a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!`

// console.log(paragraph.match(/far/g));
// console.log(paragraph.match(/[^a-z]/));

var str = 'belajar regex itu menyenangkan';
// console.log(str.split(/\s/));

var stringAwal = 'Regex itu sangat susah!';
stringHasil = stringAwal.replace(/susah/, 'mudah');
console.log(stringHasil);

var message = 'Regex itu Mudah!';
console.log(/[A-Z]/.test(message));
