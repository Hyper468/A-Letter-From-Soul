// NEW: Paragraph text array - adjust divisions as you see fit
const paragraphs = [
  `I still remember the first time our paths crossed how quietly, how unexpectedly, you walked into my world and brought a calm and peace I didn't know I needed you stepped into my life and everything changed Your presence was never loud, but it was everything, The kind of love that teaches more than it asks for, that holds space even in silence Loving you didn’t feel like falling it felt like finally finding ground. And your love… it changed me It lit up corners of me that had never known light It made me want to grow, to soften, to become someone worthy not just of love, but of you. You made me believe in better in myself, in love, in building something real.`,

  `But I made mistakes, Some I saw too late. Some I still carry like quiet apologies folded into my days. I didn’t always show up the right way not because I didn’t care, but because I was still learning how to care well none came from a lack of love only from a heart still learning how to love fully I confused stillness for strength, and silence for peace But I’ve sat with every flaw, not to punish myself but to understand, to grow, and to truly see you better I’ve faced every flaw with open eyes and an open heart, and I’ve grown Not just for myself, but for the kind of future where I could stand beside you not just as someone who loves you, but as someone who deserves to.`,

  `And I know… maybe there are doubts still lingering in your heart 'What ifs' Worries about whether I truly see the road ahead whether my goals and vision are clear now, Maybe you wonder if I’m still figuring it all out or if I’m ready to carry both love and purpose with the same strength. And to that, I say you don’t need to carry that worry anymore I’m not the man who once lost his way I’m becoming the one who’s walking it now, with open eyes and steady hands My dreams are no longer just for me they now hold space for us. A future where your hopes are safe. Where love is not just a feeling but a foundation.`,

  `My love is no longer just a feeling it’s a commitment, a deeper vision, a wiser heart. I’m building a life rooted in clarity, purpose, and truth not only for myself but for a future that welcomes us both. One not shaped by perfection but by presence by a bond that bends, forgives, and chooses each other again and again. And in every step I take now there’s a trace of you because you were never just a chapter, You were the ink.`,

  `I miss you not in noise but in all the soft, quiet places where you used to be In the calm, In the laughter, in the way love used to feel when it was ours in the gentle ways only a soul can miss something it once called home And I’m not writing this to prove anything or to change your mind I’m writing it to open a door. I’m writing this to invite you gently, calmly to one conversation, One moment. Just to see what still lives between us not to rush, not to fix… just to feel, To listen, To hold space for something that maybe, just maybe, still wants to grow if there’s even a quiet whisper of us still in your heart sit with me once Not to fix the past, Not to decide the future. Just to feel what still breathes between us. To talk, To breathe, To see.`,

  `If even a small part of your heart remembers what we had I’ll be right here not asking for everything just a chance to begin again, better, together. I offer no pressure, no promises too soon only presence. Only one honest, soul to soul conversation. And maybe from that, something new can grow not a second chance at what was, but a stronger beginning for what could be I’m not asking to rewrite the past only for one honest moment with you. To feel what still breathes between us, and to see if the future still holds the chapters we never got to finish.`,  
  
  `And maybe I’m foolish… but sometimes the way you followed the echoes of our story even briefly, even silently felt like your heart reaching back, even when words didn’t come maybe it was nothing, But maybe it was everything and I’ve held on to that gentle thread not as proof but as a quiet hope that somewhere, somehow we both still feel the same song humming underneath In a world full of endings I still believe in our pause And if even a flicker of us still lives in your heart, I’ll be here not to force, but to feel with you, once more.`,

  `This isn’t a plea it’s a promise if you ever look back and wonder if someone still believes in us, you’ll find me there, holding hope with your name on it. Let’s not let silence write the story love still wants to tell sit with me, once, and let’s listen to what our hearts never stopped whispering.`
];

let currentParagraphIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const nextParagraphBtn = document.getElementById("nextParagraphBtn");
  if (nextParagraphBtn) {
    nextParagraphBtn.addEventListener("click", showNextParagraph);
  }
  startParagraphSequence();
});

function startParagraphSequence() {
  const paragraphBgImage = document.getElementById("paragraphBgImage");
  const paragraphMusic = document.getElementById("paragraphMusic");
  const paragraphTextContainer = document.getElementById("paragraphTextContainer");
  const nextParagraphBtn = document.getElementById("nextParagraphBtn");

  currentParagraphIndex = 0;
  paragraphTextContainer.innerHTML = '';

  console.log("startParagraphSequence called");

  paragraphMusic.volume = 0.7;
  paragraphMusic.play().catch(e => console.error("Paragraph music play failed:", e));

  paragraphBgImage.style.filter = "none";
  paragraphBgImage.style.transition = "none";

  setTimeout(() => {
    paragraphBgImage.style.transition = "filter 2s ease-out";
    paragraphBgImage.style.filter = "blur(6px)";

    setTimeout(() => {
      paragraphTextContainer.classList.remove('hidden');
      console.log("paragraphTextContainer is now visible");
      showNextParagraph();
      nextParagraphBtn.style.opacity = "1";
      nextParagraphBtn.classList.remove('hidden');
      console.log("nextParagraphBtn is now visible");
    }, 500);
  }, 3000);
}

function showNextParagraph() {
  const paragraphTextContainer = document.getElementById("paragraphTextContainer");
  const nextParagraphBtn = document.getElementById("nextParagraphBtn");

  console.log("showNextParagraph called. Current index:", currentParagraphIndex, "Paragraphs length:", paragraphs.length);

  if (currentParagraphIndex < paragraphs.length) {
      // Step 1: Fade out the current paragraph content
      paragraphTextContainer.style.opacity = "0";

      // Step 2: After the fade-out (e.g., 500ms), update content and fade in
      setTimeout(() => {
          paragraphTextContainer.innerHTML = `<p>${paragraphs[currentParagraphIndex]}</p>`;
          // Ensure the container is not hidden by the 'hidden' class if it was applied.
          // This is crucial if a previous `classList.add('hidden')` on the container is involved.
          paragraphTextContainer.classList.remove('hidden');
          paragraphTextContainer.style.opacity = "1"; // Fade in the new content

          console.log("Paragraph content faded in:", paragraphs[currentParagraphIndex].substring(0, 50) + "...");
          currentParagraphIndex++;
      }, 500); // This delay should match or exceed your opacity transition time for smooth effect

  } else {
      console.log("All paragraphs displayed. Initiating final scene transition.");
      nextParagraphBtn.style.opacity = "0";
      setTimeout(() => nextParagraphBtn.classList.add('hidden'), 500);

      paragraphTextContainer.style.opacity = "0";
      setTimeout(() => paragraphTextContainer.classList.add('hidden'), 1000);

      setTimeout(() => {
          showFinalScene();
      }, 1500);
  }
}

function showFinalScene() {
  console.log("showFinalScene called!");

  const paragraphPage = document.getElementById("paragraphPage");
  const finalScene = document.getElementById("finalScene");
  const finalImage = document.getElementById("finalImage");
  // CHANGED: reference to finalMainLine
  const finalMainLine = document.getElementById("finalMainLine");

  const finalSubCaption1 = document.getElementById("finalSubCaption1");
  const finalSubCaption2 = document.getElementById("finalSubCaption2");
  const finalSubCaption3 = document.getElementById("finalSubCaption3");

  // Update error checking
  if (!finalScene || !finalImage || !finalMainLine || !paragraphPage || !finalSubCaption1 || !finalSubCaption2 || !finalSubCaption3) {
      console.error("Error: One or more final scene elements not found!");
      return;
  }

  paragraphPage.classList.add('hidden');
  console.log("#paragraphPage hidden.");

  finalScene.classList.remove('hidden');
  console.log("#finalScene class 'hidden' removed. Is it visible?", !finalScene.classList.contains('hidden'));

  // Fade in the image (existing code)
  setTimeout(() => {
      finalImage.classList.add('visible');
      console.log("#finalImage 'visible' class added. Current opacity:", getComputedStyle(finalImage).opacity);
  }, 100);

  // NEW: Fade in the main line (formerly main caption)
  setTimeout(() => {
      finalMainLine.classList.remove('hidden'); // Ensure display is not 'none'
      finalMainLine.classList.add('visible');
      console.log("#finalMainLine 'visible' class added. Current opacity:", getComputedStyle(finalMainLine).opacity);
  }, 2000); // Appears after 2000ms

  // Staggered fade-in for sub-captions (adjust timings as needed)
  setTimeout(() => {
      finalSubCaption1.classList.remove('hidden');
      finalSubCaption1.classList.add('visible');
      console.log("#finalSubCaption1 visible.");
  }, 4000); // Sub-caption 1 (2s after main line)

  setTimeout(() => {
      finalSubCaption2.classList.remove('hidden');
      finalSubCaption2.classList.add('visible');
      console.log("#finalSubCaption2 visible.");
  }, 5500); // Sub-caption 2 (1.5s after sub-caption 1)

  setTimeout(() => {
      finalSubCaption3.classList.remove('hidden');
      finalSubCaption3.classList.add('visible');
      console.log("#finalSubCaption3 visible.");
  }, 7000); // Sub-caption 3 (1.5s after sub-caption 2)
}