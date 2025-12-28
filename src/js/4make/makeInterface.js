// makeInterface.js

function makeInterface(whichArray)
{
    let mainDiv = ce('div');
    mainDiv.style.marginTop = '30px';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.gap = '5px';
    ba(mainDiv);

    //-//

    let containerA = ce('div');
    containerA.style.display = 'flex';
    containerA.style.flexDirection = 'row';
    containerA.style.display = 'grid';
    // creates 8 equal columns
    containerA.style.gridTemplateColumns = 'repeat(8, 1fr)'; 
    containerA.style.gap = '10px';
    containerA.style.width = 'fit-content';
    mainDiv.append(containerA);

    //-//

    let containerB = ce('div');
    containerB.style.display = 'flex';
    containerB.style.flexDirection = 'row';
    containerB.style.display = 'grid';
    // creates 8 equal columns
    containerB.style.gridTemplateColumns = 'repeat(8, 1fr)'; 
    containerB.style.gap = '10px';
    containerB.style.width = 'fit-content';
    mainDiv.append(containerB);

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].row == 1)
        {
            let gateImage = ce('img');
            gateImage.src = whichArray[x].textureOffline;
            gateImage.className = 'card';
            containerA.append(gateImage);
            makeElementDraggable(gateImage);
        }
        if (whichArray[x].row == 2)
        {
            let gateImage = ce('img');
            gateImage.src = whichArray[x].textureOffline;
            gateImage.className = 'card';
            gateImage.onmousedown = function()
            {
                // gateImage.style.opacity = 0.7;
            };
            gateImage.onmouseup = function()
            {
                // gateImage.style.opacity = 1.0;
            };

            containerB.append(gateImage);
            makeElementDraggable(gateImage);
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

