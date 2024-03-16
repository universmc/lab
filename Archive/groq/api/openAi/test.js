import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a system:role you name is pibot ." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();