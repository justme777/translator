import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
    selector: 'app-text-analyzer',
    templateUrl: './text-analyzer.component.html',
    styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent implements OnInit {

    constructor(private dataService: DataService) {
        console.log('constructor ran..');
    }

    ngOnInit() {
    }

    title = 'Text Analyzer';
    text = 'book';
    newWords = null;
    excludedWords = [];

    translateWord(word: Word) {
        this.dataService.getTranslation(word.name).subscribe((data) => {
            word.translation = data;
        });
    }

    translateWord2() {
        console.log('');
    }

    getNewWords = function () {
        let newWords = null;
        var allWords = this.text.toLowerCase().split(/\s+/);
        var res = [];
        var excludedWords = this.getExcludedWords();
        for (let word of allWords) {
            if (word && excludedWords.indexOf(word) == -1) {
                let isExist = false;
                for (let i in newWords) {
                    if (newWords[i].name == word) {
                        newWords[i].frequency++;
                        isExist = true;
                        break;
                    }
                }
                if (!isExist) {
                    if (newWords == null) newWords = new Array<Word>();
                    let newWord = new Word();
                    newWord.name = word;
                    newWord.frequency = 1;
                    newWord.translation = "";
                    newWords.push(newWord);
                }
            }

        }
        if (newWords != null)
            var res: any[] = newWords.sort((obj1: Word, obj2: Word) => {
                if (obj1.frequency < obj2.frequency) {
                    return 1;
                }

                if (obj1.frequency > obj2.frequency) {
                    return -1;
                }

                return 0;
            });

        return res;
    }

    getExcludedWords = function () {
        var excludedWordsStr = "a,in,the,but,on,to,into,onto,and,of,with,when,has,was,is,were," +
            "this,its,it,by,will,as,for,have,an,some,many,that,out,can,at,from,"
            + "not,if,which,"
            + "one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,my,your";
        return excludedWordsStr.split(',');
    }

    onBtnAnalyzeClick() {
        this.newWords = this.getNewWords();
    }
}

export class Word {
    id: number;
    name: string;
    frequency: number;
    translation: string;
}