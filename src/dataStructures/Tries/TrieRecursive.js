class Trie {
    constructor() {
        this.characters = {};
        this.isWord = false;
    }
    addWord(word, index = 0) {
        if(index === word.length) {
            this.isWord = true;
            return this;
        }
        let char = word[index];
        let subTrie = this.characters[char] || new Trie();
        subTrie.addWord(word, index+1);
        this.characters[char] = subTrie;
    }


    findWord(word, index=0){
        let char = word[index];
        if(index < word.length - 1 && this.characters[char]) {
            index++;
            return this.characters[char].findWord(word, index);
        } else {
            return this.characters[char];
        }
    }
}