var LostCommment = function (config) {
  // Setup the variables that we will need
	var el 			       = config.el || false,
		  identifier	   = config.identifier || false

  // Throw an error if no el is passed
	if (!el) {
    console.log('Missing the id of textarea')
		return
	}

  // Make sure we have an element object
  el = typeof(el) === 'string' ? document.getElementById(el) : el

  // Set the identifier to the provided identifier or the id of the textarea
  identifier = identifier || el.id

  // Here are the functions for storing and getting values
  setValue = function () {
    // Get the lost comment data
    var data = window.localStorage.getItem('LostComment') || "{}"

    // Parse the data
    data = JSON.parse(data);

    // Add the data to the global object
    data[identifier] = el.value;

    // Set the item
    window.localStorage.setItem('LostComment', JSON.stringify(data));
  }

  getValue = function (identifier) {
    // Get the lost comment data
    var data = window.localStorage.getItem('LostComment')

    // Make sure that data was returned
    if (!data) {
      return
    }

    // Parse the data
    data = JSON.parse(data);

    // Check to see if we have something for this input
    if (!data[identifier]) {
      return
    }

    // Set the value
    el.value = data[identifier];
  }

  // We will store the value on keyup and blur
  el.onkeyup = setValue
  el.onblur  = setValue

  // Get any existing value
  getValue(identifier)
}