# RemoveTwitterSubscriptionPopup
 This tamper monkey removes or replaces the twitter subscription popup.

## Settings
To edit settings, since your name is probably not Lily and your twitter link is probably not https://twitter.com/bbido67, you'll need some basic code editing knowledge.

In the script, located from line 63 to line 96 are the normal settings.<br><br> 
More advanced users can find advanced settings from line 32 instead. <br><br>
All settings are explained in the script itself as well. <br><br>
Here's what the settings section looks like
```javascript
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
```

### Script mode
The corresponding line should look like: 
```javascript
	document.RemoveTwitterVerified.mode = MODE VALUE HERE;
```
This setting defines the mode of the script. 

It has 3 values
- Remove 
  	- Value to set: `document.RemoveTwitterVerified.modes.remove`
	- What does it do?<br>
		It simply removes the prompt on the twitter home page.
- Replace 
	- Value to set: `document.RemoveTwitterVerified.modes.replace`
	- What does it do?<br>
		It replaces the entierty of the prompt with the texts defined in the texts setting
- Replace but remove button 
    - Value to set: `document.RemoveTwitterVerified.modes.replaceButRemoveButton`
	- What does it do?<br>
		It replaces the title and description of the prompt but removes the button.
### Texts
The corresponding lines should look like: 
```javascript
	document.RemoveTwitterVerified.texts = {
		// The new text to use to replace the title of the prompt
        title: "A TEXT HERE", 
		// The new text for the small text in the prompt
        text: "AN OTHER TEXT HERE", 
		// the texts for the button
        button: { 
			// The new url of the button
            url:  "https://A.RANDOM.URL/HELLO", 
			// The new text of the button
            text: "A TEXT FOR THE BUTTON HERE" 
        }
    }
```
This defines the replacement texts that will be used by the script.

#### Title
This defines the title of the prompt. You can put a whatever you want as a value.
#### Text 
This defines the description of the prompt.
#### Button
This defines the values for the button
- url<br>
	This defines the URL value for the button. Its where your browser will take you when you click it.
- text<br>
	This defines the text that will appear on the button.