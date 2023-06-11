const fromText = document.querySelector(".from-text"), //first element
toText = document.querySelector(".to-text"), // second element
translateBtn = document.querySelector("button"); // third element



translateBtn.addEventListener("click", () => {   //Translation method
    let text =fromText.value;//text value
    let apiUrl=`https://www.hebcal.com/converter?cfg=json&date=${text}&g2h=1&strict=1`;//Using API from the Task
    fetch(apiUrl).then(res => res.json()).then(data => { //fetch the data from API
    console.log(data);//console check the data
    toText.value =data.hebrew;// write the answer to the right side after API data information 
    });
});
