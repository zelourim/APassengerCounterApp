// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count;
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
     let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr;
    // NB: Make sure to not delete the existing content of the paragraph
    // 4. Reset the count to 0 so that we can start counting again
    countEl.textContent = 0;
         count = 0;


}


