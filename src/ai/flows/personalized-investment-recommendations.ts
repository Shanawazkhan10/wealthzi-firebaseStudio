'use server';

/**
 * @fileOverview A flow to provide personalized investment recommendations based on user financial goals and risk tolerance.
 *
 * - personalizedInvestmentRecommendations - A function that generates personalized investment recommendations.
 * - PersonalizedInvestmentRecommendationsInput - The input type for the personalizedInvestmentRecommendations function.
 * - PersonalizedInvestmentRecommendationsOutput - The return type for the personalizedInvestmentRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedInvestmentRecommendationsInputSchema = z.object({
  financialGoals: z
    .string()
    .describe('The user`s financial goals, e.g., retirement, buying a home, etc.'),
  riskTolerance: z
    .string()
    .describe('The user`s risk tolerance, e.g., conservative, moderate, aggressive.'),
  investmentAmount: z
    .number()
    .describe('The amount the user wants to invest.'),
});
export type PersonalizedInvestmentRecommendationsInput = z.infer<
  typeof PersonalizedInvestmentRecommendationsInputSchema
>;

const PersonalizedInvestmentRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized investment recommendations based on the user`s input.'),
});
export type PersonalizedInvestmentRecommendationsOutput = z.infer<
  typeof PersonalizedInvestmentRecommendationsOutputSchema
>;

export async function personalizedInvestmentRecommendations(
  input: PersonalizedInvestmentRecommendationsInput
): Promise<PersonalizedInvestmentRecommendationsOutput> {
  return personalizedInvestmentRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedInvestmentRecommendationsPrompt',
  input: {schema: PersonalizedInvestmentRecommendationsInputSchema},
  output: {schema: PersonalizedInvestmentRecommendationsOutputSchema},
  prompt: `You are an expert financial advisor. Based on the user's financial goals, risk tolerance, and investment amount, provide personalized investment recommendations.

Financial Goals: {{{financialGoals}}}
Risk Tolerance: {{{riskTolerance}}}
Investment Amount: {{{investmentAmount}}}

Recommendations:`, // Removed extra 'Recommendations:'
});

const personalizedInvestmentRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedInvestmentRecommendationsFlow',
    inputSchema: PersonalizedInvestmentRecommendationsInputSchema,
    outputSchema: PersonalizedInvestmentRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
