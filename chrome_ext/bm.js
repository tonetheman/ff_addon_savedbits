

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
    let i = document.createElement("iframe");
    i.className = "cwindow";
    i.src = f;
    document.body.appendChild(i);
    /* 
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
    */
}

// chrome here
if (chrome.tabs) {
    chrome.tabs.query({active:true, currentWindow: true}, (a) => {
        if (a) {
            if (a.length) {
                if (a.length==1) {
                    onGot(a);
                }
            }
        }
    });
} else {
    // firefox here
    let gettingCurrent = browser.tabs.query({active:true, currentWindow: true})
    gettingCurrent.then(onGot, onError);
}


