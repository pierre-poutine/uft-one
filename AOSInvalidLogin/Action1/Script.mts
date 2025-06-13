Browser("Advantage Shopping Online").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping Online").Page("Advantage Shopping").WebEdit("username").Set "Pierre" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping Online").Page("Advantage Shopping").WebElement("Password").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping Online").Page("Advantage Shopping").WebEdit("password").SetSecure "673bbb9c79451e24a63b051e9450c814f7e71728e1cc" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping Online").Page("Advantage Shopping").WebButton("sign_in_btn").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping Online").Page("Advantage Shopping").WebElement("signInResultMessage").Check CheckPoint("signInResultMessage") @@ script infofile_;_ZIP::ssf7.xml_;_
