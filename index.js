//    Adding JQuery
// var head = document.getElementsByTagName('head')[0];
// var script = document.createElement('script');
// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
// // Then bind the event to the callback function.
// // There are several events for cross browser compatibility.
// script.onreadystatechange = handler;
// script.onload = handler;
// // Fire the loading
// head.appendChild(script);

// function handler() {
//     console.log('jquery added :)');
// }

//temp commit
var config={kcAllowedFuncNames:["zendeskchat"],"secureCookie":true};

// uncomment below line for zendesk chat snippet to work
//from here
// function zendeskchat(){
//     // api call for the chat bot
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.id = "ze-snippet";
//     // script.src = "https://static.zdassets.com/ekr/snippet.js?key=ec8c6ebf-c30b-4913-8eb7-8e275f5a03b8";
//     //script.src="https://static.zdassets.com/ekr/snippet.js?key=f46f2180-8163-4da7-8ed2-3cd88d17fe22";
//     script.src="https://static.zdassets.com/ekr/snippet.js?key=ee4b2577-f8b1-4994-bd51-287764be0680";

//     script.onreadystatechange= handler1;
//     script.onload = handler1;
//     head.appendChild(script);

//     function handler1(){
//         console.log("chatbot added");
//     }

// }

//to here
//px self tag AP-K0EYK7ZWBNRU-2
//Dileep's tag key AP-6WAJA3OATHHI-2
//PX tag configuration
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-K0EYK7ZWBNRU-2",config);
  
// static file load of aptrinsic.js file

// (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
//     (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
//   var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
//   var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
// })(window,document,"https://vineshgvk.github.io/Basic_Website/aptrinsic.js","AP-K0EYK7ZWBNRU-2",config);



//   iframe tag configure---start

// function initializeGainsightPX() 
// {
//     if (this.isGainsightPXInitialized) return;
    
//     // Gainsight PX Tag
//     (function (n, t, a, e, x) {   
//         let i = "aptrinsic"; n[i] = n[i] || function () {
//             (n[i].q = n[i].q || []).push(arguments)
//         }, 
//         n[i].p = e, n[i].c = x;
        
//         let r = t.createElement("script");
//         r.async = !0;
//         r.src = a + "?a=" + e;        
        
//         let c = t.getElementsByTagName("script")[0];
//         c.parentNode.insertBefore(r, c);
//     })
//     (window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-K0EYK7ZWBNRU-2",{ "iframeModeEnabled": false });
//     // End Gainsight PX Tag    
    
//     this.isGainsightPXInitialized = true;
// }
// initializeGainsightPX();

//   iframe tag configure---end

//segment configuration starts


//   !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="u08B2O4IHEFTd3edHO9R6dusuYi258CT";;analytics.SNIPPET_VERSION="4.15.3";
//   analytics.load("u08B2O4IHEFTd3edHO9R6dusuYi258CT");
//   analytics.page();
//   }}();

  


//segment configurations ends

//segment identify call starts

// function validate(username)
// {
// var username=document.getElementById("username").value;
// var password=document.getElementById("password").value;
//     const myaccount = {
//         a1: "PX_Company-1",
//         a2: "PX_Company-2",
//         a3: "PX_Company-3",
//         a4: "PX_Company-4"

//     }

//     if(username=="demosegment@gmail.com"){

    
// analytics.identify('segmentdemo1', {
//     email: 'demosegment@gmail.com',
//     name: 'Segment Demo'
//   });

//   alert("Logged in user id :");
//             //window.open("/HTML/home.html");
//             window.location = "https://vineshgvk.github.io/Basic_Website/home.html";
      
//             return false;
// }
// else
//         {
//             alert("login failed");
//         }
// }


//segment identify call ends

//validation identify code starts

function validate(username)
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
    const myaccount = {
        a1: "PX_Company-1",
        a2: "PX_Company-2",
        a3: "PX_Company-3",
        a4: "PX_Company-4"

    }

    if(username!=""){
        if((username=="vinesh.gandhe@gmail.com" || username=="gvk7663@gmail.com" || username=="vgande@gainsight.com"||username=="demouser7663@gmail.com" || username=="scheemala@gainsight.com" || username=="shivanicheemala99@gmail.com")&& password=="user" )
        {
            alert("valid user");
            b = username.substr(6, 5);
            var id = b;
//               var attrib_value= document.getElementById("myCheck").checked;
            if (username=="vinesh.gandhe@gmail.com") {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username,
                            "gender": "male",
//                             "useractive" :attrib_value,
//                             "checkattrib":attrib_value,
                            "customtest":"{working:yes,default:no,license:free}",
                            

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a4, //Required
                            "name": myaccount.a4,
                            // flat custom attributes
                        },
                        
                        );
                } else if (username=="gvk7663@gmail.com") {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a3, //Required
                            "name": myaccount.a3,
                            // flat custom attributes
                        });
                    
                } 
            else if (username=="vgande@gainsight.com") {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a2, //Required
                            "name": myaccount.a2,
                            // flat custom attributes
                        });
                } else {
                    aptrinsic('identify', {
                            //User Fields
                            "id": id, // Required for logged in app users
                            "email": username

                            // "userHash": hash.toString()// optional transient for HMAC identification
                        },

                        {
                            //Account Fields
                            "id": myaccount.a1, //Required
                            "name": myaccount.a1,
                            // flat custom attributes
                        });
                }

            alert("Logged in user id :" + b);
            //window.open("/HTML/home.html");
            window.location = "https://vineshgvk.github.io/Basic_Website/home.html";
      
            return false;

        }
        else
        {
            alert("login failed");
        }
    }
        else{
            alert("enter 'demouser7663@gmail.com'");
        }


}

//validation identify code ends
//to clear the cookies after logout
function deleteAllCookies() {
    window.aptrinsic('reset');
    counter = 0;
}

//contextual search through labels
aptrinsic("bot", "search", {"labels": ["articles"]});


// const a=document.querySelector(".beginbtn");
// a.addEventListener('click',onclicked);
// function onclicked(e){
//     console.log(e.eventtype);
// }

// const contbtn= document.querySelector(".btn-sendmail");
// contbtn.addEventListener("click",runevent);
// function runevent(e){
//     console.log(e);
    
// }


// script for payment page


var Productname = "mobile";
var Productbrand = "apple";
var Productprice = 78000;
var transactionStatus = "Success";


let purchaseinitiated = new CustomEvent('purchaseinitiated', {
    detail: {
        itemName: this.Productname,
        itemBrand: this.Productbrand
    }
})
let transactionsuccess = new CustomEvent('transactionsuccess', {
    detail: {
        Amountdeducted: this.Productprice,
        Paymentstatus: this.transactionStatus
    }
})
document.addEventListener('DOMContentLoaded', function () {
    let m = document.getElementById('paymentbtn');
    addButton(m);
    m.addEventListener('click', function (ev) {

        addPaymentStatus(m);
    });

});

function addButton(parent) {
    let b = document.createElement('button');
    b.setAttribute("id", "Buynow");
    b.setAttribute("class", "btn btn-primary");
    b.textContent = "Pay Now";
    parent.appendChild(b);
    return b;
}

function addPaymentStatus(parent) {
    let p = document.createElement('p');
    p.textContent = "Donot Refresh..." + "  Transaction is in Progress...";
    p.setAttribute("id", "tStatus");
    parent.appendChild(p);
    p.addEventListener('purchaseinitiated', purchasedone);
    p.dispatchEvent(purchaseinitiated);
    setTimeout(printreciept, 3000);


}
function purchasedone(ev) {

    console.log(ev.type, ev.detail);
    // Write your PX code here to track the custom events 
    aptrinsic('track', 'purchaseinitiated', {
        itemName: ev.detail.itemName,
        itemBrand: ev.detail.itemBrand
    });
}

function printreciept() {
    var p1 = document.getElementById("tStatus");
    document.addEventListener('transactionsuccess', transactiondone);
    document.dispatchEvent(transactionsuccess);
    p1.textContent = "Transaction Success";

}


function transactiondone(ev1) {

    console.log(ev1.type, ev1.detail);
    // Write your PX code here to track the custom events
    aptrinsic('track', 'transactionsuccess', {
        Amountdeducted: ev1.detail.Amountdeducted,
        Paymentstatus: ev1.detail.Paymentstatus
    });
}

// function segment_track(){

//     analytics.track({

//         anonymousId: '1',
        
//         event: 'slack-event',
        
//         properties: {
        
//         accountId: '62b85af4ce3e47000fbdfda6',
        
//         accountName: 'payments demo',
        
//         alertGroup: '2e772fdbaaaa48369f90e5494c387b5a',
        
//         description: 'Acknowledge for : a7f9cb04-c7ea-488d-98c5-3f29ab299109',
        
//         eventType: 'slack_acknowledge',
        
//         slackChannel: 'payments',
        
//         slackWorkspace: 'Anodot',
        
//         userName: 'yariv'
        
//         }
        
//         });

        
// }

// analytics.track('Form submitted', {
//     product: 'book',
//     title: 'The Name of the Wind'
//   });

// Zendesk chat bot
// <!-- Start of gainsightvkg Zendesk Widget script -->
// <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=ec8c6ebf-c30b-4913-8eb7-8e275f5a03b8"> </script>
// <!-- End of gainsightvkg Zendesk Widget script -->




