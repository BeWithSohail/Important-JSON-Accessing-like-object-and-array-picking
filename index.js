let searchBox = document.getElementById("searchbox");
let btn = document.getElementById('generate_text');
let resultBox = document.getElementById('resultBox');
let loader = document.getElementById("loader");


let getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    console.log("Number1 ", data); // 1
    let url = "https://pokeapi.co/api/v2/pokemon/" + id + "";
    // console.log(url);
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        //all data value shows here
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

        console.log("-------------------EXAMPLE OF GAME INDICES------------------------")
        console.log("Number1", data.game_indices);
        let game_indicesArray = data.game_indices;
        // for (let i = 0; i < game_indicesArray.length; i++) {
        //     console.log("number2", game_indicesArray[i]);
        // };
        let game_indicesArray2 = data.game_indices;
        game_indicesArray2.forEach((item, index) => {
            // Check if the 'version' property exists in the object
              item.hasOwnProperty('version');
              // Access the 'name' property of the 'version' object
              const versionName = item.version.name;
              console.log(` Version Name: ${versionName}`);
          });
        
        console.log("-------------------END EXAMPLE OF GAME INDICES ------------------------")
        console.log("-------------------ENDS------------------------")






    });
};

btn.addEventListener('click', function (event) {
    getPokeData();
});




