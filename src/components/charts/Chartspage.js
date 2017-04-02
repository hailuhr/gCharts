import React, {Component, propTypes} from 'react';
var request = require('request');


// var key = "Agfw8ufsd7WXUlgH7DNS73rJa"
// var secret = "HOSleMfpOwldLKDR4JcN4BiK8XpbSbl76AQ90Izqau2DUL54m0"

function test(){
var qs = require('querystring')
  , oauth =
    { callback: 'http://mysite.com/callback/'
    , consumer_key: "Agfw8ufsd7WXUlgH7DNS73rJa"
    , consumer_secret: "HOSleMfpOwldLKDR4JcN4BiK8XpbSbl76AQ90Izqau2DUL54m0"
    }
  , url = 'https://api.twitter.com/oauth/request_token'
  ;
request.post({url:url, oauth:oauth}, function (e, r, body) {
  // Ideally, you would take the body in the response
  // and construct a URL that a user clicks on (like a sign in button).
  // The verifier is only available in the response after a user has
  // verified with twitter that they are authorizing your app.

  // step 2
  var req_data = qs.parse(body)
  var uri = 'https://api.twitter.com/oauth/authenticate'
    + '?' + qs.stringify({oauth_token: req_data.oauth_token})
  // redirect the user to the authorize uri

  // step 3
  // after the user is redirected back to your server
  var auth_data = qs.parse(body)
    , oauth =
      { consumer_key: "Agfw8ufsd7WXUlgH7DNS73rJa"
      , consumer_secret: "HOSleMfpOwldLKDR4JcN4BiK8XpbSbl76AQ90Izqau2DUL54m0"
      , token: auth_data.oauth_token
      , token_secret: req_data.oauth_token_secret
      , verifier: auth_data.oauth_verifier
      }
    , url = 'https://api.twitter.com/oauth/access_token'
    ;
  request.post({url:url, oauth:oauth}, function (e, r, body) {
    // ready to make signed requests on behalf of the user
    var perm_data = qs.parse(body)
      , oauth =
        { consumer_key: "Agfw8ufsd7WXUlgH7DNS73rJa"
        , consumer_secret: "HOSleMfpOwldLKDR4JcN4BiK8XpbSbl76AQ90Izqau2DUL54m0"
        , token: perm_data.oauth_token
        , token_secret: perm_data.oauth_token_secret
        }
      , url = 'https://api.twitter.com/1.1/users/show.json'
      , qs =
        { screen_name: perm_data.screen_name
        , user_id: perm_data.user_id
        }
      ;
    request.get({url:url, oauth:oauth, qs:qs, json:true}, function (e, r, user) {
      console.log(user)
    })
  })
})

}



const Chartspage  = (props) => {
  return (
    <div className="jumbotron">
      <h1>
      {test()}
      <i>ChartsPage</i>
      </h1>
    </div>
  )
};



export default Chartspage;
