const kleur_aanpassen = function() {
    let title = "title";
    let element = document.getElementById(title);
    console.log(element)
    element.style.color = "#FF0000";
    element.innerHTML = "Inhoud aangepast";
    }
    
    kleur_aanpassen();