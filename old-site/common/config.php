<?php 
function base_url(){
  if(isset($_SERVER['HTTPS'])){
      $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
  }
  else{
      $protocol = 'http';
  }
  return $protocol . "://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
}
  $CompanyName= "The Pulp House Publishing";
  $CompanyNameCAP= "The Pulp House Publishing";
  $CompanyNamewithshort= "The Pulp House Publishing";
  
  $CompanyUrl= "thepulphousepublishing.com";
  $CompanyUrlwithouthttps= "https://thepulphousepublishing.com/";
  $CompanyUrlWithWWW= "http://www.thepulphousepublishing.com";
  $PhoneNumber= "(888) 909-9431";
  $PhoneNumberLink= "888-909-9431";
  $Email= "info@thepulphousepublishing.com";
  $EmailLink= "mailto:info@thepulphousepublishing.com";
  $Address= "5900 Balcones Drive STE 100 Austin, TX 78731";
  $FacebookLink= "#";
  $InstagramLink= "# ";
  $LinkedinLink= "#";
  $TwitterLink= "#";
  $PinterestLink= "#";
  $TrustPilotLink= "#";
  $BarkLink= "#";
  $WhatsAppLink= "#";
  $GoogleReviewsLink= "#";
  $ApiUrl= "http://americanseohub.com/api/v1/register";
  $currentUrl = base_url();

  //Email Configration
  $mail_Host = "smtp.gmail.com";
  $mail_Username = "info@bellevuepublishers.com";
  $mail_Password = "shakir_ghumman10";
  $mail_Post = "587";

  ?>