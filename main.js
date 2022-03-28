class plats {
    constructor(nom,prix,image,description,type){
        this.nom=nom;
        this.prix=prix;
        this.image=image;
        this.description=description;
        this.type=type;
    }
}
/*------------------------------------------------------------------------*/
function appelAccomp(){
    let acFrite =new plats("Portion de Frites",2 ,"image","description","frite");
    let acGrandeFrite =new plats("Grande Portion de Frites",4 ,"image","description","frite");
    let assFrite =new plats("Assiète de Frites",5 ,"image","description","frite");
    let acNugget5 =new plats("Nuggets x5",4 ,"image","description","nugg");
    let acNugget9 =new plats("Nuggets x9",6 ,"image","description","nugg");
    let boxKebab =new plats("Box Kebab frites",5 ,"image","description","box");
    let boxKebabBul =new plats("Box Kebab bulgur",5.5 ,"image","description","box");
    let boxNugg5 =new plats("Box Nuggets x5",5 ,"image","description","box");
    let boxNugg9 =new plats("Box Nuggets x9",7 ,"image","description","box");
    
    
    let tabAccomp= [ 
        acFrite,
        acGrandeFrite,
        assFrite,
        acNugget5,
        acNugget9,
        boxKebab,
        boxKebabBul,
        boxNugg5,
        boxNugg9,
    ];

    let sect = document.querySelector('section.cont-section');
    let chaineHTML="<h1 align=center>Nos Assiètes</h1><table width=98%>"
    let nbr=0;
    tabAccomp.forEach((item) =>{
        if (nbr%2==0){
            chaineHTML+= "<tr>";
        }
        chaineHTML+= `<th align="right" width=42%>${item.nom}</th><td align="right" width=8%>${item.prix}€</td>`;
        if (nbr%2!=0){
            chaineHTML+= "</tr>";
        }
        nbr++;
    });
    chaineHTML+= "</table>";
    sect.innerHTML=chaineHTML;
};

/*------------------------------------------------------------------------*/
function appelAssiette(){
    let asVege =new plats("Assiètte Végétarienne",6 ,"image","description","assiete");
    let asPoulet =new plats("Assiètte Kebab Poulet",9 ,"image","description","assiete");
    let asBoeuf =new plats("Assiètte Kebab Boeuf",9 ,"image","description","assiete");
    let asMixte =new plats("Assiètte Kebab Mixte",9.5 ,"image","description","assiete");
    let asMerguez =new plats("Assiètte Merguez",9 ,"image","description","assiete");
    let asSteackHache =new plats("Assiètte Steack Haché",9 ,"image","description","assiete");
    let asKofte =new plats("Assiètte Köfte",10 ,"image","description","assiete");
    let asAdana =new plats("Assiètte Adana",10 ,"image","description","assiete");
    let asEscalope =new plats("Assiètte Escalope",9 ,"image","description","assiete");
    let asEscCreme =new plats("Assiètte Escalope à la crème",12 ,"image","description","assiete");
    let asRoyale =new plats("Assiètte Royale",14 ,"image","Merguez, boeuf, poulet, köfte et adana","assiete");
    let asCotelette =new plats("Assiètte côtelette",15 ,"image","description","assiete");
    let asFauxFillet =new plats("Assiètte Faux-fillet",15 ,"image","description","assiete");
        
    let tabAssiete= [ 
        asVege,
        asPoulet,
        asBoeuf,
        asMixte,
        asMerguez,
        asSteackHache,
        asKofte,
        asAdana,
        asEscalope,
        asEscCreme,
        asRoyale,
        asCotelette,
        asFauxFillet,
    ];

    let sect = document.querySelector('section.cont-section');
    let chaineHTML="<h1 align=center>Nos Assiètes</h1><table width=98%>"
    let nbr=0;
    tabAssiete.forEach((item) =>{
        if (nbr%2==0){
            chaineHTML+= "<tr>";
        }
        chaineHTML+= `<th align="right" width=42%>${item.nom}</th><td align="right" width=8%>${item.prix}€</td>`;
        if (nbr%2!=0){
            chaineHTML+= "</tr>";
        }
        nbr++;
    });
    chaineHTML+= "</table>";
    sect.innerHTML=chaineHTML;
};

/*------------------------------------------------------------------------*/
function appelPizza(){
    let pizMarguerite =new plats("Marguerite",6 ,"image","description","pizza");
    let pizAlsacienne =new plats("Alsacienne",7 ,"image","description","pizza");
    let piz3Fromage =new plats("3 Fromages",7 ,"image","description","pizza");
    let pizReine =new plats("Reine",7.5 ,"image","description","pizza");
    let pizPaysanne =new plats("Paysanne",7.5 ,"image","description","pizza");
    let pizForestiere =new plats("Forestière",8 ,"image","description","pizza");
    let pizThon =new plats("Thon",8 ,"image","description","pizza");
    let pizVegetarienne =new plats("Végétarienne",8 ,"image","description","pizza");
    let piz4Fromage =new plats("4 Fromages",8 ,"image","description","pizza");
    let pizNapo =new plats("Napolitaine",8.5 ,"image","description","pizza");
    let piz4Saison =new plats("4 Saisons",8.5 ,"image","description","pizza");
    let pizCabri =new plats("Cabri",8.5 ,"image","description","pizza");
    let pizFruitMer =new plats("Fruit de Mer",8.5 ,"image","description","pizza");
    let pizMex =new plats("Mexicaine",8.5 ,"image","description","pizza");
    let pizMerguez =new plats("Merguez",8.5 ,"image","description","pizza");
    let pizBolognaise =new plats("Bolognaise",8.5 ,"image","description","pizza");
    let pizChicken =new plats("Chicken",9.5 ,"image","description","pizza");
    let pizExotique =new plats("Exotique",9.5 ,"image","description","pizza");
    let pizKebab =new plats("Pizza Kebab",9.5 ,"image","description","pizza");
    let pizChef =new plats("Pizza du Chef",9.5 ,"image","description","pizza");
    let pidKasarli =new plats("Pide Kasarli",6.5 ,"image","description","pide");
    let pidSucuk =new plats("Pide Sucuk",7.5 ,"image","description","pide");
    let pidSebzeli =new plats("Pide Sebzeli",8 ,"image","description","pide");
    let pidEpinard =new plats("Pide Epinard",8.5 ,"image","description","pide");
    let pidKiymali =new plats("Pide Kiymali",8,"image","description","pide");
    let pidKarisik =new plats("Pide Kasarli",9 ,"image","description","pide");
    
    let tabPiz= [ 
        pizMarguerite,
        pizAlsacienne,
        piz3Fromage,
        pizReine,
        pizPaysanne,
        pizForestiere,
        pizThon,
        pizVegetarienne,
        piz4Fromage,
        pizNapo,
        piz4Saison,
        pizCabri,
        pizFruitMer,
        pizMex,
        pizMerguez,
        pizBolognaise,
        pizChicken,
        pizExotique,
        pizKebab,
        pizChef,
        pidKasarli,
        pidSucuk,
        pidSebzeli,
        pidEpinard,
        pidKiymali,
        pidKarisik,
    ];

    let sect = document.querySelector('section.cont-section');
    let chaineHTML="<h1 align=center>Pizzas et Pides</h1><table width=98%>"
    let nbr=0;
    tabPiz.forEach((item) =>{
        if (nbr%2==0){
            chaineHTML+= "<tr>";
        }
        chaineHTML+= `<th align="right" width=42%>${item.nom}</th><td align="right" width=8%>${item.prix}€</td>`;
        if (nbr%2!=0){
            chaineHTML+= "</tr>";
        }
        nbr++;
    });
    chaineHTML+= "</table>";
    sect.innerHTML=chaineHTML;
};
/*------------------------------------------------------------------------*/
function appelSandwich(){
    let donerPoulet = new plats("Döner Kebab Poulet", 4.5,"image","description","sandwich");
    let donerBoeuf = new plats("Döner Kebab Boeuf", 4.5,"image","description","sandwich");
    let yufkaPoulet = new plats("Yufka Poulet", 4.5,"image","description","sandwich");
    let donerMixte = new plats("Döner Kebab Mixte", 4.5,"image","description","sandwich");
    let entier = new plats("Entier Poulet ou Boeuf", 9,"image","description","sandwich");
    let merguez = new plats("Merguez", 5, "image","description","sandwich");
    let kofte = new plats("Köfte", 5, "image","description","sandwich");
    let escalope = new plats("Escalope", 5.5 ,"image","description","sandwich");
    let americain = new plats("Americain", 5 ,"image","description","sandwich");
    let yufkaBoeuf = new plats("Yufka Boeuf", 4.5, "image","description","sandwich");
    let yufkaMixte = new plats("Yufka Mixte", 4.5, "image","description","sandwich");
    let entierMixte = new plats("Entier Mixte", 9 ,"image","description","sandwich");
    let tunisien = new plats("Tunisien", 5.5 ,"image","description","sandwich");
    let yufkaKofte = new plats("Yufka Köfte", 5 ,"image","description","sandwich");
    let yufkaVeget = new plats("Yufka Vegetarien", 4.5, "image","description","sandwich");
    let yufkaAdana = new plats("Yufka Adana", 5.5, "image","description","sandwich");
    
    let tabSand= [ 
        donerPoulet,
        yufkaPoulet,
        donerBoeuf,
        yufkaBoeuf,
        donerMixte,
        yufkaMixte,
        entier,
        entierMixte,
        merguez,
        tunisien,
        kofte,
        yufkaKofte,
        escalope,
        yufkaVeget,
        americain,
        yufkaAdana,
    ];
    let sect = document.querySelector('section.cont-section');
    let chaineHTML="<h1 align=center>Nos Sandwichs</h1><table width=98%>"
    let nbr=0;
    tabSand.forEach((item) =>{
        if (nbr%2==0){
            chaineHTML+= "<tr>";
        }
        chaineHTML+= `<th align="right" width=42%>${item.nom}</th><td align="right" width=8%>${item.prix}€</td>`;
        if (nbr%2!=0){
            chaineHTML+= "</tr>";
        }
        nbr++;
    });
    chaineHTML+= "</table>";
    sect.innerHTML=chaineHTML;
};
/*------------------------------------------------------------------------*/

if(document.URL.indexOf("sandwich")!=-1){
    appelSandwich();
} else if (document.URL.indexOf("pizza")!=-1){
    appelPizza();
    } else if (document.URL.indexOf("assiette")!=-1){
        appelAssiette();
        } else if (document.URL.indexOf("accomp")!=-1){
        appelAccomp();
        };


/*------------------------------------------------------------------*/

// function navi()
// {
//     document.write('<ul><li><a href="index.html">Accueil</a></li><li><a href="sandwich.html">Sandwichs</a></li><li><a href="pizzaPide.html">Pizzas et Pides</a></li><li><a href="assiette.html">Assièttes</a></li><li><a href="accomp.html">Accompagnements</a></li><li><a href="contact.html">Contact</a></li></ul>');
// }

/*------------------------------------------------------------------*/
// Menu hamburger

const toggleButton = document.getElementById
('toggle-button');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', function show(){
    sideBar.classList.toggle('active');

});


const navigation=document.querySelector("nav.cont-nav");
navigation.innerHTML=('<ul><li><a href="index.html">Accueil</a></li><li><a href="sandwich.html">Sandwichs</a></li><li><a href="pizzaPide.html">Pizzas et Pides</a></li><li><a href="assiette.html">Assièttes</a></li><li><a href="accomp.html">Accompagnements</a></li><li><a href="contact.html">Contact</a></li></ul>');
