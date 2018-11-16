// menurun

var n = 5;

for (var i = 0; i < n; i++) {
  var star = "";

  star += "*";

  console.log(star);
}

// persegi pejal

var n = 5;

for (var i = 0; i < n; i++) {
  var star = "";

  for (var j = 0; j < n; j++) {
    star += "*";
  }

  console.log(star);
}

// segitiga siku

var n = 5;

for (var i = 0; i <= n; i++) {
  var star = "";

  for (var j = 0; j < i; j++) {
    star += "*";
  }

  console.log(star);
}

// persegi berongga

console.log("\n");

var n = 5;

for (var i = 0; i < n; i++) {
  var star = "";

  for (var j = 0; j < n; j++) {
    if (j == 0 || j == n - 1 || i == 0 || i == n - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }

  console.log(star);
}

//segitiga siku mirrored horizontally

console.log("\n");

var n = 5;

for (var i = n - 1; i >= 0; i--) {
  var star = "";

  for (var j = 0; j < 5; j++) {
    if (j < i) {
      star += " ";
    } else {
      star += "*";
    }
  }

  console.log(star);
}

//segitiga siku mirrored vertically

console.log("\n");

var n = 5;

for (var i = n; i > 0; i--) {
  var star = "";

  for (var j = 1; j <= n; j++) {
    if (j <= i) {
      star += "*";
    } else {
      star += " ";
    }
  }

  console.log(star);
}

//segitiga siku mirored diagonally

console.log("\n");

var n = 5;

for (var i = 1; i <= n; i++) {
  var star = "";

  for (var j = 1; j <= n; j++) {
    if (j < i) {
      star += " ";
    } else {
      star += "*";
    }
  }

  console.log(star);
}

// segitiga samakaki

console.log("\n");

var n = 5;

for (var i = 0; i < 5; i++) {
  var star = "";

  for (var j = 1; j <= n * 2 - 1; j++) {
    if (j < n - i || j > n + i) {
      star += " ";
    } else {
      star += "*";
    }
  }

  console.log(star);
}

// segitiga samakaki terbalik

console.log("\n");

var n = 5;

for (i = n - 1; i >= 0; i--) {
  var star = "";

  for (j = 1; j <= n * 2 - 1; j++) {
    if (j < n - i || j > n + i) {
      star += " ";
    } else {
      star += "*";
    }
  }

  console.log(star);
}

//diamond

console.log("diamond" + "\n");

var n = 5;

for (i = 1; i <= n * 2 - 1; i++) {
  var star = "";

  for (j = 1; j <= n * 2 - 1; j++) {
    if (j <= Math.abs(n - i) || j >= n * 2 - Math.abs(n - i)) {
      star += " ";
    } else {
      star += "*";
    }
  }

  console.log(star);
}

// silang bawah kanan

console.log("\n");

var n = 5;

for (i = 1; i <= n; i++) {
  var star = "";

  for (j = 1; j <= i; j++) {
    if (j < i) {
      star += " ";
    } else {
      star += "*";
    }
  }

  console.log(star);
}

//silang bawah kiri

console.log("\n");

var n = 5;

for (i = n; i > 0; i--) {
  var star = "";

  for (j = 1; j <= i; j++) {
    if (j < i) {
      star += " ";
    } else {
      star += "*";
    }
  }

  console.log(star);
}

// huruf X

console.log("\n" + "huruf x");

var n = 9;

for (i = n; i > 0; i--) {
  var star = "";
  for (j = 1; j <= n; j++) {
    if (j == n + 1 - i || j == i) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

// Segitiga sama kaki vertikal
console.log("\n" + "Segitiga sama kaki vertikal");

var n = 5;

for (i = 1; i <= n * 2 - 1; i++) {
  var bintang = "";
  for (j = 1; j <= n; j++) {
    if (j > n - Math.abs(n - i)) {
      bintang += " ";
    } else {
      bintang += "*";
    }
  }
  console.log(bintang);
}

//segitiga sama kaki vertikal terbalik
console.log("\n" + "Segitiga sama kaki vertikal terbalik");

var n = 5;

for (i = 1; i <= n * 2 - 1; i++) {
  var bintang = "";
  for (j = 1; j <= n; j++) {
    if (j > Math.abs(n - i)) {
      bintang += "*";
    } else {
      bintang += " ";
    }
  }
  console.log(bintang);
}

// diamond kosong
console.log("\n" + "diamond kosong");
var n = 5;
for (i = 1; i <= n * 2 - 1; i++) {
  var bintang = "";
  for (j = 1; j <= n * 2 - 1; j++) {
    if (j === Math.abs(n - i) + 1 || j === n * 2 - Math.abs(n - i) - 1) {
      bintang += "*";
    } else {
      bintang += " ";
    }
  }
  console.log(bintang);
}
