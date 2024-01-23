let btn = document.getElementById('generate_text');
let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    let url = "https://pokeapi.co/api/v2/pokemon/" + id + "";
    // console.log(url);
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        //all data value shows here
        console.log("Number1 ", data); // 1
        console.log("-------------------EXAMPLE OF ABILITIES------------------------")
        console.log("Number2 ", data.abilities); //2
        console.log("Number3 ", data.abilities[0].ability); //3
        console.log("Number4 ", data.abilities[0].ability.name);//4
        console.log("Number5 ", data.abilities[0].ability.url);//5
        data.abilities.forEach((value, index, array) => {
        console.log('Number6', value);
        }); //6
        let keyys = data.abilities[0].ability;
        let result1 = Object.keys(keyys);
        console.log("Number7", result1); // 7
        let valuess = data.abilities[0].ability;
        let result2 = Object.values(valuess);
        console.log("Number8", result2); // 8
        console.log("-------------------END EXAMPLE OF ABILITIES------------------------")
        console.log("-------------------ENDS------------------------")



        console.log("-------------------EXAMPLE OF FORMS------------------------")
        console.log("Number1", data.forms);
        console.log("Number2", data.forms[0]);
        console.log("Number3", data.forms[0].name);
        console.log("Number4", data.forms[0].url);
        let formsKey = Object.keys(data.forms[0]);
        console.log("Number5 and keys", formsKey);
        let formsValues = Object.values(data.forms[0]);
        console.log("Number6 and Values", formsValues)
        console.log("-------------------END EXAMPLE OF FORMS------------------------")
        console.log("-------------------ENDS------------------------")








    });
};

btn.addEventListener('click', function (event) {
    getPokeData();
});




