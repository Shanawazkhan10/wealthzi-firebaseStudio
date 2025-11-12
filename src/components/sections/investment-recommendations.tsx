'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { personalizedInvestmentRecommendations, PersonalizedInvestmentRecommendationsOutput } from '@/ai/flows/personalized-investment-recommendations';
import { BrainCircuit, Loader2 } from 'lucide-react';

const formSchema = z.object({
  financialGoals: z.string().min(20, {
    message: 'Please describe your financial goals in at least 20 characters.',
  }),
  riskTolerance: z.enum(['conservative', 'moderate', 'aggressive'], {
    required_error: 'Please select your risk tolerance.',
  }),
  investmentAmount: z.coerce.number().min(1000, {
    message: 'Investment amount must be at least Rs 1,000.',
  }),
});

export default function InvestmentRecommendations() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedInvestmentRecommendationsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      financialGoals: '',
      investmentAmount: 50000,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const recommendations = await personalizedInvestmentRecommendations(values);
      setResult(recommendations);
    } catch (e) {
      setError('Failed to get recommendations. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-3xl text-foreground flex items-center gap-2">
              <BrainCircuit className="w-8 h-8 text-primary" />
              AI-Powered Investment Plan
            </CardTitle>
            <CardDescription>
              Get a personalized investment recommendation from our AI financial advisor in seconds.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="financialGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Financial Goals</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., I want to save for my child's college education in 15 years and build a retirement corpus."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Describe your primary financial objectives.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="riskTolerance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Risk Tolerance</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your risk tolerance" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="conservative">Conservative</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="aggressive">Aggressive</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="investmentAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Investment Amount (Rs)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="50000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={loading} size="lg">
                  {loading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Plan...</>
                  ) : (
                    'Get My Free Plan'
                  )}
                </Button>
              </form>
            </Form>

            {error && <p className="mt-4 text-destructive">{error}</p>}
            {result && (
              <div className="mt-8 p-6 bg-muted rounded-lg border">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Your Personalized Recommendations</h3>
                <div className="prose prose-green max-w-none text-foreground">
                  <p>{result.recommendations}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
