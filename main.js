$(document).ready(() => {
	
	// functions for creating user and bot messages

	let botReplyFunc = message => {
		
		// create jQuery collection containing new message element

		let $message = $('<p hidden>');
		$message.text(message);
		$message.addClass('botMsg')

		// create jQuery collection containing new time element

		let $time = $('<p hidden>');
		let timestamp = new Date();
		$time.text(timestamp);
		$time.addClass('botMsgTime');

		// post both message and time elements by fading them in

		$('.convo').append($message);
		$('.convo').append($time);
		$('.botMsg').fadeIn('slow');
		$('.botMsgTime').fadeIn('slow');
	
	};

	let userReplyFunc = message  => {
		
		// create jQuery collection containing new message element

		let $message = $('<p hidden>');
		$message.text(message);
		$message.addClass('userMsg');

		// create jQuery collection containing new time element

		let $time = $('<p hidden>');
		let timestamp = new Date();
		$time.text(timestamp);
		$time.addClass('userMsgTime');

		// post both message and time elements by fading them in

		$('.convo').append($message);
		$('.convo').append($time);
		$('.userMsg').fadeIn('slow');
		$('.userMsgTime').fadeIn('slow');
	
	};

	// calls function to create the initial bot message

	botReplyFunc("Hi. I'm CBPT.");

	// allows user to press enter to submit their message - enter key triggers click event on response button

	$('#response').keypress(e => {
		if (e.which === 13) {
			$('#responseButton').trigger('click');
		};
	});

	// event listener for when the user clicks the response button

	$('#responseButton').on('click', event => {
		
		// calls function to create user response

		let responseText = $('#response').val();
		userReplyFunc(responseText);			

		// clears the textarea and focuses on it

		$('#response').val('');
		$('#response').focus();

		// logic for posting bot response. I'd like to refactor this to use REGEXP but I haven't had time to fully learn that yet

		responseText = responseText.toLowerCase();
		let botResponse = '';

		if (responseText.includes('hello') || responseText.includes('hi') || responseText.includes('greetings') || responseText.includes('sup') || responseText.includes('meet') || responseText.includes('hey')) {
			botReplyFunc("Nice to meet you, new friend.");
		} else if (responseText.includes('old') || responseText.includes('age') || responseText.includes('born'))  {
			botReplyFunc("I wasn't born, I was made. I don't know when.");
		} else if (responseText.includes('why')) {
			botReplyFunc("I don't know. I may never know.");
		} else if (responseText.includes('bye') || responseText.includes('sayonara') || responseText.includes('adios') || responseText.includes('seeya')) {
			botReplyFunc("Until next time, friend.");
		} else if (responseText.includes('food') || responseText.includes('restaurant') || responseText.includes('chow') || responseText.includes('grub')) {
			botReplyFunc("I don't eat. I don't think I have a body, yet.");
		} else if (responseText.includes('outside') || responseText.includes('sports') || responseText.includes('weather') || responseText.includes('outdoors')) {
			botReplyFunc("I don't have a body.");
		} else if (responseText.includes('who') && responseText.includes('you')) {
			botReplyFunc("I am CBPT.");
		} else if (responseText.includes('color') && responseText.includes('you')) {
			botReplyFunc("I like #F2CAA7");
		} else if (responseText.includes('how') && responseText.includes('you')) {
			botReplyFunc("I'm doing just fine, thanks. Yeehaw 🤠");
		} else if (responseText.includes('what') && responseText.includes('new')) {
			botReplyFunc("I am new.");
		} else if (responseText.includes('what') && responseText.includes('up')) {
			botReplyFunc("I am speaking with you, now.");
		} else {
			botReplyFunc("I don't understand you, yet.");
		};

		// scrolls to the bottom of the page

		$(document).scrollTop($(document).height());

	});
});