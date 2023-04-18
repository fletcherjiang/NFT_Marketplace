<?php
    // header('Location:register.php');
	session_start();
	include("includes/connect.php");
	include("includes/html_codes.php");
	$servername = "localhost";
    $username = "3334_imjyy_com";
    $password = "StzBesh7Ls8ey8yX";
    $name = "3334_imjyy_com";
    error_reporting(E_ALL);
    ini_set('display_errors', 1);


    $connect = mysqli_connect($servername, $username, $password, $name);
	

	//Register script
	if( isset($_POST['regbut']) ){
		$error = array();

		//first name
		if( ctype_alnum($_POST['fname']) ){
			$fname = $_POST['fname'];
// 			echo("first name is ".$fname);
		}

		//last name
		if( ctype_alnum($_POST['lname']) ){
			$lname = $_POST['lname'];
// 			echo("last name is ".$lname);
		}

		//username
		if( empty($_POST['username']) ){
			$error[] = 'Please enter a username.';
		}
		else if( ctype_alnum($_POST['username']) ){
			$username = $_POST['username'];
		}
		else{
			$error[] = 'Username must consist of letters and numbers only. ';	
		}

		//email
		if( empty($_POST['email']) ){
			$error[] = 'Please enter your email.';
		}
		else if( filter_var($_POST['email'],FILTER_VALIDATE_EMAIL) ){
			$email = mysqli_real_escape_string($connect, $_POST['email']);
		}
		else{
			$error[] = 'Your email is invalid. ';
		}

		//password
		if( empty($_POST['password']) ){
			$error[] = 'Please enter your password.';
		}
		else{
			$password = mysqli_real_escape_string($connect, $_POST['password']);
		}

		if(empty($error)){
			$result=mysqli_query($connect, "select * from user where email='$email' or username='$username'") or die(mysqli_error());

			if(mysqli_num_rows($result)==0){
				// $activation=md5(uniqid(rand(),true));
				$result2=mysqli_query($connect, "insert into user(user_id,fname,lname,username,email,password)
				values('','$fname','$lname','$username','$email','$password')" ) or die(mysqli_error());
			}
			else
				header('Location:prompt.php?x=2');
				// echo("username ".$username);

			$result3 = mysqli_query($connect, "select * from user where username='$username'");
			$row = mysqli_fetch_array($result3);
			$x = $row['user_id'];
			$utable = mysqli_query($connect, "create table `".$x."` (id Integer(50) PRIMARY KEY AUTO_INCREMENT,subItems varchar(50), reqrItems varchar(50), reqsItems varchar(50))");
		}
	}

	if( isset($_SESSION['user_id']) ){
		header('Location:dashboard.php');
	}

	if( isset($_POST['loginbut']) ){
		$error = array();

		//username
		if( empty($_POST['username']) ){
			$error[] = 'Please enter a username.';
		}
		else if( ctype_alnum($_POST['username']) ){
			$username = $_POST['username'];
			echo("first name is ".$username);
		}
		else{
			$error[] = 'Username must consist of letters and numbers only. ';	
		}

		//password
		if( empty($_POST['password']) ){
			$error[] = 'Please enter your password.';
		}
		else{
			$password = mysqli_real_escape_string($connect, $_POST['password']);
			echo("first name is ".$password);
		}

		if(empty($error)){
			$result=mysqli_query($connect, "select * from user where username='$username' and password='$password'") or die(mysqli_error());

			if(mysqli_num_rows($result)==1){
				//login code
				while( $row=mysqli_fetch_array($result) ){
					$_SESSION['user_id'] = $row['user_id'];
				header('Location:dashboard.php');
				
				}
			}
			else
				header('Location:prompt.php?x=1');
		}
	}
// 	Login script ends

?>

<!DOCTYPE html>

    
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous" >
        
    </script>
    <link rel="stylesheet" href="css/style.css" />
    <title>Sign in & Sign up Form</title>
  </head>
  <body>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
            
          <form action="" class="sign-in-form" method="post">
              
            <h2 class="title">Sign in</h2>


            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" id="username" name="username" required/>
            </div>

            

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" id="password" name="password" required />
            </div>
            
            <input type="submit" value="Login" class="btn solid" id="loginbut" name="loginbut" required/>
            
            <p class="social-text">Or Sign in with social platforms</p>
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
				<input type="text" class="form-control" placeholder="First Name" id="fname" name="fname" required>
			</div>
							
			<div class="input-field">
			  <i class="fa fa-id-card-o"></i>
			<input type="text" class="form-control" placeholder="Last Name" id="lname" name="lname" required>
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
              <input type="password" placeholder="Password" id="password" name="password" required />
            </div>
            
            <input type="submit" class="btn" value="Sign up" id="regbut" name="regbut" required`/>

            
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
              Just a few simple steps to create your own trading account!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Have an account already ?</h3>
            <p>
              Log in now to start trading!
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
    <script src="js/secure_reg.js"></script>
    
  </body>
</html>
