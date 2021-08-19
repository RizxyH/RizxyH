var a = '';
var x;
x = parseInt(prompt('Silahkan masukan ketinggian baris segitiga yang diinginkan: '));

if(x>0) {
				alert('Ketinggian baris segitiga yang anda masukan adalah ' + x);
				
} else {
				alert('Format yang anda masukan salah!');
}

document.write('Ini merupakan projek Javascript untuk membuat pola segitiga. <br><br><br>');
for (var i=0; i < x; i++) {
			
			for(var j=0; j <= i; j++){
								a += '*';
				}
				
				a += '<br>';
}

var y = 2*x;

for (var k=y; k > x; k--) {
				for (var l=x; l < k; l++){
								a += '*';
				}
				
				a+= '<br>';
}

document.write(a);