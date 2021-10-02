class LogicGate {

    constructor (x, y) {
        this._pos = new Point(0, 0);

        this._shapeOBJ = null;

        this.moveTo(x, y)
    }

    // Getters

    get pos() {
        return this._pos;
    }

    get shape () {
        return this._shapeOBJ;
    }

    // SETTERS

    moveTo(x, y) {
        this._pos.moveTo(x, y);

        this._shapeOBJ = {
            lines: [],
            arcs: []
        };

        for (let i = 0; i < this.defaultShape.lines.length; i++) {
            this._shapeOBJ.lines.push([]);
            for (let j = 0; j < 2; j++) {
                this._shapeOBJ.lines[i].push(this.defaultShape.lines[i][j].plus(this.pos));
            }
        }

        for (let i = 0; i < this.defaultShape.arcs.length; i++) {
            this._shapeOBJ.arcs.push([...this.defaultShape.arcs[i]]);

            for (let k = 0; k < 2; k++) {
                this._shapeOBJ.arcs[i][k] = this._shapeOBJ.arcs[i][k] + this.pos.pos[k];
            }
        }
    }
}

const SHAPES_SIZE = 25;
const SHAPES = {
    AND: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(-SHAPES_SIZE, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
            
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2]
        ]
    },
    NAND: {
        lines: [
            [
                new Point(-SHAPES_SIZE,  SHAPES_SIZE),
                new Point(0, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(-SHAPES_SIZE, SHAPES_SIZE)
            ],
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE),
                new Point(0, -SHAPES_SIZE)
            ],
            // Connectors
            [
                new Point(-SHAPES_SIZE, -SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, -SHAPES_SIZE * 0.6)
            ],
            [
                new Point(-SHAPES_SIZE, SHAPES_SIZE * 0.6),
                new Point(-SHAPES_SIZE * 1.8, SHAPES_SIZE * 0.6)
            ],
            [
                new Point(SHAPES_SIZE * 1.4, 0),
                new Point(SHAPES_SIZE * 1.8, 0)
            ]
            
        ],
        arcs: [
            [0, 0, SHAPES_SIZE, -Math.PI / 2, Math.PI / 2],
            [SHAPES_SIZE * 1.2, 0, SHAPES_SIZE * 0.2, 0, Math.PI * 2]
        ]
    },
    NOR: {},
    NOT: {},
    OR: {},
    XNOR: {},
    XOR: {}
}

class LogicGateAND extends LogicGate {

    get defaultShape() {
        return SHAPES.AND;
    }
}

class LogicGateNAND extends LogicGate {

    get defaultShape() {
        return SHAPES.NAND;
    }
}

class LogicGateNOR extends LogicGate {

    get defaultShape() {
        return SHAPES.NOR;
    }
}

class LogicGateNOT extends LogicGate {

    get defaultShape() {
        return SHAPES.NOT;
    }
}

class LogicGateOR extends LogicGate {

    get defaultShape() {
        return SHAPES.OR;
    }
}

class LogicGateXNOR extends LogicGate {

    get defaultShape() {
        return SHAPES.XNOR;
    }
}

class LogicGateXOR extends LogicGate {

    get defaultShape() {
        return SHAPES.XOR;
    }
}
