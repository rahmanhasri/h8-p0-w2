var nama = 'maman';
var peran = 'ksatria';
if (nama === '') {
  console.log("Nama harus diisi!");
} else {
  if (peran === '') {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
  } else if (peran === 'ksatria') {
    console.log("Selamat datang di Dunia Proxytia, " + nama + "\n"+ "Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!")
  } else if (peran === 'tabib') {
    console.log("Selamat datang di Dunia Proxytia, " + nama+ "\n"+ "Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
  } else {
    console.log("Selamat datang di Dunia Proxytia, " + nama+ "\n"+ "Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
  }
}
