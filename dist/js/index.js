function update(){container.innerText=words[current].substr(0,length)}function deleteWord(){length?(length-=1,update(),window.setTimeout(deleteWord,70)):(current=(current+1)%words.length,writeWord())}function writeWord(){length<words[current].length?(length+=1,update(),window.setTimeout(writeWord,100+80*Math.random())):window.setTimeout(deleteWord,interval)}const container=document.getElementById("words"),words=[container.innerText,...container.dataset.words.split(",")],interval=5e3;let current=0,length=words[current].length;window.setTimeout(deleteWord,interval);