function validateForm()
    {
    	// Validate Address
    	var address = $("#fraddress").val();
    	if (address=="") {alert("Please enter a valid address");
    	    } else {
    		alert("Please enter a valid address");
    	}

    	// Validate Email
    	var email = $("#fremail").val();
    	if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email!="" || email!=null) {
            alert(email);
        } else {
    		alert("Please enter a valid email");
    	}

      return false;
    }
