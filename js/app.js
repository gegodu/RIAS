window.fbAsyncInit = function() {
    FB.init({
      appId            : '1879834988946116',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.9',
      status           : true
    });
    //FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
            //we are connected
        }else if(response.status === 'not_authorized'){
            //not auth
        }else{
            //algo
        }

    });

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));