let symq = [
    "From light into being.",
    "Turret deployed.",
    "Turret online.",
    "Aligning defense system.",
    "Defenses in place.",
    "Turret in place.",
    "Sentry deployed.",
    "Sentry Turret placed.",
    "Sentry online.",
    "Prakash se jeevan mein.",
    "Raksha pranali sanrekhit karna.",
    "My teleporter is online.",
    "My turret was destroyed.",
    "My defenses are weakened.",
    "Intruder detected.",
    "My sentry was destroyed.",
    "Yahí param vaastavikta hai!",
    "Reality bends to my will!",
    "Symmetra reporting."
]

const name = "Symmetra";
var chat;
var x = 0;

$(document).on('keypress', function (e) {

    if (e.which == 13) {
        console.log("pressed", x);
        if (x == 0) {
            x++;
            $(".container").animate({ left: '0' });       
            chat = setInterval(function () { /* Content*/
                const random = Math.floor(Math.random() * symq.length);
                $("#chat").append("<div id='msg'><span class='user'> [" + name + "]: </span><span class='msgo'>" + symq[random] + "</span></div>");
                var elem = document.getElementById('chat');
                elem.scrollTop = elem.scrollHeight;
                console.log(symq[random]);
                //console.log(x);
            }, 2000);

        }
        else if (x == 1) {
            clearInterval(chat);
            $(".container").animate({ left: '-50em' });
            x--;
        }
    }
});
