<?php
$servername = "localhost";
$username = "if0_36768839";
$password = "mEeKDeWpy12Hf";
$dbname = "if0_36768839_launchpad_db";

// Create connection
$conn = new mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>