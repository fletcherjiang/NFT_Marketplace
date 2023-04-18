<?php

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="js/secure_reg.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/forge/0.10.0/forge.min.js"></script>
    <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous" ></script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jsencrypt/3.0.0-rc.1/jsencrypt.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js"></script>
      <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.ico" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Sign in & Sign up Form</title>
  </head>
  <body>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">

          <form action="" class="sign-in-form" method="post" onsubmit="return loginencryptAndSubmit()">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" id="username2" name="username" required/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" id="password2" name="password" required/>
            </div>
            <input type="submit" value="Login" class="btn solid" id="loginbut" name="loginbut" required/>

            <div id="serverResponse_pwd" ></div>


            <p class="social-text">Or Sign in with social platforms</p>
            <div id="serverResponse_pwd"></div>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="" class="sign-up-form" method="post" onsubmit="return encryptAndSubmit()">
            <h2 class="title">Sign up</h2>

            <div class="input-field">
              <i class="fa fa-id-card"></i>
              <input type="text" placeholder="First Name"  id="fname" name="fname" required/>
            </div>

            <div class="input-field">
              <i class="fa fa-id-card-o"></i>
              <input type="text" placeholder="Last Name" id="lname" name="lname" required/>
            </div>


            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" id="username" name="username" required/>
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" id="email" name="email" required/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" id="password" name="password" required/>
            </div>

            <div id="serverResponse"></div>

            <input type="submit" class="btn" value="Sign up" id="regbut" name="regbut" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>


        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Sign up a secure trading account of your own now, it only takes a minute!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Already have an account? Sign in now and start trading securely!
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>

    <script src="js/app.js"></script>

  </body>
</html>
