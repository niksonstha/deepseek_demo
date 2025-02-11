import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.DEEPSEEK_API;

const fetchData = async () => {
  try {
    const res = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: "which is bigger 9.9 or 9.11. Write in short form.",
          },
        ],
        top_p: 0,
        temperature: 0,
        repetition_penalty: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(res.data.choices[0].message.content);
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message
    );
  }
};

fetchData();
