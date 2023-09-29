document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbarMenu = document.getElementById("navbar-menu");

    menuToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
    });
});

// header add active class
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("header nav ul li");

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Ta bort klassen 'active' från alla li-element
            menuItems.forEach((menuItem) => {
                menuItem.classList.remove("active");
            });

            // Lägg till klassen 'active' på det klickade li-elementet
            item.classList.add("active");
        });
    });
});




var accordion = document.getElementsByClassName('accordion-header');

function toggleAccordion() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;

    if (content.style.display == 'flex') {
        content.style.display = 'none';
    } else {
        content.style.display = 'flex';
    }
}

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', toggleAccordion);
}

// Lägg till en mediafråga för att kontrollera skärmstorleken
var screenSizeQuery = window.matchMedia("(max-width: 767px)");

// Funktion som körs när skärmstorleken ändras
function handleScreenSizeChange(e) {
    if (e.matches) {
        // Skärmstorleken är mindre än 768px, så vi aktiverar händelselyssnaren
        for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', toggleAccordion);
        }
    } else {
        // Skärmstorleken är 768px eller större, så vi tar bort händelselyssnaren
        for (let i = 0; i < accordion.length; i++) {
            accordion[i].removeEventListener('click', toggleAccordion);
        }
    }
}

// Lägg till en händelselyssnare för att övervaka skärmstorleksändringar
screenSizeQuery.addListener(handleScreenSizeChange);

// Kör initialt för att kontrollera skärmstorleken vid sidbelastning
handleScreenSizeChange(screenSizeQuery);


// kontroll veiw hight
function kontrolleraViewHöjd() {
    var viewHöjd = window.innerHeight; // Hämta höjden på fönstret/viewet
    
    // Här kan du lägga till din egen logik baserat på viewens höjd
    if (viewHöjd < 950) {
      document.body.style.display = 'flex';
      document.body.style.flexDirection = 'column';
      document.body.style.justifyContent = 'space-between';
      document.body.style.minHeight = '100vh';
    } else {
      console.log("Viewet är tillräckligt stort.");
      // Återställ body-stilen om höjden är tillräckligt stor
      document.body.style.display = '';
      document.body.style.flexDirection = '';
    }
  }
  
  // Anropa funktionen när sidan laddas eller när fönstret ändras
  window.addEventListener("resize", kontrolleraViewHöjd);
  kontrolleraViewHöjd(); // Anropa funktionen när sidan laddas för första gången
  



