import { useState } from "react";

const TherapistAIChat = () => {
  const [userInput, setUserInput] = useState("");
  const [responses, setResponses] = useState([]);

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  function extractResponseText(fullResponse) {
    const responseStartIndex = fullResponse.indexOf("As a therapist");
    return responseStartIndex !== -1
      ? fullResponse.slice(responseStartIndex)
      : fullResponse;
  }

  const handleSend = () => {
    if (userInput.trim() !== "") {
      const promptTemplate = `You are a compassionate therapist. A client has expressed the following concern: "${userInput}". Please provide a thoughtful and empathetic response.`;
      query({ inputs: promptTemplate, parameters: { max_tokens: 2000 } }).then(
        (response) => {
          const fullResponseText = response.length
            ? response[0].generated_text
            : "Sorry, something went wrong.";
          const extractedResponse = extractResponseText(fullResponseText);
          setResponses([...responses, extractedResponse]);
          setUserInput(""); // Clear input after sending
        }
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="chat-box bg-white p-6 shadow-md rounded-lg w-96">
        <div className="response-box overflow-y-auto h-40 bg-gray-100 p-4 mb-4 rounded-md">
          {responses.map((response, index) => (
            <p key={index} className="text-sm text-gray-800">
              {response}
            </p>
          ))}
        </div>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask your question here..."
          rows="4"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
        />
        <button
          onClick={handleSend}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default TherapistAIChat;
