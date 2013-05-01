<?php $page = 'project-gallery';include 'header.php'; ?>
        <div id = "galleria">
            <img src = "img/gallery/2000_mckinney_&_Azure.JPG">
            <img src = "img/gallery/2000_McKinney_2_.JPG">
            <img src = "img/gallery/2000_McKinney.JPG">
            <img src = "img/gallery/alltex26.jpg">
        </div>

        <?php include 'footer.php'; ?>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src = "galleria/galleria-1.2.9.min.js"></script>
        <script>
            Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
            Galleria.run('#galleria');
        </script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
