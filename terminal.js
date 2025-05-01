// Terminal Code

/// Focus Window
document.getElementById('terminalTextInput').focus();

/// Init Variables
let txtInput = document.getElementById('terminalTextInput').value.trim();
let txtLower;

/// Init Base Functions
function clearInput() {
    document.getElementById('terminalTextInput').value = "";
};
function scroll() {
    let termDiv = document.getElementById('terminalResults');
    termDiv.scrollTop = termDiv.scrollHeight;
};

// Scroll to bottom
scroll();

// Append Text to Terminal
function addText(textToAdd) {
    clearInput();
    document.getElementById('terminalResults').innerHTML += textToAdd + "</p>";
    scroll();
};

// Clear Terminal
function clear() {
    let termDiv = document.getElementById('terminalResults');
    termDiv.innerHTML = '<p>(c) Innsbruck Technologies 2079 - MOS AC-140 Interface</p><p>By using this program, you agree to all Bit City rules and regulations.</p>';
};

/// Init Command Functions

// Append List of Commands to Term. (Post)
function postHelp() {
    let helpList = [
        "help -> receive list of commands",
        "checkstatus (botname) -> check status of AFR-4790 robot",
        "ping (servername) -> ping a server",
        "request (info) -> pull from city personell database",
        "clear -> clears terminal"
    ].join("<br><br>");
    addText(helpList);
};

// Append Parameter-Dependent Text to Term.
function checkStatus(name) {
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

// Append Parameter-Dependent Text to Term.
function reqInfo(info) {
    if (info == "echo" || info == "foxtrot" || info == "delta") {
            addText("AFR-4790 machine built with dubious morality to fulfill the purpose<br><br>of robotic takeover. Often prone to corruption.")
    } else if (info == "rifle" || info == "boomgun" || info == "sten") {
            addText("Weapons created for AFR-4790s to handle. Upon their deactivation,<br><br> their weapons were scattered among the city.");
    } else {
            addText("Usage: request (echo/foxtrot/delta, rifle/boomgun/sten, etc.)");
    }
}

// Append Parameter-Dependent Text to Term.
function pingServer(server) {
    switch (server) {
        case "bit city":
            addText("Pinging BIT CITY with 32 bytes of data:");
            addText("Reply from BIT CITY: bytes=32 time=2ms TTL=220");
            break;
        default:
            addText("Usage: ping (bit city)");
            break;
    }
}

// Check which Command was Used
function checkCmds() {
    switch(txtLower){
        case "help":
            postHelp();
            break;
        default:
            addText("Bad command or filename")
            break;
    }
};

// Check Which Command Was Used
// This one checks for parameter-dependents first, and then runs the 'post' ones
function checkText() {
    txtInput = document.getElementById('terminalTextInput').value.trim();
    txtLower = txtInput.toLowerCase();

    if (txtInput != "" && txtInput.length < 60) {
        addText("<p class='userEnteredText'>> " + txtInput + "</p>");
        if (txtInput.includes("checkstatus")) {
            checkStatus(txtInput.replace('checkstatus ', ''));
        } else if (txtInput.includes("clear")) {
            clear();
        } else if (txtInput.includes("request")) {
            reqInfo(txtInput.replace('request ', ''));
        } else if (txtInput.includes('ping')) {
            pingServer(txtInput.replace('ping ', ''));
        } else {
            checkCmds();
        }
    }
};

/// Run when text input is submitted
document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault();
    checkText();
};