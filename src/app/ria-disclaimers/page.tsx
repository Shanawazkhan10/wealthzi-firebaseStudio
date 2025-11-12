
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RIADisclaimersPage() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-heading text-3xl md:text-4xl font-extrabold text-foreground text-center">
              Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm md:prose-base max-w-none text-foreground">
            <p className="font-semibold">Wealthzi Investment Advisers (A division of Lime Internet Private Limited)</p>
            <p>[CIN: U74999DL2017PTC310507] [PAN: AADCL2103M] [GSTIN: 07AADCL2103M1ZP]</p>
            <p>
              [SEBI Registered Name: Lime Internet Private Limited] [SEBI RIA Registration No: INA000018133] [BASL Member ID: 2014] [Type of Registration: Non-Individual] [Validity of Registration: Perpetual] [Registered Address: Flat No. 603, 6th Floor, Kanchenjunga Building, 18 Barakhamba Road, New Delhi – 110001] [Principal Officer: Jyoti Prakash Nayak, Email: jyoti.prakash@wealthzi.com] [Compliance Officer: Harshit Singh, Email: harshit.singh@wealthzi.com] [Grievance Officer: Sanjeev Johari, Email: sanjeev.johari@nivesh.com]
            </p>
            <p>
              [SEBI Regional Office Address: Securities and Exchange Board of India, NBCC Complex, Office Tower-1, 8th Floor, Plate B, East Kidwai Nagar, New Delhi - 110023, Ph: 011-69012998, Email: sebinro@sebi.gov.in]
            </p>
            <h3 className="font-bold mt-8 mb-4">Disclaimers:</h3>
            <p>
              Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
            </p>
            <p>
              Registration granted by SEBI, membership of BASL and certification from National Institute of Securities Markets (NISM) in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
            </p>
            <p>
              The information is only for consumption by the client and such material should not be redistributed.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
