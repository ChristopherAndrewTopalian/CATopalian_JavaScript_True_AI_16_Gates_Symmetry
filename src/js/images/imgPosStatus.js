// imgPosStatus.js

function imgPosStatus()
{
    let theImages = document.querySelectorAll('img');

    // get all the coordinates while they are still in Flexbox layout
    let coords = [];

    for (let i = 0; i < theImages.length; i++)
    {
        let rect = theImages[i].getBoundingClientRect();

        coords.push({
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX
        });
    }

    // apply the absolute positioning using those coordinates
    for (let x = 0; x < theImages.length; x++)
    {
        theImages[x].style.left = coords[x].left + 'px';
        theImages[x].style.top = coords[x].top + 'px';
        theImages[x].style.position = 'absolute';
        // remove margins that might mess up the drag offset
        theImages[x].style.margin = '0'; 
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

