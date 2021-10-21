

		var row = 1;
		var submit = document.getElementById("submitBtn");
		submitBtn.addEventListener("click", displayDetails);
		
		function displayDetails(){

			var fname = document.getElementById("fname").value;
			var lname = document.getElementById("lname").value;
			var address = document.getElementById("Address").value;
			var pincode = document.getElementById("pincode").value;
            var gender = document.getElementById("gender").value;
            var choice = document.getElementById("choice").value;
            var state = document.getElementById("state").value;
            var country = document.getElementById("country").value;

			var display = document.getElementById("display");
			var newRow = display.insertRow(row);

			var cel1 = newRow.insertCell(0);
			var cel2 = newRow.insertCell(1);
			var cel3 = newRow.insertCell(2);
			var cel4 = newRow.insertCell(3);
			var cel5 = newRow.insertCell(4);
			var cel6 = newRow.insertCell(5);
			var cel7 = newRow.insertCell(6);
			var cel8 = newRow.insertCell(7);

			cel1.innerHTML = fname;
			cel2.innerHTML = lname;
			cel3.innerHTML = address;
			cel4.innerHTML = pincode;
			cel5.innerHTML = gender;
			cel6.innerHTML = choice;
			cel7.innerHTML = state;
			cel8.innerHTML = country;

			row++;


		}

		

