<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <script src="js/js-webshim/minified/polyfiller.js"></script>
        <script>
            $.webshims.polyfills();
        </script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->

<header class = "LogoArea">
    <img id = "Logo" src="./img/index_htm_files/logo.png" alt="All-Tex Supply Logo" />
    <div class="SloganArea clearfix">
        <img id = "Slogan" src = "./img/slogan.png" alt = "1st In Helping Buildings LAST" />
        <h1>
            1st In Helping Buildings LAST
        </h1>
        <h2>
            Wholesale Distributor of Specialty Building Materials
        </h2>
    </div>
    <nav>
        <ul>
            <li class = "<?php if($page=='index'){echo 'selected';}?>"><a href="./">Home</a></li>
            <li class = "<?php if($page=='products'){echo 'selected';}?>"><a href="./"><a href="./products.php">Products</a></li>
            <li class = "<?php if($page=='about-us'){echo 'selected';}?>"><a href="./"><a href="./about-us.php">About Us</a></li>
            <li class = "<?php if($page=='project-gallery'){echo 'selected';}?>"><a href="./"><a href="./project-gallery.php">Project Gallery</a></li>
            <li class = "<?php if($page=='contact-us'){echo 'selected';}?>"><a href="./"><a href="./contact-us.php">Contact Us</a></li>
        </ul>
    </nav>
</header>