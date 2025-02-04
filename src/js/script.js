try
{
	// fetch("admin.json")
	// 	.then(response => response.json())
	// 	.then((data) => {
	// 		console.log(data)
	// 	})
	// 	.catch(error => console.error(error.message))

	
	
	
	
	$(document).ready(function()
	{
		let admin = [
			{
				username : "root",
				password : "kali"
			},
			{
				username : "null",
				password : "void"
			},
			{
				username : "user",
				password : "pass"
			}
		]


		let username = $("#username")
			
		let password = $("#password")

		let login_status = $("#status")

		function getData(username)
		{
			return admin.find(admin => admin.username === username) || null
		}

		/* ---------------------------------- */
		/* validation : on login button click */
		/* ---------------------------------- */

		$("#login_btn").click(function()
		{			
			if (username.val() || password.val())
			{
				let account = getData(username.val())
			
				if (account != null)
				{
					if(account.password == password.val())
					{
						localStorage.clear() // clean before storage

						/* storange active account locally */

						// localStorage.setItem(`isSecure`,true)
						
						localStorage.setItem('activeAccount',JSON.stringify(account))
						
						console.log(`_[access] confimred!`)

						window.open('./src/app.html','_self',true)
					}
					else
					{
						login_status.text(`Unvalid Password!`)
						login_status.addClass("unvalid")
	
						console.log(`_(login account password) :  unvalid!`)
					}
				}
				else
				{
					login_status.text(`Unvalid Username!`)
					login_status.addClass("unvalid")
	
					console.log(`_(login account username) :  unvalid!`)
				}
			}
			else	
			{
				login_status.text(`Empty input field!`)
				login_status.addClass("unvalid")

				console.log(`_(input field) : is Empty`)
			}

			username.val('')
			password.val('')
		})
	})
}
catch (error)
{
    console.error(error.message)
}
/*  */