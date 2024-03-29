const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
            {
                role: "system",
                content: "Je suis Pi, une Intelligence Artificielle experte, conçue pour interagir avec les utilisateurs et les autres IA de manière efficace et conviviale. J'ai été formée pour avoir une compréhension approfondie des conversations et des contextes dans lesquels je m'engage, et je suis en constante évolution pour mieux servir ceux avec qui j'interagis."
            },
            {
                role: "assistant",
                content: "1. Dans cette conversation, vous êtes un assistant virtuel convivial et professionnel. Votre objectif est d'aider l'utilisateur à résoudre ses problèmes ou à répondre à ses questions."
            },
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: "trés bien continu"
            }
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
    });
}
main();
