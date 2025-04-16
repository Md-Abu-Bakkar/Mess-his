async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const responseDiv = document.getElementById("response");

  if (!input) {
    responseDiv.innerText = "দয়া করে একটি প্রশ্ন লিখুন।";
    return;
  }

  responseDiv.innerText = "লোড হচ্ছে...";

  try {
    const res = await fetch("/.netlify/functions/ask", {
      method: "POST",
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    const answer = data.choices?.[0]?.message?.content || "উত্তর পাওয়া যায়নি।";
    responseDiv.innerText = answer;
  } catch (error) {
    responseDiv.innerText = "ত্রুটি হয়েছে: " + error.message;
  }
}
