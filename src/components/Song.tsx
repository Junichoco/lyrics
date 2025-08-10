import React, { Component } from "react";
import { components } from 'react-ui/themes/base'

class Song extends Component {
  render(){
    const {title} = this.props;

    if(title==="Mayonaka no Door"){
      return(
        <div class="song-title">
          <h2>{title}</h2>
          <p class="lyrics">To you, yes, my love to you<br/>
          Yes, my love to you, you, to you<br/>
          私は私 貴方は貴方と<br/>
          昨夜言ってた そんな気もするわ<br/>
          グレイのジャケットに<br/>
          見覚えがある コーヒーのしみ<br/>
          相変らずなのね<br/>
          ショーウィンドウに 二人映れば<br/>
          Stay with me<br/>
          真夜中のドアをたたき<br/>
          帰らないでと泣いた<br/>
          あの季節が 今 目の前<br/>
          Stay with me<br/>
          口ぐせを言いながら<br/>
          二人の瞬間を抱いて<br/>
          まだ忘れず 大事にしていた<br/>
          恋と愛とは 違うものだよと<br/>
          昨夜言われた そんな気もするわ<br/>
          二度目の冬が来て<br/>
          離れていった貴方の心<br/>
          ふり返ればいつも<br/>
          そこに 貴方を感じていたの<br/>
          Stay with me<br/>
          真夜中のドアをたたき<br/>
          心に穴があいた<br/>
          あの季節が 今 目の前<br/>
          Stay with me<br/>
          淋しさまぎらわして<br/>
          置いたレコードの針<br/>
          同じメロディ 繰り返していた<br/>
          Stay with me<br/>
          真夜中のドアをたたき<br/>
          帰らないでと泣いた<br/>
          あの季節が 今 目の前<br/>
          Stay with me<br/>
          口ぐせを言いながら<br/>
          二人の瞬間を抱いて<br/>
          まだ忘れず 暖めてた<br/>
          Stay with me<br/>
          真夜中のドアをたたき<br/>
          帰らないでと泣いた<br/>
          あの季節が 今 目の前<br/>
          Stay with me<br/>
          口ぐせを言いながら<br/>
          二人の瞬間を抱いて<br/>
          まだ忘れず 暖めてた<br/>
          Stay with me<br/>
          真夜中のドアをたたき<br/>
          帰らないでと泣いた<br/>
          あの季節が 今 目の前<br/>
          Stay with me</p>
        </div>
      )
    }
    else{
      return(
        <div class="song-title">
          <p>No song found</p>
        </div>
      )
    }
  }
}

export default Song
