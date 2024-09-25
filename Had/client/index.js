document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs des champs
    const formData = {
      nom: document.getElementById("name").value,
      prenom: document.getElementById("prenom").value,
      email: document.getElementById("email").value,
      classe: document.getElementById("classe").value,
      ecole: document.getElementById("ecole").value,
      telephone: document.getElementById("telephone").value,
      password: document.getElementById("password").value,
      appointmentDate: document.getElementById("appointmentDate").value,
      appointmentTime: document.getElementById("appointmentTime").value,
    };

    // Réinitialiser les messages d'erreur
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = ""; // Efface les messages précédents

    // Envoyer les données au serveur
    fetch("https://api-dusky-eta-47.vercel.app/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }
        return response.json();
      })
      .then((data) => {
        // Afficher le message de succès
        messageBox.innerHTML = "<p>Inscription réussie !</p>";
        document.getElementById("registrationForm").reset(); // Réinitialiser le formulaire
      })
      .catch((error) => {
        console.error("Erreur:", error);
        // Afficher le message d'erreur
        messageBox.innerHTML = "<p>Erreur lors de l'inscription.</p>";
      });
  });
