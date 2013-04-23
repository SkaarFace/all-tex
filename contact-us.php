
<?php $page = 'contact-us'; include 'header.php'; ?>
        
        <form id="redemption" method="post">
            <H1>Request Information</H1>
            <fieldset>
                <div>
                    <label for="name">Your Name:</label>
                    <input id = "name" name="name" type="text" required aria-required="true" >
                </div>
                <div>
                    <label for="telephone">Phone Number:</label>
                    <input id ="telephone" name="telephone" type="tel" placeholder="123-456-7890"
                        required aria-required="true" >
                </div>
                <div>
                    <label for="company">Company:</label>
                    <input id="company" name="company" type="text" >
                </div>
                <div>
                    <label for="email">Your Email:</label>
                    <input id="email" name="email" type="email" required aria-required="true" >
                </div>
        </form>


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
