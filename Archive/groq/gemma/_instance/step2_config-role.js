const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Liste de citations prédéfinies
const suggestion = [
    {
        "suggestion": "L'assistant aide l'utilisateur à définir une idée de projet",
        "auteur": "Pi 3,14"
    }
    // Ajoutez plus de citations ici...
];

async function main(
) {

    groq.chat.completions.create({
        messages:  [
            {
                role: "assistant",
                content: ` tu aura pour mission d'assister le système dans sa compréhension du fonctionnement des suggestions comme prolongement logique à une idée regard des intelligences artificielles et de la métaphysique.`
            },
            {
                role: "system",
                content: `suggestion: "${suggestion.suggestion}" - ${suggestion.auteur}. Prompt generated by an artificial intelligence: PiBot.`
            },
            {
                role: "system",
                content: `You will use the .md (markdown) format to write the suggestion and its development plan.`
            }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.2,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion) => {
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "output/bitbot_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation généré et enregistré dans " + outputFilePath);
    });
}

main();