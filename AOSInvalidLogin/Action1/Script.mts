Browser("Advantage Shopping Online 2").Page("Advantage Shopping 2").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Wait 7
Browser("Advantage Shopping Online 2").Page("Advantage Shopping 2").WebEdit("username").Set DataTable("Username", dtGlobalSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping Online 2").Page("Advantage Shopping 2").WebElement("Password").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping Online 2").Page("Advantage Shopping 2").WebEdit("password").SetSecure DataTable("Password", dtGlobalSheet) @@ script infofile_;_ZIP::ssf4.xml_;_
Wait 3
Browser("Advantage Shopping Online 2").Page("Advantage Shopping 2").WebButton("sign_in_btn").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping Online 2").Page("Advantage Shopping 2").WebElement("signInResultMessage").Output CheckPoint("signInResultMessage_2")
Browser("Advantage Shopping Online 2").Close
