<?php
  $name = $_POST["jmeno"];
  $email = $_POST["email"];
  $tel = $_POST["telefon"];
  $sub = $_POST["predmet"];
  $usermessage = $_POST["zprava"];
  $region = $_POST['region'];

  $to = "info@izolacefuk.cz";
  $subject = "Nova poptavka z webu Zahradanastrese.cz";
  $message = 
  "Jméno: $name\n
  Email: $email\n
  Telefon: $tel\n
  Region: $region\n 
  Zpráva: $usermessage";
  $headers = "from: produkceforthsite@email.cz \n";
  // $headers .= "X-mailer: phpWebmail \n";
if( mail($to, $subject, $message, $headers) ){
  header("Location: https://www.zahradanastrese.cz/odeslano.html");
}
else
  {echo "CHYBA - odeslání se nepovedlo";}
?>