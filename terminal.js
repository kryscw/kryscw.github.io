document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('terminalTextInput').focus();
    var txtInput = document.getElementById('terminalTextInput').value.trim();
    var txtLower;
    var clearInput = function() {
        document.getElementById('terminalTextInput').value = "";
    };
    var scroll = function () {
        var termDiv = document.getElementById('terminalResultsCont');
        termDiv.scrollTop = termDiv.scrollHeight;
    };

    var painAudio = new Audio('sounds/hl2_00.mp3');

    scroll();

    var addText = function(textToAdd) {
        clearInput();
        document.getElementById('terminalResultsCont').innerHTML += textToAdd + "</p>";
        scroll();
    };

    var postHelp = function () {
        var helpList = [
            "help -> receive list of commands",
            "calltrain (south_sector, north_sector) -> call a train",
            "checkstatus (botname) -> check status of AFR-4790 robot",
            "ping (servername) -> ping a server",
            "request (info) -> pull from city personell database",
            "clear -> clears terminal"
        ].join("<br><br>");
        addText(helpList);
    };

    var clearTerminal = function () {
        var termDiv = document.getElementById('terminalResultsCont');
        termDiv.innerHTML = '<p>(c) Innsbruck Technologies 2079 - MOS AC-140 Interface</p><p>By using this program, you agree to all Bit City rules and regulations.</p>';
    };
    var checkStatus = function (name) {
        switch (name) {
            case "echo":
                addText("Rogue; Do not interact with this Bot.");
                break;
            case "delta":
                addText("Signs normal; kept under preservation in NORTH SECTOR.");
                break;
            case "foxtrot":
                addText("Ping was not received.");
                break;
            default:
                addText("Bot could not be found.");
                break;
        }
    }

    var reqInfo = function (info) {
        if (info == "pengy") {
                addText("Mayor of Bit City. Has faced plenty of backlash<br><br> from U.S. courts, but persists.");
        } else if (info == "echo" || info == "foxtrot" || info == "delta") {
                addText("AFR-4790 machine built with dubious morality to fulfill the purpose<br><br>of robotic takeover. Often prone to corruption.")
        } else if (info == "rifle" || info == "boomgun" || info == "sten") {
                addText("Weapons created for AFR-4790s to handle. Upon their deactivation,<br><br> their weapons were scattered among the city.");
        } else {
                addText("Usage: request (pengy, echo/foxtrot/delta, rifle/boomgun/sten, etc.)");
        }
    }

    var pingServer = function (server) {
        switch (server) {
            case "wyoming":
                addText("Pinging WYOMING with 32 bytes of data:");
                addText("Reply from WYOMING: bytes=32 time=62ms TTL=10");
                break;
            case "bit city":
                addText("Pinging BIT CITY with 32 bytes of data:");
                addText("Reply from BIT CITY: bytes=32 time=2ms TTL=220");
                break;
            default:
                addText("Usage: ping (wyoming, bit city, etc.)");
                break;
        }
    }

    var checkCmds = function () {
        switch(txtLower){
            case "help":
                postHelp();
                break;
            case "calltrain south_sector":
                addText("Calling train bound to SOUTH SECTOR...");
                break;
            case "calltrain north_sector":
                addText("Calling train bound to NORTH SECTOR...");
                break;
            case "pengy":
                addText("")
                break;
            case "innsbruck":
                addText("..")
                painAudio.play();
                break;
            default:
                addText("Bad command or filename")
                break;
        }
    };

    var checkText = function () {
        txtInput = document.getElementById('terminalTextInput').value.trim();
        txtLower = txtInput.toLowerCase();

        if (txtInput != "") {
            addText("<p class='userEnteredText'>kryscw> " + txtInput + "</p>");
            if (txtInput.includes("checkstatus")) {
                checkStatus(txtInput.replace('checkstatus ', ''));
            } else if (txtInput.includes("clear")) {
                clearTerminal();
            } else if (txtInput.includes("request")) {
                reqInfo(txtInput.replace('request ', ''));
            } else if (txtInput.includes('ping')) {
                pingServer(txtInput.replace('ping ', ''));
            } else {
                checkCmds();
            }
        }
    };

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
        evt.preventDefault();
        checkText();
    };
})