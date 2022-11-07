const firebaseConfig = {
    apiKey: "AIzaSyBLkFa3c41FS2P-vWCZNWAKPi25McMeqbE",
    authDomain: "wis---pi.firebaseapp.com",
    databaseURL: "https://wis---pi-default-rtdb.firebaseio.com",
    projectId: "wis---pi",
    storageBucket: "wis---pi.appspot.com",
    messagingSenderId: "817130171313",
    appId: "1:817130171313:web:b319292e9a99528ad8ab90"
  };

  firebase.initializeApp(firebaseConfig);

  let BD = firebase.database().ref();
  
  document.querySelector(".boxFora").addEventListener("submit", enviarFormulario);
  
  function enviarFormulario(e){
    let nome = document.querySelector("#inputsNome").value;
    let senha = document.querySelector("#inputsSenha").value;
  
    salvarMensagem(nome, senha);
  
    alert("Enviado com sucesso")
  
      document.querySelector(".boxFora")
  }
  
  function salvarMensagem(nome, senha){
    let novoDado = BD.push();
  
    novoDado.set({
      nome: nome,
      senha: senha
    });
  };


  