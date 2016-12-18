<?php
function get_string_between($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}


//$myfile = file_get_contents('http://www.operasofia.bg/component/k2/repertoire');
 $opera = file_get_contents('opera');
 $strip_opera = strip_tags($opera);
 $parsed = get_string_between($strip_opera, 'КалендарДекември', 'Банер EasyPAY');

 echo '<pre>'.$parsed.'</pre>';
