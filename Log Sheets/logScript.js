/* const keys = new URLSearchParams(window.location.search);
for (const [key, value] of keys.entries()) {
    console.log(keys.get(key))
}

if(keys.get("GC") != null) {
    document.getElementsByClassName("code")
} */
const keys = new URLSearchParams(window.location.search);
const codes = ['GC', 'OK'];
const ftfs = ['Name', 'Date'];

for(let x=0; x<2; x++) {
    if(keys.get(codes[x]) != null) {
        for(let i=0; i<8; i++) {
            if(document.getElementsByClassName('code')[i].innerText == codes[x]) {
                document.getElementsByClassName('code')[i].innerText = keys.get(codes[x])
            }
        }
    }
};

for(let x=0; x<2; x++) {
    if(keys.get(ftfs[x]) != null) {
        for(let i=0; i<8; i++) {
            if(document.getElementsByClassName('ftf')[i].innerText == ftfs[x]) {
                document.getElementsByClassName('ftf')[i].outerHTML =`\
                <th class="ftf" style="color: black;">${keys.get(ftfs[x])}</th>`
            }
        }
    }
};

print()