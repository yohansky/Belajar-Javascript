console.log ('Javascript satu');

/**  var nama = prompt (' Masukkan nama anda');
const  x = 1; //nilai tidak bisa berubah (tidak bisa di timpa)
let y = 2; //nilai bisa berubah
alert('Selamat datang '+ nama)*/

//let adalah pembuatan variable
let nama_depan = 'yohan'
let nama_belakang = 'hubert'
let umur = 22
let tinggiBadan = 160.3 //double float
let pasangan = 1

//pengkondisian (if else)
//operator == adalah sama dnegan (=), jika != adalah tidak sama dengan (x=)
/**  if (pasangan == null) {
  pasangan = 'belum punya'
} else {
  pasangan = 'sudah punya'
}*/

//switch
/**  switch (pasangan) {
  case 1 : //jika var pasangan berangka 1
    pasangan = 'hanya punya 1'
    break
  case 2 : //jika var pasangan berangka 2
    pasangan = 'cuma punya 2'
    break
  case 3 : //jika var pasangan berangka 3
    pasangan = 'kebanyakan'
    break
  default:
    pasangan = 'belum punya'
    break
}*/

//operator
let saldo_awal = 50000
let saldo_tambahan = 80000
//operator penampung
const hutang = 30000
const saldoAkhir = saldo_awal + saldo_tambahan - hutang

const x = 3
const y = 2
const z = x * y

alert(`nilai x = ${x} x nilai y = ${y} maka hasilnya adalah nilai z = ${z}`)

const a = 9
const b = 3
const c = a / b

alert(`nilai a = ${a} x nilai b = ${b} maka hasilnya adalah nilai c = ${c}`)

//ini adalah cara lama
//alert ('Nama Depan kamu adalah '+ nama_depan +' Nama Belakang kamu adalah '+ nama_belakang +' Umur kamu adalah '+ umur)

//cara sederhana
alert (`Nama Depan kamu adalah ${nama_depan} Nama Belakang kamu ialah ${nama_belakang} umur saya adalah ${umur} tinggi badan saya adalah ${tinggiBadan} apakah saya sudah punya pasangan ? ${pasangan}`)

alert (
  `saldo awal saya sebesar Rp.${saldo_awal} dan saldo tambahann yang akan saya miliki sebesar Rp.${saldo_tambahan}, jadi total saldo yang saya miliki sebesar Rp.${saldoAkhir}`
)