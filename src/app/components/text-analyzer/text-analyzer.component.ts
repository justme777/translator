import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Text Analyzer';
  text = new Observable();
  newWords = [];
  excludedWords = [];

  myFunction = function () {
      console.log('myFunction()');
      this.text.setValue("some text 2");
      let arr = this.getNewWords(this.text);

  }

  getNewWords = function () {
      var allWords = this.text.split(/\s+/);
      var res = [];
      this.excludedWords = this.getExcludedWords();
      for (let word of allWords) {
          console.log(word);
      }

      return res;
  }

  getExcludedWords = function () {
      var excludedWordsStr = "a,in,the,but,on,to,into,onto,and,of,with,when,has,was,is,were," +
          "this,its,it,by,will,as,for,have,an,some,many,that,out,can,at,from,"
          + "not,if,which,"
          + "one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve";
      return excludedWordsStr.split(',');
  }

  onBtnAnalyzeClick() {
      console.log('onBtnAnalyzeClick();');
  }
}

export class Word {
    id: number;
    name: string;
    frequency: number;
    translation: string;
}