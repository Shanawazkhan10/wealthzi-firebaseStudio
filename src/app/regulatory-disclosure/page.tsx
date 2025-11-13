
'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegulatoryDisclosurePage() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-3xl md:text-4xl font-extrabold text-foreground text-center">
              Regulatory Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm md:prose-base max-w-none text-foreground">
            <p>
              In terms of Annexure B of SEBI Circular No.
              SEBI/HO/IMD/IMD-II CIS/P/CIR/2021/0685 dated December 13, 2021,
              we, Lime Internet Private Limited (SEBI Registered Investment
              Advisor), hereby provide the required details:
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-8 mb-4 text-center">
              Data for the month ending - 31st October, 2025
            </h3>
            <div className="overflow-x-auto">
                <Table className='min-w-[800px]'>
                <TableHeader className='text-center'>
                    <TableRow>
                    <TableHead className='text-center'>Sr. No</TableHead>
                    <TableHead className='text-center'>Received from</TableHead>
                    <TableHead className='text-center'>Pending at the end of last month</TableHead>
                    <TableHead className='text-center'>Received</TableHead>
                    <TableHead className='text-center'>Resolved*</TableHead>
                    <TableHead className='text-center'>Total Pending#</TableHead>
                    <TableHead className='text-center'>Pending complaints &gt; 3months</TableHead>
                    <TableHead className='text-center'>Average Resolution time^ (in days)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className='text-center'>1</TableCell>
                    <TableCell className='text-center'>Directly from Investors</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className='text-center'>2</TableCell>
                    <TableCell className='text-center'>SEBI (SCORES)</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell className='text-center'> 3</TableCell>
                    <TableCell className='text-center'> Other Sources (if any)</TableCell>
                    <TableCell className='text-center'> 0</TableCell>
                    <TableCell className='text-center'> 0</TableCell>
                    <TableCell className='text-center'> 0</TableCell>
                    <TableCell className='text-center'> 0</TableCell>
                    <TableCell className='text-center'> 0</TableCell>
                    <TableCell className='text-center'> 0</TableCell>
                    </TableRow>
                    <TableRow className="font-bold">
                    <TableCell className='text-center' colSpan={2}>Grand Total</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </div>
            <p className="text-xs mt-2">
              *Inclusive of complaints of previous months resolved in the current month.
            </p>
            <p className="text-xs">
              #Inclusive of complaints pending as on the last day of the month.
            </p>
            <p className="text-xs">
              ^Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.
            </p>

             <h3 className="text-lg md:text-xl font-bold mt-12 mb-4 text-center">
              Trend of monthly disposal of complaints
            </h3>
            <div className="overflow-x-auto">
                <Table className='min-w-[600px]'>
                <TableHeader>
                    <TableRow>
                    <TableHead className='text-center'>Sr. No</TableHead>
                    <TableHead className='text-center'>Month</TableHead>
                    <TableHead className='text-center'>Carried forward from previous month</TableHead>
                    <TableHead className='text-center'>Received</TableHead>
                    <TableHead className='text-center'>Resolved*</TableHead>
                    <TableHead className='text-center'>Pending#</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className='text-center'>1</TableCell>
                        <TableCell className='text-center'>April 2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='text-center'>2</TableCell>
                        <TableCell className='text-center'>May 2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='text-center'>3</TableCell>
                        <TableCell className='text-center'>June 2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='text-center'>4</TableCell>
                        <TableCell className='text-center'>July 2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className='text-center'>5</TableCell>
                        <TableCell className='text-center'>August 2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className='text-center'>6</TableCell>
                        <TableCell className='text-center'>September 2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className='text-center'>7</TableCell>
                        <TableCell className='text-center'>October 2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </div>
            <p className="text-xs mt-2">
              *Inclusive of complaints of previous months resolved in the current month.
            </p>
            <p className="text-xs">
              #Inclusive of complaints pending as on the last day of the month.
            </p>
            
            <h3 className="text-lg md:text-xl font-bold mt-12 mb-4 text-center">
              Trend of annual disposal of complaints
            </h3>
            <div className="overflow-x-auto">
                 <Table className='min-w-[600px]'>
                <TableHeader>
                    <TableRow>
                    <TableHead className='text-center'>Sr. No</TableHead>
                    <TableHead className='text-center'>Year</TableHead>
                    <TableHead className='text-center'>Carried forward from previous month</TableHead>
                    <TableHead className='text-center'>Received</TableHead>
                    <TableHead className='text-center'>Resolved*</TableHead>
                    <TableHead className='text-center'>Pending#</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className='text-center'>1</TableCell>
                        <TableCell className='text-center'>2021-2022</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='text-center'>2</TableCell>
                        <TableCell className='text-center'>2022-2023</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className='text-center'>3</TableCell>
                        <TableCell className='text-center'>2023-2024</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell className='text-center'>4</TableCell>
                        <TableCell className='text-center'>2024-2025</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                        <TableCell className='text-center'>0</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </div>
             <p className="text-xs mt-2">
              *Inclusive of complaints of previous years resolved in the current year.
            </p>
            <p className="text-xs">
              #Inclusive of complaints pending as on the last day of the year.
            </p>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
