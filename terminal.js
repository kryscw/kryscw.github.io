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

    scroll();

    var addText = function(textToAdd) {
        document.getElementById('terminalResultsCont').innerHTML += "<p>" + textToAdd + "</p>";
        scroll();
    };

    var postHelp = function () {
        var helpList = [
            "help -> receive list of commands",
            "calltrain (south_sector, north_sector) -> call a train",
            "checkstatus (botname) -> check status of AFR-4790 robot",
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
                clearInput();
                addText("Rogue; Do not interact with this Bot.");
                break;
            case "delta":
                clearInput();
                addText("Signs normal; kept under preservation in NORTH SECTOR.");
                break;
            case "foxtrot":
                clearInput();
                addText("Ping was not received.");
                break;
            default:
                clearInput();
                addText("Bot could not be found.");
                break;
        }
    }

    var checkCmds = function () {
        switch(txtLower){
            case "help":
                postHelp();
                clearInput();
                break;
            case "calltrain south_sector":
                clearInput();
                addText("Calling train bound to SOUTH SECTOR...");
                break;
            case "calltrain north_sector":
                clearInput();
                addText("Calling train bound to NORTH SECTOR...");
                break;
            default:
                clearInput();
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
                clearInput();
                clearTerminal();
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