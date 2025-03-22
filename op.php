<?php
$ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$lat = $_GET['lat'] ?? 'Unknown';
$long = $_GET['long'] ?? 'Unknown';

// Save data to logs.txt
$file = fopen("logs.txt", "a");
fwrite($file, "IP: $ip | Latitude: $lat | Longitude: $long | User Agent: $user_agent \n");
fclose($file);

// Generate Google Maps Link
$maps_link = "https://www.google.com/maps?q=$lat,$long";

echo "Location Tracked Successfully! <br>";
echo "<a href='$maps_link' target='_blank'>Click here to view location on Google Maps</a>";
?>
