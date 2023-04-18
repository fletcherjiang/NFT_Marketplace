
<?php
$servername = "localhost";
$username = "3334_imjyy_com";
$password = "StzBesh7Ls8ey8yX";
$name = "3334_imjyy_com";

// Create connection
// $connect = new mysqli($servername, $username, $password);
$connect = mysqli_connect($servername, $username, $password, $name);

if(!$connect){
		die('No connection established! '.mysqli_connect_error());
	}



// $db_selected = mysqli_select_db($connect,"trading");

// if(!$db_selected){
// 		die('Couldnt select database! '.mysqli_connect_error());
// 	}

	
?>
