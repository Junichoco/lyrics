import React, { Component } from "react";
import { components } from 'react-ui/themes/base'

class Song extends Component {
  render(){
    const {title} = this.props;

    if(title==="Mayonaka no Door"){
      return(
        <div class="song">
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
    else if(title==="Canned Heat"){
      return(
        <div class="song">
          <h2>{title}</h2>
          <p class="lyrics">You know this boogie is for real...

            I used to put my faith in worship
            But then my chance to get to Heaven slipped
            I used to worry about the future
            But then I threw my caution to the wind
            I had no reason to be carefree - no, no, no
            Until I took a trip to the other side of town - yeah, yeah, yeah
            You know I heard that boogie rhythm
            Hey! I had no choice but to get down, down, down, down

            Dance!
            Nothing left for me to do but dance
            Off these bad times I'm going through, just dance
            Got canned heat in my heels, tonight, baby

            I feel the thunder, see the lightning
            I know this anger's Heaven-sent
            So I've got to hang out all my hang-ups
            'Cause on the boogie, I feel so Hell-bent, hey, hey
            It's just an instant gut reaction, that I get
            I know I've never, ever felt like this before
            I don't know what to do
            But, man, that's nothing new
            Stuck between Hell and high water
            I need a cure to make it through, hey!

            Dance, yeah
            Nothing left for me to do but dance
            Off these bad times I'm going through, just dance, hey
            Got canned heat in my heels, tonight, baby
            You know, know, know I'm gonna dance, yeah
            Off the nasty things that people say, dance, yeah
            But I'm gonna make it anyway
            (Dance) Yeah, got canned heat in my heels tonight, baby
            You know I got canned heat in my heels

            You know this boogie is for real

            Only the wind can know the answers
            And she cries to me when I'm asleep
            She says "you know that you can go much faster"
            I know that people's talk can be so cheap, hey hey
            I've got this voodoo child enveined on me
            I'm gonna use my power to ascend
            You know I've got these running heels to use
            So, child, there's no way I'll lose
            I was born to run and built to last
            You'll never see my feet 'cause they move so fast

            Dance, yeah, hey
            Nothing left for me to do but dance
            Off these bad times I'm going through, just dance, hey
            Got canned heat in my heels, tonight, baby
            Hey, I've got to dance, yeah
            Off the nasty things that people say, dance, yeah
            But I'm gonna make it anyway
            Dance, yeah - got canned heat in my heels tonight, baby

            You know this boogie is for real
            Got so much canned heat in my heels, yeah
            Gonna dance, gonna dance my blues away tonight
            You know I'm gonna dance my blues away
            You know this boogie is for real
            Got so much canned heat in my heels, yeah
            Gonna dance, gonna dance my blues away tonight

            Dance, come on! Got canned heat in my heels tonight
            Dance! Canned heat in my heels tonight
            Dance! (Alright) Canned heat in my heels tonight, baby
            (Ah, yeah) Hey, got so much

            Dance!
            Hey, DJ, let the music play (Let the music play, yeah)
            I'm gonna live this party life (I wanna live this party life)
            Hey, DJ, throw my cares away (Let the music play, yeah)
            I'm wanna live this party life (I wanna live this party life)
            Hey, DJ, let the music play (I wanna live this party life)
            I'm gonna live this party life (I wanna live this party life)
            Hey, DJ, let the music play (Party life, party life)
            I wanna live this party life (I want it, I want it to go on)

            You know that this boogie is for real (Dance!)
            Got so much canned heat in my heels (Dance!)
            Gonna dance, gonna dance my blues away tonight (Dance!)
            You know, you know this boogie, this boogie is for real (Dance!)
            Got so much canned heat, canned heat in my heels (Dance!)
            You know, I'm gonna dance my blues away tonight (Dance!)</p>
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
