const keys = new URLSearchParams(window.location.search);
const codes = ['GC', 'OK'];
const ftfs = ['Name', 'Date'];
const logos = ['logoGC', 'logoOK', 'logoGAGB'];

for(let x=0; x<2; x++) {
	if(keys.get(codes[x]) != null || keys.get(codes[x]) != "") {
		for(let i=0; i<8; i++) {
			if(document.getElementsByClassName('code')[i].innerText == codes[x]) {
				document.getElementsByClassName('code')[i].innerText = keys.get(codes[x])
			}
		}
	}
};

for(let x=0; x<2; x++) {
	if(keys.get(ftfs[x]) != null || keys.get(ftfs[x]) != "") {
		for(let i=0; i<8; i++) {
			if(document.getElementsByClassName('ftf')[i].innerText == ftfs[x]) {
				document.getElementsByClassName('ftf')[i].outerHTML =`\
				<th class="ftf" style="color: black;">${keys.get(ftfs[x])}</th>`
			}
		}
	}
};

if(keys.get(logos[0]) == "false" && keys.get(logos[1]) == "false" && keys.get(logos[2]) == "false") {
	for(let i=0; i<4; i++) {
		document.getElementsByClassName('trImg')[i].style.display = "none";
	}
}

else {
	for(let x=0; x<3; x++) {
		if(keys.get(logos[x]) == "false") {
			for(let i=0; i<12; i++) {
				if(document.getElementsByTagName('img')[i].id == logos[x]) {
					document.getElementsByTagName('img')[i].style.display = "none"
				}
			}
		}
	}
};

print()