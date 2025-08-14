export function part2() {
  console.clear();

  const CORRECTS = {
    logoColor: "#1f2937",
    headerBorderBottomColor: "#e5e7eb",
    recipeName: "Frozen Cheescake",
    timeText: "60 min",
    imageSrc: "/src/assets/frozen-cheesecake-slice.jpg",
    ingredientsBottom: ["15st digistivetex", "Lite smör"],
    ingredientsPaste: [
      "3st ägg",
      "1,5dl strösocker",
      "3tsk vaniljsocker",
      "3dl vispgrädde",
      "400g naturell philadelphiaost",
    ],
    instructions: [
      "Smula sönder 10 stycken digistivetex och blanda sen med smöret. Bred ut det i botten av en en rund form med lösbara kanter. Det ska bli som en tjockt täcke på botten av formen.",
      "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.",
      "Vispa äggvitorna hårt med en elvisp. De är tillräckligt vispade när du kan vända uppochner på bunken utan att det rör sig.",
      "Häll upp grädden i en mellanstor bunke. Vispa de relativ hårt. En aning hårdare en vanligt.",
      "Blanda i philadelphiaosten och vaniljsockret med äggulorna och vispa ihop.",
      "Häll nu över innehållet i bunken med äggulor över grädden. Vispa ihop på lägsta hastigheten.",
      "Häll sedan över det innehållet till bunken med äggvitorna. Blande ihop med en gaffel tills det blir en slät fluffig smet.",
      "Häll smeten i formen, smula över de resterande digistivetexen om du vill.",
      "Ställ in i frysen över natten.",
      "Servera och toppa med det du känner för.",
    ],
    ingredientsContainerBg: "#f8fafc",
  };

  const $ = <T extends Element = Element>(sel: string) =>
    document.querySelector<T>(sel);
  const $$ = (sel: string) => Array.from(document.querySelectorAll(sel));
  const setText = (el: Element | null, text: string) => {
    if (el) el.textContent = text;
  };
  const ensureULItems = (ul: Element | null, texts: string[]) => {
    if (!ul) return;
    while (ul.firstChild) ul.removeChild(ul.firstChild);
    texts.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t;
      ul.appendChild(li);
    });
  };

  {
    const logo = $(".logo-text") as HTMLElement | null;
    if (logo) logo.style.color = CORRECTS.logoColor;
  }

  {
    const header = $("header") as HTMLElement | null;
    if (header) {
      header.style.display = "flex";
      header.style.alignItems = "center";
      header.style.justifyContent = "space-between";
      header.style.gap = "1rem";
    }
  }

  {
    const header = $("header") as HTMLElement | null;
    if (header) {
      header.style.borderBottomWidth = "1px";
      header.style.borderBottomStyle = "solid";
      header.style.borderBottomColor = CORRECTS.headerBorderBottomColor;
    }
  }

  {
    const nameEl = $("#recipe-name") || $("h1");
    setText(nameEl, CORRECTS.recipeName);
  }

  const timeContainer = document.querySelector(".time-container");
  const iconSpan = timeContainer?.querySelector(
    "span:first-child"
  ) as HTMLElement | null;

  if (iconSpan) {
    iconSpan.className = "material-symbols-outlined";
    iconSpan.textContent = "schedule";
  }

  const timeText = timeContainer?.querySelector("span:last-child");
  if (timeText) {
    timeText.textContent = "60+ min";
  }

  {
    const img = $("img") as HTMLImageElement | null;
    if (img) {
      img.src = CORRECTS.imageSrc;
      if (!img.alt || img.alt.trim() === "") {
        img.alt = "Slice of Frozen Cheescake";
      }
    }
  }

  {
    const cont = $(".ingredients-container") as HTMLElement | null;
    if (cont) cont.style.backgroundColor = CORRECTS.ingredientsContainerBg;
  }

  {
    const ulBottom = $(".ingredients-list-bottom");
    ensureULItems(ulBottom, CORRECTS.ingredientsBottom);
  }

  {
    const ulPaste = $(".ingredients-list-paste");
    ensureULItems(ulPaste, CORRECTS.ingredientsPaste);
  }

  {
    const heading = $(".instructions") as HTMLElement | null;
    if (heading) {
      heading.style.textShadow = "none";
      heading.classList.remove("shadow");
    }
  }

  {
    const ol = $(".instructions-list");
    if (ol) {
      while (ol.firstChild) ol.removeChild(ol.firstChild);
      CORRECTS.instructions.forEach((txt) => {
        const li = document.createElement("li");
        li.textContent = txt;
        ol.appendChild(li);
      });
    }
  }
}
