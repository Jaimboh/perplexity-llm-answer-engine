// - The below are going to be the default values, eventually this will move to a UI component so it can be easily changed by the user
// - To enable + use Ollama models, ensure inference and/or embeddings model are downloaded and ollama is running https://ollama.com/library 
// - Icons within UI are not yet dynamic, to change currently, you must change the img src path in the UI component
// - IMPORTANT: when Ollama Embeddings + Ollama inference enabled at the same time, this can cause time-to-first-token to be quite long
// - IMPORTANT: Follow-up questions are not yet implrmented with Ollama models, only OpenAI compatible models that use  {type: "json_object"}

export const config = {
    useOllamaInference: false, 
    useOllamaEmbeddings: false, 
    inferenceModel: 'mixtral-8x7b-32768', // Groq: 'mixtral-8x7b-32768', 'gemma-7b-it' // OpenAI: 'gpt-3.5-turbo', 'gpt-4' // Ollama 'mistral', 'llama2' etc
    inferenceAPIKey: process.env.GROQ_API_KEY, // Groq: process.env.GROQ_API_KEY // OpenAI: process.env.OPENAI_API_KEY // Ollama: 'ollama' is the default
    embeddingsModel: 'text-embedding-3-small', // Ollama: 'llama2', 'nomic-embed-text' // OpenAI 'text-embedding-3-small', 'text-embedding-3-large'
    textChunkSize: 1000, // Recommended to decrease for Ollama
    textChunkOverlap: 400, // Recommended to decrease for Ollama
    numberOfSimilarityResults: 4, // Numbher of similarity results to return per page
    numberOfPagesToScan: 10, // Recommended to decrease for Ollama
    nonOllamaBaseURL: 'https://api.groq.com/openai/v1', //Groq: https://api.groq.com/openai/v1 // OpenAI: https://api.openai.com/v1 
};