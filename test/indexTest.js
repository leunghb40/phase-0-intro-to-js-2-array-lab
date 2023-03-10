require('../index.js');

const cats = ["Milo", "Otis", "Garfield"];

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(function () {
      cats.length = 0;
      cats.push('Milo', 'Otis', 'Garfield');
    });

    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', function () {
        function destructivelyAppendCat(name) {
          cats.push(name);
        }
        destructivelyAppendCat('Ralph');
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', function () {
        function destructivelyPrependCat(name) {
          cats.unshift(name);
        }
        destructivelyPrependCat("Bob");
        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', function () {
        function destructivelyRemoveLastCat() {
          cats.pop();
        }
        destructivelyRemoveLastCat();
        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', function () {
        function destructivelyRemoveFirstCat() {
          cats.shift();
        }
        destructivelyRemoveFirstCat();
        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });

    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        function appendCat(name) {
          const newCats = [...cats, name];
          return newCats;
        }
        const newCats = appendCat("Broom");
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', function () {
        function prependCat(name) {
          const newCats = [name, ...cats];
          return newCats;
        }
        const newCats = prependCat("Arnold");
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
        function removeLastCat() {
          const newCats = cats.slice(0, cats.length - 1);
          return newCats;
        }
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        function removeFirstCat() {
          const newCats = cats.slice(1);
          return newCats;
        }
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
