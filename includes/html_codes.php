<?php
    $servername = "localhost";
    $username = "3334_imjyy_com";
    $password = "StzBesh7Ls8ey8yX";
    $name = "3334_imjyy_com";
    
    // Create connection
    // $connect = new mysqli($servername, $username, $password);
    $connect = mysqli_connect($servername, $username, $password, $name);
    // $connect = mysqli_connect("localhost","3334_imjyy_com", "StzBesh7Ls8ey8yX", "3334_imjyy_com");
	//Code for header and search bar
	function headerAndSearchCode(){
			if(isset($_GET['keywords']))
				$defaultText = htmlentities($_GET['keywords']);
			else
				$defaultText = ' ';
		echo "
			<header id =\"main_header\" style=\"background-image: url(img/welcome.jpg);\">
				<div class=\"container\">
					<div class=\"row\">
						<div class=\"col-md-4 logo\"><a href=\"products.php\"><img src=\"img/exchange-symbol.svg\"></a></div>
						<div class=\"col-md-4 name\"><a href=\"products.php\">Let's Trade</a></div>
						<div class=\"col-md-4 toplinks\">
		";
							                             
		topRightLinks();

		echo "					
						</div>
					</div>
				</div>
			</header>"

			;

	}

	//Top Right Links
	function topRightLinks(){
	    $servername = "localhost";
        $username = "3334_imjyy_com";
        $password = "StzBesh7Ls8ey8yX";
        $name = "3334_imjyy_com";
        
        // Create connection
        // $connect = new mysqli($servername, $username, $password);
        $connect = mysqli_connect($servername, $username, $password, $name);

		if( !isset($_SESSION['user_id']) ){
			echo"
				<ul class=\"navlinks\">
					<li><a href=\"products.php\"><i class=\"fa fa-home\"></i>Home</a></li>
					<li>|</li>
					<li><a href=\"register.php\"><i class=\"fa fa-sign-in\"></i>Register/Login</a></li>
				</ul>
			";
		}
		else{
			$x = $_SESSION['user_id'];
			$result = mysqli_query($connect, "select * from messages where receiver=$x")
						or die(mysqli_error());
			$num = mysqli_num_rows($result);

			if($num==0){
				echo "
					<ul class=\"navlinks\" style=\"font-size:10px; padding:1px\">
						<li><a href=\"products.php\"><i class=\"fa fa-home\"></i>Home</a></li>
						<li>|</li>
						<li><a href=\"messages.php\"><i class=\"fa fa-envelope-o\"></i>Messages(0)</a></li>
						<li>|</li>
						<li><a href=\"additem.php\">Add Item</a></li>
						<li>|</li>
						<li><a href=\"dashboard.php\">My Account</a></li>
						<li>|</li>
						<li><a href=\"logout.php\">Log Out</a></li>
					</ul>
				";
			}
			else{
				echo"
					<ul  class=\"navlinks\" style=\"font-size:10px\">
						<li><a href=\"products.php\"><i class=\"fa fa-home\"></i>Home</a></li>
						<li>|</li>
						<li><span class=\"usernames\"><a href=\"messages.php\"><i class=\"fa fa-envelope-o\"></i>Messages($num)</a></span></li>
						<li>|</li>
						<li><a href=\"additem.php\">Add Item</a></li>
						<li>|</li>
						<li><a href=\"dashboard.php\">My Account</a></li>
						<li>|</li>
						<li><a href=\"logout.php\">Log Out</a></li>
					</ul>
				";
			}
		}
	}

	//Creates category options for search bar
	function createCategoryList(){

		if( ctype_digit($_GET['category']) ){ 
			$x=$_GET['category']; 
		}
		else{ 
			$x=999; 
		}

		echo "<option SELECTED>All Categories</option>";
		$i=0;
		while(1){
			if( numberToCategory($i)=="Category does not exist" ){
				break;
			}
			else{
				echo "<option value=\"$i\"";
				if($i==$x){
					echo "SELECTED";
				}
				echo ">";
				echo numberToCategory($i);
				echo "</option>";
			}
			$i++;
		}
	}

	//Category Number to string
	function numberToCategory($n){

		switch($n){

			case 0:
				$cat = "a";
				break;
			case 1:
				$cat = "b";
				break;
			case 2:
				$cat = "c";
				break;
			case 3:
				$cat = "Others";
				break;
			default:
				$cat = "Category does not exist";
		}
		return $cat;
	}

	function footerCode(){
		echo"
			<footer class=\"footer\">
			<div class=\"container\">
				<div class=\"col-md-4\">
					<h3>Polyu</h3>
					<p>COMP3334</p>
				</div>
				<div class=\"col-md-3\"></div>
				<div class=\"col-md-5 links\">
					<ul class=\"navlinks\">
						<li><a href=\"#\">Home</a></li>
					</ul>
				</div>
				<div class=\"col-md-12\">
					<p>&copy;All Rights Reserved</p>
				</div>
			</div>
		</footer>
		";
	}
?>