function addUser() {
      p1 = document.getElementById("player1name").value;
      p2 = document.getElementById("player2name").value;
      localStorage.setItem("p1n", p1);
      localStorage.setItem("p2n", p2);
      window.display = "https://sreehanrm20009.github.io/Project92G";
}
