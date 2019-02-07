import React, { Component } from 'react';

// Import Components
import FreeBirdForm  from './components/form/index.js';

// Import Styles
import './App.css';

export default class App extends Component {
  
  render() {
    console.log(
      `
      𝕴𝖋 𝕴 𝖑𝖊𝖆𝖛𝖊 𝖍𝖊𝖗𝖊 𝖙𝖔𝖒𝖔𝖗𝖗𝖔𝖜
      𝖂𝖔𝖚𝖑𝖉 𝖞𝖔𝖚 𝖘𝖙𝖎𝖑𝖑 𝖗𝖊𝖒𝖊𝖒𝖇𝖊𝖗 𝖒𝖊?
      𝕱𝖔𝖗 𝕴 𝖒𝖚𝖘𝖙 𝖇𝖊 𝖙𝖗𝖆𝖛𝖊𝖑𝖎𝖓𝖌 𝖔𝖓, 𝖓𝖔𝖜
      𝕮𝖆𝖚𝖘𝖊 𝖙𝖍𝖊𝖗𝖊'𝖘 𝖙𝖔𝖔 𝖒𝖆𝖓𝖞 𝖕𝖑𝖆𝖈𝖊𝖘 𝕴'𝖛𝖊 𝖌𝖔𝖙 𝖙𝖔 𝖘𝖊𝖊
      𝕭𝖚𝖙, 𝖎𝖋 𝕴 𝖘𝖙𝖆𝖞𝖊𝖉 𝖍𝖊𝖗𝖊 𝖜𝖎𝖙𝖍 𝖞𝖔𝖚, 𝖌𝖎𝖗𝖑
      𝕿𝖍𝖎𝖓𝖌𝖘 𝖏𝖚𝖘𝖙 𝖈𝖔𝖚𝖑𝖉𝖓'𝖙 𝖇𝖊 𝖙𝖍𝖊 𝖘𝖆𝖒𝖊
      𝕮𝖆𝖚𝖘𝖊 𝕴'𝖒 𝖆𝖘 𝖋𝖗𝖊𝖊 𝖆𝖘 𝖆 𝖇𝖎𝖗𝖉 𝖓𝖔𝖜
      𝕬𝖓𝖉 𝖙𝖍𝖎𝖘 𝖇𝖎𝖗𝖉 𝖞𝖔𝖚 𝖈𝖆𝖓 𝖓𝖔𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕺𝖍, 𝖔𝖍, 𝖔𝖍, 𝖔𝖍, 𝖔𝖍
      𝕬𝖓𝖉 𝖙𝖍𝖎𝖘 𝖇𝖎𝖗𝖉 𝖞𝖔𝖚 𝖈𝖆𝖓 𝖓𝖔𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕬𝖓𝖉 𝖙𝖍𝖎𝖘 𝖇𝖎𝖗𝖉 𝖞𝖔𝖚 𝖈𝖆𝖓 𝖓𝖔𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕷𝖔𝖗𝖉 𝖐𝖓𝖔𝖜𝖘, 𝕴 𝖈𝖆𝖓'𝖙 𝖈𝖍𝖆𝖓𝖌𝖊

      𝕭𝖞𝖊, 𝖇𝖞𝖊, 𝖇𝖆𝖇𝖞, 𝖎𝖙'𝖘 𝖇𝖊𝖊𝖓 𝖆 𝖘𝖜𝖊𝖊𝖙 𝖑𝖔𝖛𝖊
      𝕿𝖍𝖔𝖚𝖌𝖍 𝖙𝖍𝖎𝖘 𝖋𝖊𝖊𝖑𝖎𝖓𝖌 𝕴 𝖈𝖆𝖓'𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕭𝖚𝖙 𝖕𝖑𝖊𝖆𝖘𝖊 𝖉𝖔𝖓'𝖙 𝖙𝖆𝖐𝖊 𝖎𝖙 𝖘𝖔 𝖇𝖆𝖉𝖑𝖞
      𝕮𝖆𝖚𝖘𝖊 𝕷𝖔𝖗𝖉 𝖐𝖓𝖔𝖜𝖘 𝕴'𝖒 𝖙𝖔 𝖇𝖑𝖆𝖒𝖊
      𝕭𝖚𝖙, 𝖎𝖋 𝕴 𝖘𝖙𝖆𝖞𝖊𝖉 𝖍𝖊𝖗𝖊 𝖜𝖎𝖙𝖍 𝖞𝖔𝖚, 𝖌𝖎𝖗𝖑
      𝕿𝖍𝖎𝖓𝖌𝖘 𝖏𝖚𝖘𝖙 𝖈𝖔𝖚𝖑𝖉𝖓'𝖙 𝖇𝖊 𝖙𝖍𝖊 𝖘𝖆𝖒𝖊
      𝕮𝖆𝖚𝖘𝖊 𝕴'𝖒 𝖆𝖘 𝖋𝖗𝖊𝖊 𝖆𝖘 𝖆 𝖇𝖎𝖗𝖉 𝖓𝖔𝖜
      𝕬𝖓𝖉 𝖙𝖍𝖎𝖘 𝖇𝖎𝖗𝖉 𝖞𝖔𝖚'𝖑𝖑 𝖓𝖊𝖛𝖊𝖗 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕺𝖍, 𝖔𝖍, 𝖔𝖍, 𝖔𝖍, 𝖔𝖍
      𝕬𝖓𝖉 𝖙𝖍𝖎𝖘 𝖇𝖎𝖗𝖉 𝖞𝖔𝖚 𝖈𝖆𝖓 𝖓𝖔𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕬𝖓𝖉 𝖙𝖍𝖎𝖘 𝖇𝖎𝖗𝖉 𝖞𝖔𝖚 𝖈𝖆𝖓 𝖓𝖔𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕷𝖔𝖗𝖉 𝖐𝖓𝖔𝖜𝖘, 𝕴 𝖈𝖆𝖓'𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕷𝖔𝖗𝖉 𝖍𝖊𝖑𝖕 𝖒𝖊, 𝕴 𝖈𝖆𝖓'𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝕷𝖔𝖗𝖉, 𝕴 𝖈𝖆𝖓'𝖙 𝖈𝖍𝖆𝖓𝖌𝖊
      𝖂𝖔𝖓'𝖙 𝖞𝖔𝖚 𝖋𝖑𝖞 𝖍𝖎𝖌𝖍, 𝖋𝖗𝖊𝖊 𝖇𝖎𝖗𝖉, 𝖞𝖊𝖆𝖍
      `
    );
    return (
      <div className="App">
        <div>
        <iframe title="America" src="https://giphy.com/embed/ayfwIEB2hvoDm" width="50" height="50" frameBorder="0"  allowFullScreen />
          <h1 className="App-title">How many free minutes do you have?</h1>
          <FreeBirdForm  />
        </div>
      </div>
    );
  }
}

/* <iframe title="America" src="https://giphy.com/embed/ayfwIEB2hvoDm" width="50" height="50" frameBorder="0"  allowFullScreen /> */