

function onError() {
    console.log("err!");
    alert("ERR: ");
}
function onGot(current) {
    console.log("current from onGot",current);
    
    let title = current[0].title;
    let u = current[0].url;
    
    f = 'https://savedbits.com/save.php?url=' + 
    encodeURIComponent(u) + 
    '&title=' + encodeURIComponent(title) + '&v=1&';    
    a = function() {       
        if (!window.open(f + 'noui=1&jump=doclose', 
            'savedbits', 'location=yes,links=no,scrollbars=no,toolbar=no,width=500,height=300')) 
            location.href = f + 'jump=yes'    
    };    
    if (/Firefox/.test(navigator.userAgent)) {       
        setTimeout(a, 0)    
    } else {       
        a()    
    }

}

// get the current tab
//let gettingCurrent = browser.tabs.getCurrent();
let gettingCurrent = browser.tabs.query({active:true, currentWindow: true})
gettingCurrent.then(onGot, onError);


