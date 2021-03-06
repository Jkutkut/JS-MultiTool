// Base converter
function baseConverterUpdate() {
    let number = document.getElementById("baseConverterInput").value;
    let baseFrom = document.getElementById("baseFrom").value;
    let baseTo = document.getElementById("baseTo").value;

    document.getElementById("baseFrom").value = document.getElementById("baseFrom").value >>> 0;
    if (baseFrom < 2) {
        document.getElementById("baseFrom").value = 2;
        baseFrom = 2;
    }
    else if (baseFrom > 36) {
        document.getElementById("baseFrom").value = 36;
        baseFrom = 36;
    }

    document.getElementById("baseTo").value = document.getElementById("baseTo").value >>> 0;
    if (baseTo < 2) {
        document.getElementById("baseTo").value = 2;
    }
    else if (baseTo > 36) {
        document.getElementById("baseTo").value = 36;
        baseTo = 36;
    }
    
    let output = baseConverter(number, baseFrom, baseTo);
    document.getElementById("baseConverterOutput").value = output;
}

// ASCII
function ascii2binConverter() {
    let content = document.getElementById("ascii2binaryInput").value;

    let output = text2binaryConverter(content, false);

    document.getElementById("ascii2binaryOutputCode").value = output.codes;
    document.getElementById("ascii2binaryOutputBin").value = output.output;
}

function bin2asciiConverter() {
    let content = document.getElementById("binary2asciiInput").value;

    let output = binary2textConverter(content, false);

    document.getElementById("binary2asciiOutputCode").value = output.codes;
    document.getElementById("binary2asciiOutputBin").value = output.output;
}


function createTruth(optionsLen) {
    let tabla = document.getElementById("truthTable");
}


// Help functions
function copyToClipboard(outputId) {
    // Get element
    let copyText = document.getElementById(outputId);
    
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}