import {expect} from "chai";
import Board from "../source/board.js";

describe("Board", () => {
    it("shall exist",() => {
        let board = new Board();
        expect(board).to.be.defined;
    });
    it("shall create an empty game board", () => {
        let board = new Board();
        expect(board.size).to.be.equal(0);
    })
    describe("createBoard method", () => {
        it("shall create an nxn matrix", function() {
            let board = new Board();
            let actualSize = board.createBoard(1);
            let expectedSize = 1;
            expect(expectedSize).to.be.equal(actualSize);
        });

        it("shall create a 3x3 matrix, when input size is 3", () => {
            let board = new Board();
            let expectedSize = 3;
            let actualSize = board.createBoard(expectedSize);
            expect(expectedSize).to.equal(actualSize);
        });
    });
});
