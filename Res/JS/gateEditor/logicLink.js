class LogicLinkPrototype {
    constructor(input, output, port) {
        input.connectOutput(this);
        this.input = input;

        this.output = output;
        this.port = port;
    }

    get shape() {
        let shape = {
            lines: [[this.fromPoint, this.toPoint]],
            arcs: []
        };
        return shape;
    }

    get from() {
        return this.input;
    }

    get to() {
        return this.output;
    }

    get fromPoint() {
        return this.input.getPortLocation(this);
    }

    get toPoint() {
        return this.output.getPortLocation(this);
    }
}

class LogicLink extends LogicLinkPrototype {
    constructor(input, output, port) {
        super(input, output, port);
        console.log(output);
        output.connectInput(this, port);
    }
}

// class mouseLink extends LogicLinkPrototype {
//     constructor() {

//     }
// }