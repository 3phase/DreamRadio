<?php 
$myfile = fopen("results.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));

$xml=simplexml_load_string($myXMLData) or die("Error: Cannot create object");
print_r($xml);

$str = "That's the name of the event.";
name = explode(" ",$str);

$str1 = "That's the place of the event.";
place = explode(" ",$str);

$strtime = '10/16/2003';
$strtime = str_replace('/', '-', $strtime);
$date1 = strtotime($strtime);

fclose($myfile);
?>