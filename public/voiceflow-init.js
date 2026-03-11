(function (d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function () {
        window.voiceflow.chat.load({
            verify: { projectID: '66e854fca9ce8dd052199fa8' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
                url: "https://runtime-api.voiceflow.com"
            }
        });

        // Event listener for manual open buttons
        function openChat(event) {
            event.preventDefault();
            window.voiceflow.chat.open();
        }

        var btn = document.getElementById('openChat');
        if (btn) {
            btn.addEventListener('click', openChat);
        }
    }
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
})(document, 'script');
