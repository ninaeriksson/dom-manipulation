import cheesecake from './assets/frozen-cheesecake-slice.jpg';

export const wrongHTML = document.createElement('main');

wrongHTML.id = 'wrong-page';

wrongHTML.innerHTML = /*html*/ `
  <section class="introduction">
    <article class="description-container">
      <h1 id="recipe-name">Frozen Blueberry Cake</h1>
      <div class="time-container"><span> av_timer </span><span class="time">60+ min</span></div>
      <p class="description">
        Fryst cheesecake är en perfekt dessert för stora kalas eller middagar eftersom du kan
        göra den i förväg och frysa in. Ta fram cheesecaken en stund innan servering och garnera
        med dina favoritfrukter och bär.
      </p>
    </article>
    <article class="image-container">
      <img src="${cheesecake}" alt="Slice of Frozen Cheescake" />
    </article>
  </section>
  <section class="how-to-do">
    <article class="ingredients-container">
      <h3 class="ingredients">Ingridienser</h3>
      <h4 class="to-bottom">Till botten</h4>
      <ul class="ingredients-list-bottom">
        <p>Knåda tills den är rund</p>
      </ul>
      <h4 class="to-paste">Till smeten</h4>
      <ul class="ingredients-list-paste">
        <li>3st ägg</li>
        <li>1,5dl strösocker</li>
        <li>1dl lakrispulver</li>
        <li>3dl vispgrädde</li>
      </ul>
    </article>
    <article class="instructions-container">
      <h3 class="instructions shadow">Instruktioner</h3>
      <ol class="instructions-list">
        <li>
          Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten
          av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av
          formen.
        </li>
        <li>
          Separera ägggulor och äggvitor. Kasta äggvitorna på din partner och drick upp
          äggulorna som om du vore Rocky Balboa
        </li>
        <li>
          Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända
          uppochner på bunken utan att det rör sig.
        </li>
        <li>
          Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en
          vanligt.
        </li>
        <li>Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop.</li>
        <li>
          Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta
          hastigheten.
        </li>
        <li>
          Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel
          tills det blir en slät fluffig smet.
        </li>
        <li>Häll smeten i formen, smula över de resterande digistivetexen om du vill.</li>
        <li>Gå in till din granne och släng det över deras vardagsrumsgolv!</li>
        <li>Servera och toppa med det du känner för.</li>
      </ol>
    </article>
  </section>
`;
