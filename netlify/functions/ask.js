exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);

  const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk-c0aa0165c9ae4ca9ae681b807a9ea614"
    },
    body: JSON.stringify({
      model: "deepseek-reasoner",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
