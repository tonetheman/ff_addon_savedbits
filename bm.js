
(
    function() {
        let c = browser.tabs.getCurrent();
        let title = browser.tabs.getCurrent().title;
        let u = browser.tabs.getCurrent().url;

        f = 'https://savedbits.com/save.php?url=' + 
        //encodeURIComponent(window.location.href) +
        encodeURIComponent(u) + 
        //'&title=' + encodeURIComponent(document.title) + '&v=1&';
        '&title=' + encodeURIComponent(browser.tabs.getCurrent().title) + '&v=1&';    
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

        console.log(c);
    }
)()
