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
    </head>
    <body>
        <!--#echo var="DATE_LOCAL" -->
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <?php
        $page = 'index'; 
        include 'header.php'; ?>
        
        <div id = "mainContent" class="mainContent">

            <div class="carousel">
                <ul class="panes">
                    <li><a href="http://www.google.com"><img src="./img/images/pane-01.jpg"></img></a></li>
                    <li><img src="./img/images/pane-02.jpg" /></li>
                    <li><img src="./img/images/pane-03.jpg" /></li>
                    <li><img src="./img/images/pane-04.jpg" /></li>
                    <li><img src="./img/images/pane-05.jpg" /></li>
                </ul>
            </div>
            
            <div id ="ourMission">
                <h3>Our Mission and Promise to you</h3>
                <p>All-Tex Supply seeks to be your single source for the construction industry by providing the widest array of building and construction supplies and equipment by all established brands in the industry.  We intend to  satisfy our customers needs by providing the highest quality products, competitive pricing, and efficient, reliable service and support.</p>

                <p>All-Tex Supply offer contractors and owners the industry’s best products for new and remedial construction. We only work with leading suppliers whose name and reputation are impeccable for quality and affordability.</p>

                <p>We serve the construction industry in countless ways, including commercial, residential and municipal projects of any complexity.</p>

                <p>We carry a wide selection of products including, commercial sealants, building products, power tools, glazing products, chemicals, concrete, wallcoating, waterproofing, water repellants, to name but a few.</p>
                
                <div id = "Customer Satisfaction">
                    <img src="./img/index_htm_files/26.png"></img>
                </div>
            </div>

            <div id = "brandList">
            </div>
        </div>

        <?php include 'footer.php'; ?>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
