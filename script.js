const poemLines = [
  
  "Your love was sunlight I didn’t know I needed to bloom,",
  "It cracked the walls I built and filled every silent room",
  "Loving you wasn’t a moment, it became my breath, my pace,",
  "And even now, your name still feels like the safest place",
  "I didn’t just fall for you, I grew roots in your soul,",
  "Built a home in your heart, and called it my goal",
  "Loving you taught me how deep a heart can go,",
  "Not for holding on, but for choosing to show",
  "I never meant to hurt, yet I did in ways I couldn’t see,",
  "But I’ve sat with those shadows, and they now live in me",
  "There were moments I couldn’t be the man you deserved,",
  "Not from lack of love, but from wounds unobserved",
  "I thought love was just about showing up each day,",
  "But I missed the moments where your soul slipped away",
  "I fumbled with words, and worse, with silence,",
  "Not knowing that love needs more than just presence",
  "My fears, my walls they blurred what I truly meant,",
  "And now I carry the weight of all I never said",
  "Mistakes, I made not from lack of love,",
  "But from a heart still learning how to love enough",
  "I am not perfect, but I am present,",
  "Not finished, but I’m building, Not just loving but growing",
  "If I could gather every sorry I owe you,",
  "I’d fold them into the softest words and lay them at your door",
  "Your love was not just light, it was a mirror too,",
  "Showing me the parts I hid, the ones I never knew",
  "I wasn’t whole I see that now,",
  "Spoke less when I should’ve known how",
  "Loving you taught me to pause, to feel, to bend,",
  "To see that real strength is knowing where I need to mend",
  "I’ve stood in my flaws, not run or hide,",
  "And met the parts that once stayed outside",
  "Growth came quietly, through nights I spent alone,",
  "Learning that love means more than just “don’t go",
  "I broke, I rebuilt, not for your gaze,",
  "But to be someone worthy come what may",
  "No longer led by only emotion, but by intent that stays,",
  "By goals I’ve built with bare hands and countless growing days",
  "But if any ‘what ifs’ still linger like unsaid sighs,",
  "I don’t ask you to silence them just bring them to the light",
  "If there’s a map to a future, I’ve drawn it in quiet hours,",
  "With your name in its roots, and dreams blooming like flowers",
  "You may not have noticed how much I tried to grow,",
  "But every little step I took had your name carved below",
  "Love alone can’t build a home, I know,",
  "Values and dreams must also grow",
  "My vision’s clearer than it’s ever been,",
  "A life of purpose, where love fits in",
  "A life that holds your laughter, your silence, your in-between,",
  "A quiet kind of love, soft, steady, and serene",
  "I don’t offer just feelings in air,",
  "I offer a path, with wisdom and care",
  "Now I don’t dream just for me, I dream with space for two",
  "A life where your hopes feel seen, and your skies turn blue",
  "I’m building not just a path, but a place you can rest,",
  "Where your heart feels safe, and your soul feels blessed",
  "And if I’m better today, it’s not just for me,",
  "It’s because I see a life with you I want to live rightly",
  "I don’t chase the days, but I feel them slower now,",
  "Like time forgot to run ever since you stepped out somehow",
  "Your laughter still echoes in rooms that stay too quiet,",
  "And silence feels heavier when your name rests inside it",
  "I miss you not in noise, not in cries or broken sound,",
  "But in the softest ways… where your absence still surrounds",
  "Even when days rush and the world won’t stay still,",
  "There’s a space in my heart that only you fill",
  "In half written thoughts, in the moon’s quiet glow,",
  "In songs we never danced to, in places we’ll never go (yet)",
  "I don’t miss you like a moment, I miss you like home,",
  "Like stars that forget how to shine alone",
  "It’s not just the moments we shared that I long for the most,",
  "It’s the ones we could’ve lived… the unseen, the almost",
  "You weren’t just love, you were every quiet prayer,",
  "The kind of presence that still lingers in air",
  "And even as I grow, build, and try to stay strong,",
  "There’s a space only your presence makes whole like a half of a song",
  "If hearts can forget, then learn again,",
  "Maybe we too could meet like then",
  "Not to rewind, not to repair,",
  "But to see what still lives quietly there",
  "Your love lit the path I never knew I’d find,",
  "And I’ve followed that glow with a humbler mind",
  "Whatever thoughts your heart still holds in fear or shade,",
  "I’m here not to convince, but to walk beside what’s unsaid",
  "If this love had a voice, it would whisper through time,",
  "I’m still here, I still believe, I still call you mine",
  "One conversation, no rush, no fear",
  "Just sit beside me, be truly here",
  "If there’s still a ‘we’ written in fate,",
  "Let’s not let silence decide too late",
  "So if there’s still a whisper of us in your heart’s quiet room,",
  "Let’s meet before fate writes an ending too soon",
  "If even a piece of your heart remembers the us we once were",
  "let’s give it one moment, one conversation, to see if love still lives there",
  "I’ve walked through my flaws, rebuilt what I knew,",
  "Now all that I ask is a moment with you",
  "You were the light that taught me to see,",
  "And I’ve grown into someone I hoped I could be",
  "If even a whisper of us still remains,",
  "Let’s sit once, no pressure, no chains",
  "So give me a moment, not a vow or a plan,",
  "Just a talk heart to heart, soul to soul, hand in hand",
  "Let’s not let silence end the tale love still longs to spell",
  "just sit with me once, and hear what our hearts still softly tell"
];

// Event listener for the "Next" button on the intro page
document.addEventListener("DOMContentLoaded", () => {
  const nextIntroPartButton = document.getElementById("nextIntroPart");
  if (nextIntroPartButton) {
      nextIntroPartButton.addEventListener("click", showIntroPart2);
  }

  // IMPORTANT: Remove the event listener for #toParagraphBtn here,
  // as it's now a direct link (<a> tag) in index.html
});

function showIntroPart2() {
  document.getElementById("introPart1").classList.add("hidden");
  document.getElementById("introPart2").classList.remove("hidden");
}

function startSequence() {
  // Hide intro page entirely
  document.getElementById("introPage").classList.add("hidden");

  // Show main content page
  const main = document.getElementById("mainContent");
  main.classList.remove("hidden"); // This reveals mainContent

  const bgImage = document.getElementById("bgImage");
  const poemTitleContainer = document.getElementById("poemTitleContainer");
  const music = document.getElementById("bgMusic");

  // Pause any other music if it was playing (good practice)
  // No paragraphMusic here as it's a separate page now

  // 1. Play music
  music.volume = 0.8; // Set volume to 80%
  music.play().catch(e => console.error("Music play failed:", e));

  // 2. Background image shows for 3 seconds (it's already visible as mainContent is shown)
  bgImage.style.filter = "none";
  bgImage.style.transition = "none";

  setTimeout(() => {
      // 3. Slowly blur background (2 seconds transition)
      bgImage.style.transition = "filter 2s ease-out"; // Re-enable transition
      bgImage.style.filter = "blur(6px)";

      // 4. Show poem title after blur starts (0.5 seconds after blur begins)
      setTimeout(() => {
          poemTitleContainer.classList.remove('hidden'); // Ensure display is not 'none'
          poemTitleContainer.style.opacity = "1"; // Fade in title (CSS transition will handle it)

          // 5. Hide poem title after X seconds and start poem
          setTimeout(() => {
              poemTitleContainer.style.opacity = "0"; // Fade out title
              setTimeout(() => poemTitleContainer.classList.add('hidden'), 1000); // 1s matches CSS transition duration for opacity
              showPoem();
          }, 5000); // Title visible for 5 seconds (adjust as needed)

      }, 500); // 0.5 seconds after blur begins
  }, 3000); // Background image alone for 3 seconds
}

function showPoem() {
  const container = document.getElementById("poemContainer");
  let index = 0;
  const poemCoupletDisplayDuration = 100; // 6 seconds per couplet (adjust as needed)

  function showNextCouplet() {
      container.innerHTML = ''; // Clear previous lines

      if (index >= poemLines.length) {
          // Poem ended, show continue button (now an <a> tag)
          document.getElementById("toParagraphBtn").classList.remove("hidden");
          // Stop poem music when poem ends
          const music = document.getElementById("bgMusic");
          music.pause();
          music.currentTime = 0;
          return;
      }

      let coupletHTML = `<div class="fade-line">${poemLines[index]}</div>`;
      if (index + 1 < poemLines.length) {
          coupletHTML += `<div class="fade-line" style="animation-delay: 0.2s;">${poemLines[index + 1]}</div>`;
      }

      container.innerHTML = coupletHTML;
      index += 2; // Move to the next couplet

      setTimeout(showNextCouplet, poemCoupletDisplayDuration);
  }

  showNextCouplet();
}
