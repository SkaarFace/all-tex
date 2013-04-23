
<?php $page = 'contact-us'; include 'header.php'; ?>

<?php
    $to = "sskaar@thinkcre8tive.com";
    $subject = "Request information.";
    $name = $_POST['name'];
    $telephone = $_POST['telephone'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $headers = "From: forms@all-texsupply.com";
    $headers .= "Reply-to: $email";
    $message = $_POST['message'];

    $body = "From: $name\n Phone Number: $telephone\n Company: $Company\n Email: $email\n Message: $message\n";

    if($POST['submit'])
    {
        if (mail ($to, $subject, $body, $headers))
        {
            echo '<p>Your message has been sent.</p>';
        }
        else
        {
            echo '<p>Something went wrong, try again.</p>';
        }
    }
?>

        
        <form class="contactForm" name = "contactForm" method="post" action="contact-us.php">
            <H1>Request Information</H1>
            <fieldset>
                <ul>
                    <li>
                        <label for="name">Your Name:</label>
                        <input id = "name" name="name" type="text" required aria-required="true" >
                    </li>
                    <li>
                        <label for="telephone">Phone Number:</label>
                        <input id ="telephone" name="telephone" type="tel" placeholder="123-456-7890"
                            required aria-required="true" >
                    </li>
                    <li>
                        <label for="company">Company:</label>
                        <input id="company" name="company" type="text" >
                    </li>
                    <li>
                        <label for="email">Your Email:</label>
                        <input id="email" name="email" type="email" required aria-required="true" >
                    </li>
                    <li>
                        <label for="message">Message:</label>
                        <textarea name="message"></textarea>
                    </li>
                    <li>
                        <button class="submit" type="submit" >Submit Inquiry</button>
                    </li>
                </ul>
            </fieldset>
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
