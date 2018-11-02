function deretAngka(n) {
  for (i=n;i>0;i--){
    let angka = ''
    for (j=1;j<=i;j++){
      angka = angka + j
    }
    console.log(angka)
  }
}

deretAngka(5);
