export function part1() {
  // 1. Receptets namn
  const recipeNameElement = document.querySelector("#recipe-name");
  const recipeName = recipeNameElement?.textContent?.trim();
  console.log("Recipe name:", recipeName);

  // 2. HTML-tag för receptnamnet
  const recipeTag = recipeNameElement?.tagName;
  console.log("Recipe tag:", recipeTag);

  // 3. Fontstorlek på beskrivning
  const descriptionParagraph = document.querySelector(
    ".description"
  ) as HTMLElement;
  const descriptionFontSize = descriptionParagraph
    ? window.getComputedStyle(descriptionParagraph).fontSize
    : undefined;
  console.log("Description font size:", descriptionFontSize);

  // 4. Alt-attribut på bilden
  const recipeImage = document.querySelector("img");
  const imageAlt = recipeImage?.getAttribute("alt");
  console.log("Image alt:", imageAlt);

  // 5. Bildens dimensioner och URL
  const imageInfo = recipeImage
    ? {
        url: recipeImage.src,
        height: recipeImage.height,
        width: recipeImage.width,
      }
    : undefined;
  console.log("Image info:", imageInfo);

  // 6. Antal ingredienser för pasten
  const pasteIngredients = document.querySelectorAll(
    ".ingredients-list-paste li"
  );
  console.log("Number of ingredients (paste):", pasteIngredients.length);

  // 7. Fjärde elementet i pasten
  const fourthIngredient = pasteIngredients[3]?.textContent?.trim();
  console.log("Fourth ingredient (paste):", fourthIngredient);

  // 8. Skapa array av instruktioner
  const instructionElements = document.querySelectorAll(
    ".instructions-list li"
  );
  const instructions = Array.from(instructionElements).map((el, idx) => ({
    order: idx + 1,
    text: el.textContent?.trim(),
  }));
  console.log("Instructions array:", instructions);
}
