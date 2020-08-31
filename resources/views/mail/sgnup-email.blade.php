Hello{{$email_data['name']}}

<br/><br/>
Welcome to my Website
<br>
Please Click The Bellow Link To Veryfy Your Email and Active Your Account!
<br><br>
<a href="http://localhost:8000/verify?code={{$email_data['verification_code']}}">Click Here!</a>
<br><br>
Thank You