function check(){
    let word = document.getElementById("text-input").value;
    let alphanum = "";
    for(let i = 0; i < word.length; i++){
        if (word[i].match(/[a-zA-Z0-9]/)){
            alphanum += word[i]
        }; 
    };
    alphanum = alphanum.toUpperCase()
    let strRev =  alphanum.split('').reverse().join('');
    if (alphanum == strRev){
        document.getElementById("result").innerText = word += ' is a palindrome'
    };
};
