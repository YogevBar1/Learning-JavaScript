// 3. Challenge: Create a page that contains a select box 
// with several colors.
// When choosing a color from the box - color the background 
// color of the page with the color selected in the box.
// When the user closes the browser and browses to the page 
// again - color the page with the color selected in the previous
//  browsing and also display this color back in the Select box.
// That is, as soon as the user browses the site, he automatically 
// sees a page in the color he chose the last time he was on the site.
// Note: There is no button here.

onOpenPage();

function paintPage() {
    const colorSelect = document.getElementById("colorSelection");
    const color = colorSelect.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("color", color);
}

function onOpenPage() {
    const color = localStorage.getItem("color");
    if (color !== null)
        document.body.style.backgroundColor = color;

    const colorSelect = document.getElementById("colorSelection");
    colorSelect.value = color;

}