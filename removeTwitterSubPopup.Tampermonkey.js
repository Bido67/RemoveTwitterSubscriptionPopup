// ==UserScript==
// @name         Remove "get verified" on twitter or replace it with whatever you want!
// @description  Removes or replaces the "get verified" on the twitter homepage.
// @version      1.0
// @namespace    https://github.com/bido67/RemoveTwitterSubscriptionPopup
// @homepageURL  https://github.com/bido67/RemoveTwitterSubscriptionPopup
// @author       Bido67
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

/*
To edit settings (LINE 63, MODE: LINE 80 and TEXTS at LINE 84 to 96), please view readme.md in the github repo 
or if you are good enough with code, do whatever you want.
*/


(function() {
    'use strict';
	// run the setup function below (view code line: 31)
    setup();
	// run the run function once (view code line: )
    setTimeout(run, 250);
	// set the run function on a 5 second interval (view code line: )
	// this is due to twitter not refreshing the page when navigating inside it 
    setInterval(run, 5000);

})();
// The setup function. This sets up required attributes and values for the script to work
function setup(){
	// ############## REQUIRED DEFINITIONS FOR SCRIPT TO WORK ##############
	// defines the script's "object" that it uses.
	document.RemoveTwitterVerified = {};
	// Defines a value used later for when replacing the button.
    document.RemoveTwitterVerified.buttonFixCount = 0;
	// Defines the modes in an "Enum" style.
    document.RemoveTwitterVerified.modes = {
        replace: 0,
        remove: 1,
        replaceButRemoveButton: 2
    };
	// ########## END OF REQUIRED DEFINITIONS FOR SCRIPT TO WORK ###########
	// ############## ADVANCED SETTINGS ##############

	// NOTE: EDITING ADVANCED SETTINGS IS NOT RECOMMENDED!!!!!!
    document.RemoveTwitterVerified.selectors = {
        container: "[aria-label=\"Get Verified\"]",
		// Note: the "aside" element is the container.
        title: "aside>div:nth-child(1)>span", // This selection is relative to container (view code line )
        text: "aside>div:nth-child(2)>span", // relative to container
        button: {
            self: "aside>a:nth-child(3)", // relative to container
            text: "div>span>span" // relative to the button.self selector
        }
    };
	// ########## END OF ADVANCED SETTINGS ###########

    // ############## DEV SETTINGS ##############
    document.RemoveTwitterVerified.debug = false;
	// ########## END OF DEV SETTINGS ###########

    // ############## SETTINGS ##############
	/* 

	Setting value: document.RemoveTwitterVerified.mode

	Description: The mode of this tool. 

	Available values: 
	- Remove ( document.RemoveTwitterVerified.modes.remove )
		Removes the prompt entirely.

	- Replace ( document.RemoveTwitterVerified.modes.replace )
		Replaces the entierty of the prompt with the values in texts below.

	- Replace But Remove Button ( document.RemoveTwitterVerified.modes.replaceButRemoveButton )
		Replaces the text prompts but removes the button.
	*/
    document.RemoveTwitterVerified.mode = document.RemoveTwitterVerified.modes.replace;
    /* 
	The texts to use to replace on the prompt
	*/
	document.RemoveTwitterVerified.texts = {
		// The new text to use to replace the title of the prompt
        title: "Hi Lily!", 
		// The new text for the small text in the prompt
        text: "We here at twitter hope you have a nice day!", 
		// the texts for the button
        button: { 
			// The new url of the button
            url:  "https://twitter.com/bbido67", 
			// The new text of the button
            text: "Go to your profile" 
        }
    }
	// ########## END OF SETTINGS ###########
}
// detects the mode of the script and does accordingly.
function run(){
	
    logStuff("Twitter Verif Remove: running instance");
 try{
    // remove it if you want:
        if(document.RemoveTwitterVerified.mode == document.RemoveTwitterVerified.modes.remove){
            logStuff("Twitter Verif Remove: Remove()");
            remove();
        }
        else if(document.RemoveTwitterVerified.mode == document.RemoveTwitterVerified.modes.replace || document.RemoveTwitterVerified.mode == document.RemoveTwitterVerified.modes.replaceButton){
           logStuff("Twitter Verif Remove: replace()");
           replace(document.RemoveTwitterVerified.mode == document.RemoveTwitterVerified.modes.replace);
        }
    } catch(e){
        console.log(e);
    }
}
// replaces the texts. (also removes the button if its in replace but remove button mode)
function replace(replaceButton){
     //replace it:
    logStuff("Twitter Verif Remove: replacing...");
    let getVerif = document.querySelector(document.RemoveTwitterVerified.selectors.container);
    logStuff("Twitter Verif Remove: Verif", getVerif);
            if(getVerif){
                 logStuff("Twitter Verif Remove: Got Verification div");
                let getVerifTitle = getVerif.querySelector(document.RemoveTwitterVerified.selectors.title);
                logStuff("Twitter Verif Remove: Title", getVerifTitle);
                if(getVerifTitle){
                    getVerifTitle.innerText = document.RemoveTwitterVerified.texts.title;
                }
                let getVerifText = getVerif.querySelector(document.RemoveTwitterVerified.selectors.text);
                logStuff("Twitter Verif Remove: Text", getVerifText);
                if(getVerifText){
                    getVerifText.innerText = document.RemoveTwitterVerified.texts.text;
                }
                // Button + link

                let getVerifButton = getVerif.querySelector(document.RemoveTwitterVerified.selectors.button.self);
                if(getVerifButton){
                    // fix the button
                     if(document.RemoveTwitterVerified.buttonFixCount <= 2){
                            getVerifButton.outerHTML = getVerifButton.outerHTML;
                            document.RemoveTwitterVerified.buttonFixCount++;
                        }
                }
                // get the fixed button.
                getVerifButton = getVerif.querySelector(document.RemoveTwitterVerified.selectors.button.self);
                logStuff("Twitter Verif Remove: Button", getVerifButton);
                if(getVerifButton){
                    logStuff("Twitter Verif Remove: Got button");
                    if(replaceButton){
                        // replace it
                        getVerifButton.href = document.RemoveTwitterVerified.texts.button.url;
                        // get the text
                        let getVerifButtonText = getVerifButton.querySelector(document.RemoveTwitterVerified.selectors.button.text);
                        logStuff("Twitter Verif Remove: Button Text", getVerifButtonText);
                        if(getVerifButtonText){
                            logStuff("Twitter Verif Remove: Got Button Text");
                            getVerifButtonText.innerText = document.RemoveTwitterVerified.texts.button.text;
                        }
                    }
                    else{
                        // remove it
                        getVerifButton.remove();
                    }
                }
            }
}
// simply removes it
function remove(){
    document.querySelector("[aria-label=\"Get Verified\"]").parentElement.remove(); // removes it
}
// allows for the debug mode switch.
function logStuff(...args){
    if(document.RemoveTwitterVerified.debug){
        console.log(args);
    }
}