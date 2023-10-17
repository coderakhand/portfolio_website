function removeflip() {
  document.getElementById("instagram").classList.remove("fa-flip");
}
function avtaar2real(){
document.getElementsByClassName("my-image")[0].src="akhand-profile.png";
document.getElementById("akhand-image").classList.remove("avtaar-image");
document.getElementById("akhand-image").classList.add("real-image");
}
function real2avtaar(){
  document.getElementsByClassName("my-image")[0].src="akhand.jpg";
  document.getElementById("akhand-image").classList.remove("real-image");
  document.getElementById("akhand-image").classList.add("avtaar-image"); 
}