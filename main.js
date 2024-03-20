const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");

pass.addEventListener("input", () => {
	if (pass.value.length > 0) {
		msg.style.display = "block";
	} else {
		msg.style.display = "none";
	}
    if(pass.value.length < 4){
        str.innerHTML = 'Weak';
        pass.style.borderColor = 'red'
         str.style.color = "red"; 
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
		str.innerHTML = "Medium";
         pass.style.borderColor = "yellow";
         str.style.color = 'yellow' 
	}
    else if ( pass.value.length >= 8){
        str.innerHTML = 'Strong'
         pass.style.borderColor = "green";
          str.style.color = "green"; 
    }
})
