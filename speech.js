window.SpeechRecognition=
 window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var p=document.createElement("p");
var word=document.getElementById("word");
word.appendChild(p);
console.log(p);

recognition.addEventListener("result", e=>{
    
    var transcript=[...e.results]
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join("");

    if(e.results[0].isFinal)
    {
        p=document.createElement("p");
        word.appendChild(p);
        p.innerHTML=transcript;
    }
});
recognition.addEventListener("end",recognition.start);
recognition.start();
