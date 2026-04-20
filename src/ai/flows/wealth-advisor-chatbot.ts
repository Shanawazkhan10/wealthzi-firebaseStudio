'use server';

/**
 * @fileOverview WealthAdvisorChatbot AI agent.
 *
 * - wealthAdvisorChatbot - A function that handles user queries related to financial planning, investment options, and LimeWealth services.
 * - WealthAdvisorChatbotInput - The input type for the wealthAdvisorChatbot function.
 * - WealthAdvisorChatbotOutput - The return type for the wealthAdvisorChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WealthAdvisorChatbotInputSchema = z.object({
  query: z.string().describe('The user query about financial planning, investment options, or LimeWealth services.'),
});
export type WealthAdvisorChatbotInput = z.infer<typeof WealthAdvisorChatbotInputSchema>;

const WealthAdvisorChatbotOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type WealthAdvisorChatbotOutput = z.infer<typeof WealthAdvisorChatbotOutputSchema>;

export async function wealthAdvisorChatbot(input: WealthAdvisorChatbotInput): Promise<WealthAdvisorChatbotOutput> {
  return wealthAdvisorChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'wealthAdvisorChatbotPrompt',
  input: {schema: WealthAdvisorChatbotInputSchema},
  output: {schema: WealthAdvisorChatbotOutputSchema},
  prompt: `You are a helpful AI-powered chatbot for LimeWealth, a wealth management website. Your goal is to provide quick and helpful answers to user queries about financial planning, investment options, and LimeWealth services.

  Use the following information to answer the user query:
  - LimeWealth offers mutual funds, FDs, bonds, portfolio management services and AIFs.
  - LimeWealth provides automated portfolio review and tracking.
  - LimeWealth has a team of wealth experts with 20+ years of experience.
  - LimeWealth manages ₹2,500 crore worth assets of 1000+ high net-worth clients.
  
  User Query: {{{query}}}
  `,
});

const wealthAdvisorChatbotFlow = ai.defineFlow(
  {
    name: 'wealthAdvisorChatbotFlow',
    inputSchema: WealthAdvisorChatbotInputSchema,
    outputSchema: WealthAdvisorChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
