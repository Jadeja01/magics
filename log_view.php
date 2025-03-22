<?php
echo "<h2>Tracked Location Data</h2>";
$file = "logs.txt";

if (file_exists($file)) {
    $contents = file_get_contents($file);
    echo "<pre>$contents</pre>";
} else {
    echo "No data available yet!";
}
?>
